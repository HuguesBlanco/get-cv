import React, { useEffect, useState } from 'react';
import { Languages } from './appTypes';
import ConfigurationForm, {
  ConfigurationFormData,
} from './components/ConfigurationForm';
import CvDocument from './cv/CvDocument';
import CvDownloadLink from './cv/CvDownloadLink';
import CvViewer from './cv/CvViewer';
import {
  CoverLetter as CoverLetterFromCv,
  Cv as CvFromCv,
} from './cv/types/cvTypes';
import {
  convertMarkupToParagraphs,
  convertParagraphsToMarkup,
} from './libs/richTextParsers';
import { insertTag, substituteTag, Tag } from './libs/tags';
import { getCoverLetter } from './services/coverLetterService';
import { CoverLetter as CoverLetterFromApp } from './services/coverletterServiceTypes';
import { getCv } from './services/cvService';
import { Cv as CvFromApp } from './services/cvServiceTypes';
import SegmentedControl from './ui/SegmentedControl';

function createInitialForm(
  initialCv: CvFromApp,
  initialCoverLetter: CoverLetterFromApp,
  date: Date,
  language: Languages,
): ConfigurationFormData {
  const bodyMarkup = convertParagraphsToMarkup(initialCoverLetter.body);
  const bodyMarkupWithTags = insertTag(bodyMarkup, Tag.TARGETED_POSITION);

  return {
    formLanguage: language,
    isCvIncluded: true,
    isCoverLetterIncluded: true,
    date,
    targetedPosition: initialCv.targetedPosition,
    coverLetterBodyMarkup: bodyMarkupWithTags,
  };
}

function createNewLanguageForm(
  previousForm: ConfigurationFormData,
  initialCv: CvFromApp,
  initialCoverLetter: CoverLetterFromApp,
  language: Languages,
): ConfigurationFormData {
  const bodyMarkup = convertParagraphsToMarkup(initialCoverLetter.body);
  const bodyMarkupWithTags = insertTag(bodyMarkup, Tag.TARGETED_POSITION);

  return {
    ...previousForm,
    formLanguage: language,
    targetedPosition: initialCv.targetedPosition,
    coverLetterBodyMarkup: bodyMarkupWithTags,
  };
}

function buildCv(initialCv: CvFromApp, form: ConfigurationFormData): CvFromCv {
  const cvObjectiveWithTag = insertTag(
    initialCv.objective,
    Tag.TARGETED_POSITION,
  );

  const objectiveWithFormPosition = substituteTag(
    cvObjectiveWithTag,
    Tag.TARGETED_POSITION,
    form.targetedPosition,
  );

  const companies = initialCv.companies.filter(
    // Exclude Apollo internship to prioritize a cleaner layout by omitting less significant experience.
    (company) => company.name !== 'Apollo',
  );

  return {
    ...initialCv,
    targetedPosition: form.targetedPosition,
    objective: objectiveWithFormPosition,
    companies,
  };
}

function buildCoverLetter(
  initialCoverLetter: CoverLetterFromApp,
  form: ConfigurationFormData,
): CoverLetterFromCv {
  const markupWithoutTags = substituteTag(
    form.coverLetterBodyMarkup,
    Tag.TARGETED_POSITION,
    form.targetedPosition,
  );

  const structuredParagraphs = convertMarkupToParagraphs(markupWithoutTags);

  return {
    ...initialCoverLetter,
    date: form.date,
    body: structuredParagraphs,
  };
}

function App(): React.JSX.Element {
  const COLOR = '#4b6f96';

  const [language, setLanguage] = useState(Languages.ENGLISH);

  const initialCv = getCv(language);
  const initialCoverLetter = getCoverLetter(language);

  const now = new Date();

  const [form, setForm] = useState<ConfigurationFormData>(
    createInitialForm(initialCv, initialCoverLetter, now, language),
  );

  if (language !== form.formLanguage) {
    const updatedForm = createNewLanguageForm(
      form,
      initialCv,
      initialCoverLetter,
      language,
    );

    setForm(updatedForm);
  }

  const cv = buildCv(initialCv, form);
  const coverLetter = buildCoverLetter(initialCoverLetter, form);

  const documentComponent = (
    <CvDocument
      language={language}
      cv={cv}
      coverLetter={coverLetter}
      isCvIncluded={form.isCvIncluded}
      isCoverLetterIncluded={form.isCoverLetterIncluded}
      color={COLOR}
    />
  );

  // A "BindingError" in react-pdf may occur when rendering multiple `<Document>` components at the same time:
  // { name: "BindingError", message: 'Expected null or instance of Config, got an instance of Config' }.
  // The cause is unclear and is under discussion: https://github.com/diegomura/react-pdf/issues/2892.
  // Adding a 1000ms delay before rendering the second `<Document>` appears to work as a temporary workaround.
  const [isPreviewDisplayed, setIsPreviewDisplayed] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreviewDisplayed(true);
    }, 1000);

    return (): void => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <SegmentedControl
          options={[
            { label: 'English', value: Languages.ENGLISH },
            { label: 'French', value: Languages.FRENCH },
          ]}
          selectedValue={language}
          onChange={(newLanguage) => {
            setLanguage(newLanguage);
          }}
          color={COLOR}
        />

        <ConfigurationForm form={form} setForm={setForm} />

        <CvDownloadLink language={language}>{documentComponent}</CvDownloadLink>
      </div>

      <div>
        {isPreviewDisplayed && <CvViewer>{documentComponent}</CvViewer>}
      </div>
    </div>
  );
}

export default App;

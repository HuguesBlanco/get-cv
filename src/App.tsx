import React, { useEffect, useState } from 'react';
import { Languages } from './appTypes';
import ConfigurationForm, {
  ConfigurationFormData,
} from './components/ConfigurationForm';
import CvDocument from './cv/CvDocument';
import CvDownloadLink from './cv/CvDownloadLink';
import CvViewer from './cv/CvViewer';
import {
  convertMarkupToParagraphs,
  convertParagraphsToMarkup,
} from './libs/richTextParsers';
import { getCoverLetter } from './services/coverLetterService';
import { getCv } from './services/cvService';
import SegmentedControl from './ui/SegmentedControl';

function App(): React.JSX.Element {
  const COLOR = '#4b6f96';
  const TARGETED_POSITION_TAG = '{{targetedPosition}}'; // // Tag used in CV and cover letter initial data texts

  const [language, setLanguage] = useState(Languages.ENGLISH);

  const initialCv = getCv(language);
  const initialCoverLetter = getCoverLetter(language);

  const now = new Date();

  const [form, setForm] = useState<ConfigurationFormData>({
    formLanguage: language,
    isCvIncluded: true,
    isCoverLetterIncluded: true,
    date: now,
    targetedPosition: initialCv.targetedPosition,
    recipient: {},
    coverLetterBodyMarkup: convertParagraphsToMarkup(initialCoverLetter.body),
  });

  const isLanguageChangeDetected = language !== form.formLanguage;
  if (isLanguageChangeDetected) {
    // This is not an anti-pattern: https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
    setForm((previousForm) => ({
      ...previousForm,
      formLanguage: language,
      targetedPosition: initialCv.targetedPosition,
      coverLetterBodyMarkup: convertParagraphsToMarkup(initialCoverLetter.body),
    }));
  }

  // Build CV
  const objective = initialCv.objective.replace(
    TARGETED_POSITION_TAG,
    form.targetedPosition,
  );
  const companies = initialCv.companies.filter(
    // Exclude Apollo internship to prioritize a cleaner layout by omitting less significant experience.
    (company) => company.name !== 'Apollo',
  );
  const cv = {
    ...initialCv,
    targetedPosition: form.targetedPosition,
    objective,
    companies,
  };

  // Build cover letter
  const coverLetterBodyMarkup = form.coverLetterBodyMarkup.replace(
    TARGETED_POSITION_TAG,
    form.targetedPosition,
  );
  const structuredParagraphs = convertMarkupToParagraphs(coverLetterBodyMarkup);
  const coverLetter = {
    ...initialCoverLetter,
    date: form.date,
    body: structuredParagraphs,
  };

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
          onChange={setLanguage}
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

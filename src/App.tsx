import React, { useEffect, useState } from 'react';
import { Languages } from './appTypes';
import CvDocument from './cv/CvDocument';
import CvDownloadLink from './cv/CvDownloadLink';
import CvViewer from './cv/CvViewer';
import { CoverLetter, Cv } from './cv/types/cvTypes';
import {
  convertMarkupToParagraphs,
  convertParagraphsToMarkup,
} from './libs/richTextParsers';
import { insertTag, substituteTag, Tag } from './libs/tags';
import { getCoverLetter } from './services/coverLetterService';
import { getCv } from './services/cvService';
import Checkbox from './ui/Checkbox';
import SegmentedControl from './ui/SegmentedControl';
import TextInput from './ui/TextInput';
import Textarea from './ui/Textarea';

function App(): React.JSX.Element {
  const COLOR = '#4b6f96';

  const now = new Date();

  const [language, setLanguage] = useState<Languages>(Languages.ENGLISH);

  const initialCv = getCv(language);
  const initialCoverLetter = getCoverLetter(language);

  const [isCvIncluded, setIsCvIncluded] = useState(true);
  const [isCoverLetterIncluded, setIsCoverLetterIncluded] = useState(true);

  const [targetedPosition, setTargetedPosition] = useState(
    initialCv.targetedPosition,
  );

  const [coverLetterBodyMarkup, setCoverLetterBodyMarkup] = useState(
    insertTag(
      convertParagraphsToMarkup(initialCoverLetter.body),
      Tag.TARGETED_POSITION,
    ),
  );

  const cvObjectiveWithTag = insertTag(
    initialCv.objective,
    Tag.TARGETED_POSITION,
  );

  const cvObjective = substituteTag(
    cvObjectiveWithTag,
    Tag.TARGETED_POSITION,
    targetedPosition,
  );

  const cv: Cv = {
    ...initialCv,
    targetedPosition,
    objective: cvObjective,
    companies: initialCv.companies.filter(
      // Exclude Apollo internship to prioritize a cleaner layout by omitting less significant experience.
      (company) => company.name !== 'Apollo',
    ),
  };

  const coverLetterBody = convertMarkupToParagraphs(
    substituteTag(
      coverLetterBodyMarkup,
      Tag.TARGETED_POSITION,
      targetedPosition,
    ),
  );

  const coverLetter: CoverLetter = {
    ...initialCoverLetter,
    date: now,
    body: coverLetterBody,
  };

  const documentComponent = (
    <CvDocument
      language={language}
      cv={cv}
      coverLetter={coverLetter}
      isCvIncluded={isCvIncluded}
      isCoverLetterIncluded={isCoverLetterIncluded}
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
            setCoverLetterBodyMarkup(
              insertTag(
                convertParagraphsToMarkup(getCoverLetter(newLanguage).body),
                Tag.TARGETED_POSITION,
              ),
            );
            setTargetedPosition(getCv(newLanguage).targetedPosition);
          }}
          color={COLOR}
        />

        <Checkbox
          label="CV"
          isChecked={isCvIncluded}
          onChange={setIsCvIncluded}
        />

        <Checkbox
          label="Cover letter"
          isChecked={isCoverLetterIncluded}
          onChange={setIsCoverLetterIncluded}
        />

        <TextInput
          label="Job position"
          value={targetedPosition}
          onChange={setTargetedPosition}
        />

        <Textarea
          label="Cover letter body"
          value={coverLetterBodyMarkup}
          onChange={setCoverLetterBodyMarkup}
        />

        <CvDownloadLink language={language}>{documentComponent}</CvDownloadLink>
      </div>

      <div>
        {isPreviewDisplayed && <CvViewer>{documentComponent}</CvViewer>}
      </div>
    </div>
  );
}

export default App;

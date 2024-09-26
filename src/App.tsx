import { useState } from 'react';
import CvDocument from './components/CvDocument';
import CvDownloadLink from './components/CvDownloadLink';
import CvViewer from './components/CvViewer';
import { getCoverLetter } from './services/coverLetterService';
import { getCv } from './services/cvService';
import { Languages } from './types';
import Checkbox from './ui/Checkbox';
import SegmentedControl from './ui/SegmentedControl';
import TextInput from './ui/TextInput';
import Textarea from './ui/Textarea';
import {
  convertMarkupToParagraphs,
  convertParagraphsToMarkup,
} from './utils/richTextParsers';

function App(): JSX.Element {
  const COLOR = '#4b6f96';

  const [language, setLanguage] = useState<Languages>(Languages.ENGLISH);

  const [isCvIncluded, setIsCvIncluded] = useState(true);
  const [isCoverLetterIncluded, setIsCoverLetterIncluded] = useState(true);

  const cv = getCv(language);
  const initialCoverLetter = getCoverLetter(language);

  const [formJobPosition, setFormJobPosition] = useState('');
  const [coverLetterBodyMarkup, setCoverLetterBodyMarkup] = useState(
    convertParagraphsToMarkup(initialCoverLetter.body),
  );

  const coverLetter = {
    ...initialCoverLetter,
    body: convertMarkupToParagraphs(coverLetterBodyMarkup),
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
          onChange={(value) => {
            setLanguage(value);
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
          value={formJobPosition}
          onChange={setFormJobPosition}
        />

        <Textarea
          label="Cover letter body"
          value={coverLetterBodyMarkup}
          onChange={setCoverLetterBodyMarkup}
        />

        <CvDownloadLink language={language}>{documentComponent}</CvDownloadLink>
      </div>

      <div>
        <CvViewer>{documentComponent}</CvViewer>
      </div>
    </div>
  );
}

export default App;

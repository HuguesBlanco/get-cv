import { useState } from 'react';
import CvDocument from './components/CvDocument';
import CvDownloadLink from './components/CvDownloadLink';
import CvViewer from './components/CvViewer';
import { getCoverLetter } from './services/coverLetterService';
import { getCv } from './services/cvService';
import { Languages } from './types';
import Checkbox from './ui/Checkbox';
import SegmentedControl from './ui/SegmentedControl';

function App(): JSX.Element {
  const COLOR = '#4b6f96'; // TODO: Use a common variable with the COLOR in CvDocument.

  const [language, setLanguage] = useState<Languages>(Languages.ENGLISH);

  const [isCvIncluded, setIsCvIncluded] = useState(true);
  const cv = isCvIncluded ? getCv(language) : null;

  const [isCoverLetterIncluded, setIsCoverLetterIncluded] = useState(true);
  const coverLetter = isCoverLetterIncluded ? getCoverLetter(language) : null;

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

        <CvDownloadLink language={language}>
          <CvDocument language={language} cv={cv} coverLetter={coverLetter} />
        </CvDownloadLink>
      </div>

      <div>
        <CvViewer>
          <CvDocument language={language} cv={cv} coverLetter={coverLetter} />
        </CvViewer>
      </div>
    </div>
  );
}

export default App;

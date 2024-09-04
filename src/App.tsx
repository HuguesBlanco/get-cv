import { useState } from 'react';
import CvDownloadLink from './components/CvDownloadLink';
import CvViewer from './components/CvViewer';
import { Languages } from './types';
import Checkbox from './ui/Checkbox';
import SegmentedControl from './ui/SegmentedControl';

function App(): JSX.Element {
  const COLOR = '#4b6f96'; // TODO: Use a common variable with the COLOR in CvDocument.

  const [language, setLanguage] = useState<Languages>(Languages.ENGLISH);

  const [isCvIncluded, setIsCvIncluded] = useState(true);
  const [isCoverLetterIncluded, setIsCoverLetterIncluded] = useState(true);

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
      <div>
        <div>
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
        </div>

        <div>
          <Checkbox
            label="CV"
            isChecked={isCvIncluded}
            onChange={setIsCvIncluded}
          />
        </div>

        <div>
          <Checkbox
            label="Cover letter"
            isChecked={isCoverLetterIncluded}
            onChange={setIsCoverLetterIncluded}
          />
        </div>

        <div>
          <CvDownloadLink language={language} />
        </div>
      </div>

      <div>
        <CvViewer language={language} />
      </div>
    </div>
  );
}

export default App;

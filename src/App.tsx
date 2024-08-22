import { useState } from 'react';
import CvDownloadLink from './components/CvDownloadLink';
import CvViewer from './components/CvViewer';
import { Languages } from './types';
import SegmentedControl from './ui/SegmentedControl';

function App(): JSX.Element {
  const COLOR = '#4b6f96'; // TODO: Use a common variable with the COLOR in CvDocument.

  const [language, setLanguage] = useState<Languages>(Languages.ENGLISH);

  return (
    <>
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
        <CvDownloadLink language={language} />
      </div>
      <CvViewer language={language} />
    </>
  );
}

export default App;

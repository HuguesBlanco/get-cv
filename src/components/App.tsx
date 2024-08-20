import { PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from 'react';
import { Languages } from '../types';
import CvDocument from './CvDocument';
import CvViewer from './CvViewer';
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
        <PDFDownloadLink
          document={<CvDocument />}
          fileName="hugues_blanco_alvarez_cv.pdf"
        >
          {({ loading }) => (loading ? 'Loading...' : 'Download CV')}
        </PDFDownloadLink>
      </div>
      <CvViewer />
    </>
  );
}

export default App;

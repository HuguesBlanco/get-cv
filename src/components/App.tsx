import { PDFDownloadLink } from '@react-pdf/renderer';
import CvDocument from './CvDocument';
import CvViewer from './CvViewer';

function App(): JSX.Element {
  return (
    <>
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

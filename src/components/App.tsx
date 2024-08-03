import { PDFDownloadLink } from '@react-pdf/renderer';
import MyCvAsPdf from './CvAsPdf';
import CvViewer from './CvViewer';

function App(): JSX.Element {
  return (
    <>
      <div>
        <PDFDownloadLink
          document={<MyCvAsPdf />}
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

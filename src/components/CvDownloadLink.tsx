import { PDFDownloadLink } from '@react-pdf/renderer';
import CvDocument from './CvDocument';

function CvDownloadLink(): JSX.Element {
  return (
    <PDFDownloadLink
      document={<CvDocument />}
      fileName="hugues_blanco_alvarez_cv.pdf"
    >
      {({ loading }) => (loading ? 'Loading...' : 'Download CV')}
    </PDFDownloadLink>
  );
}

export default CvDownloadLink;

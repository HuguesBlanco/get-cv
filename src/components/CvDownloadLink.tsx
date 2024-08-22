import { PDFDownloadLink } from '@react-pdf/renderer';
import { Languages } from '../types';
import CvDocument from './CvDocument';

type CvDownloadLinkProps = {
  language: Languages;
};

function CvDownloadLink({ language }: CvDownloadLinkProps): JSX.Element {
  return (
    <PDFDownloadLink
      document={<CvDocument language={language} />}
      fileName="hugues_blanco_alvarez_cv.pdf"
    >
      {({ loading }) => (loading ? 'Loading...' : 'Download CV')}
    </PDFDownloadLink>
  );
}

export default CvDownloadLink;

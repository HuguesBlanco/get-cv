import { PDFDownloadLink } from '@react-pdf/renderer';
import { Languages } from '../types';
import CvDocument from './CvDocument';

type CvDownloadLinkProps = {
  language: Languages;
};

function CvDownloadLink({ language }: CvDownloadLinkProps): JSX.Element {
  const fileName = `hugues_blanco_alvarez_cv_${language}.pdf`;

  return (
    <PDFDownloadLink
      document={<CvDocument language={language} />}
      fileName={fileName}
    >
      {({ loading }) => (loading ? 'Loading...' : 'Download CV')}
    </PDFDownloadLink>
  );
}

export default CvDownloadLink;

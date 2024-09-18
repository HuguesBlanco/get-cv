import { PDFDownloadLink } from '@react-pdf/renderer';
import { Languages } from '../types';
import { PdfDocumentElement } from './types';

type CvDownloadLinkProps = {
  children: PdfDocumentElement;
  language: Languages;
};

function CvDownloadLink({
  language,
  children,
}: CvDownloadLinkProps): JSX.Element {
  const fileName = `hugues_blanco_alvarez_cv_${language}.pdf`;

  return (
    <PDFDownloadLink document={children} fileName={fileName}>
      {({ loading }) => (loading ? 'Loading...' : 'Download CV')}
    </PDFDownloadLink>
  );
}

export default CvDownloadLink;

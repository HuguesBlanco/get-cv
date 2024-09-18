import { PDFDownloadLink } from '@react-pdf/renderer';
import { Languages } from '../types';
import CvDocument from './CvDocument';

type CvDownloadLinkProps = {
  language: Languages;
  isCvIncluded: boolean;
  isCoverLetterIncluded: boolean;
};

function CvDownloadLink({
  language,
  isCvIncluded,
  isCoverLetterIncluded,
}: CvDownloadLinkProps): JSX.Element {
  const fileName = `hugues_blanco_alvarez_cv_${language}.pdf`;

  return (
    <PDFDownloadLink
      document={
        <CvDocument
          language={language}
          isCvIncluded={isCvIncluded}
          isCoverLetterIncluded={isCoverLetterIncluded}
        />
      }
      fileName={fileName}
    >
      {({ loading }) => (loading ? 'Loading...' : 'Download CV')}
    </PDFDownloadLink>
  );
}

export default CvDownloadLink;

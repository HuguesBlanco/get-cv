import { Document, Font } from '@react-pdf/renderer';
import { CoverLetter } from '../services/coverletterServiceTypes';
import { Cv } from '../services/cvServiceTypes';
import { Languages } from '../types';
import CvCoverLetter from './pages/CvCoverLetter';
import CvResume from './pages/CvResume';
import { PdfDocumentElement } from './types';

type CvDocumentProps = {
  language: Languages;
  cv: Cv | null;
  coverLetter: CoverLetter | null;
};

function CvDocument({
  language,
  cv,
  coverLetter,
}: CvDocumentProps): PdfDocumentElement {
  Font.registerHyphenationCallback((word) => [word]);

  const COLOR = '#4b6f96';

  return (
    <Document>
      {cv !== null && <CvResume cv={cv} language={language} color={COLOR} />}
      {coverLetter !== null && (
        <CvCoverLetter
          color={COLOR}
          language={language}
          coverLetter={coverLetter}
        />
      )}
    </Document>
  );
}

export default CvDocument;

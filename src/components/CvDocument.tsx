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
  color: string;
};

function CvDocument({
  language,
  cv,
  coverLetter,
  color,
}: CvDocumentProps): PdfDocumentElement {
  Font.registerHyphenationCallback((word) => [word]);

  return (
    <Document>
      {cv !== null && <CvResume cv={cv} language={language} color={color} />}
      {coverLetter !== null && (
        <CvCoverLetter
          color={color}
          language={language}
          coverLetter={coverLetter}
        />
      )}
    </Document>
  );
}

export default CvDocument;

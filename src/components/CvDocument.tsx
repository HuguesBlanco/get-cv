import { Document, Font } from '@react-pdf/renderer';
import { CoverLetter } from '../services/coverletterServiceTypes';
import { Cv } from '../services/cvServiceTypes';
import { Languages } from '../types';
import CvCoverLetter from './pages/CvCoverLetter';
import CvResume from './pages/CvResume';
import { PdfDocumentElement } from './types';

type CvDocumentProps = {
  language: Languages;
  cv: Cv;
  coverLetter: CoverLetter;
  isCvIncluded: boolean;
  isCoverLetterIncluded: boolean;
  color: string;
};

function CvDocument({
  language,
  isCvIncluded,
  cv,
  isCoverLetterIncluded,
  coverLetter,
  color,
}: CvDocumentProps): PdfDocumentElement {
  Font.registerHyphenationCallback((word) => [word]);

  return (
    <Document>
      {isCvIncluded && <CvResume cv={cv} language={language} color={color} />}
      {isCoverLetterIncluded && (
        <CvCoverLetter
          cv={cv}
          color={color}
          language={language}
          coverLetter={coverLetter}
        />
      )}
    </Document>
  );
}

export default CvDocument;

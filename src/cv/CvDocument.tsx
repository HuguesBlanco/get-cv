import { Document, Font } from '@react-pdf/renderer';
import CvCoverLetter from './pages/CvCoverLetter';
import CvResume from './pages/CvResume';
import { CoverLetter, Cv, Languages } from './types/cvTypes';
import { PdfDocumentElement } from './types/pdfTypes';

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

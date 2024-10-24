import { Document, Font } from '@react-pdf/renderer';
import CvCoverLetter from './pages/CvCoverLetter';
import CvResume from './pages/CvResume';
import { CoverLetter, Cv, Languages, Recipient } from './types/cvTypes';
import { PdfDocumentElement } from './types/pdfTypes';

type CvDocumentProps = {
  language: Languages;
  cv: Cv;
  coverLetter: CoverLetter;
  recipient?: Recipient | undefined;
  isCvIncluded: boolean;
  isCoverLetterIncluded: boolean;
  color: string;
};

function CvDocument({
  cv,
  coverLetter,
  recipient,
  isCvIncluded,
  isCoverLetterIncluded,
  language,
  color,
}: CvDocumentProps): PdfDocumentElement {
  Font.registerHyphenationCallback((word) => [word]);

  return (
    <Document>
      {isCvIncluded && <CvResume cv={cv} language={language} color={color} />}
      {isCoverLetterIncluded && (
        <CvCoverLetter
          cv={cv}
          coverLetter={coverLetter}
          recipient={recipient}
          language={language}
          color={color}
        />
      )}
    </Document>
  );
}

export default CvDocument;

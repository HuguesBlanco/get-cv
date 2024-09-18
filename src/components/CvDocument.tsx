import { Document, Font } from '@react-pdf/renderer';
import { getCoverLetter } from '../services/coverLetterService';
import { getCv } from '../services/cvService';
import { Languages } from '../types';
import CvCoverLetter from './pages/CvCoverLetter';
import CvResume from './pages/CvResume';
import { PdfDocumentElement } from './types';

type CvDocumentProps = {
  language: Languages;
  isCvIncluded: boolean;
  isCoverLetterIncluded: boolean;
};

function CvDocument({
  language,
  isCvIncluded,
  isCoverLetterIncluded,
}: CvDocumentProps): PdfDocumentElement {
  const cv = getCv(language);
  const coverLetter = getCoverLetter(language);

  Font.registerHyphenationCallback((word) => [word]);

  const COLOR = '#4b6f96';

  return (
    <Document>
      {isCvIncluded && <CvResume cv={cv} language={language} color={COLOR} />}
      {isCoverLetterIncluded && (
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

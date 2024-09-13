import { Document, Font, Text } from '@react-pdf/renderer';
import { getCv } from '../services/cvService';
import { Languages } from '../types';
import CvResume from './pages/CvResume';
import CvPage from './primitives/CvPage';
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

  Font.registerHyphenationCallback((word) => [word]);

  const COLOR = '#4b6f96';

  return (
    <Document>
      {isCvIncluded && <CvResume cv={cv} language={language} color={COLOR} />}
      {isCoverLetterIncluded && (
        <CvPage>
          <Text>Cover letter</Text>
        </CvPage>
      )}
    </Document>
  );
}

export default CvDocument;

import { Text } from '@react-pdf/renderer';
import CvPage from '../primitives/CvPage';
import { PdfPageElement } from '../types';

function CvCoverLetter(): PdfPageElement {
  return (
    <CvPage>
      <Text>Cover letter</Text>
    </CvPage>
  );
}

export default CvCoverLetter;

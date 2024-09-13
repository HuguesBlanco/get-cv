import { Text } from '@react-pdf/renderer';
import CvPage from '../primitives/CvPage';
import CvPart from '../primitives/CvPart';
import CvSlot from '../primitives/CvSlot';
import { PdfPageElement } from '../types';

function CvCoverLetter(): PdfPageElement {
  return (
    <CvPage>
      <CvPart>
        <CvSlot>
          <Text>Cover letter</Text>
        </CvSlot>
      </CvPart>
    </CvPage>
  );
}

export default CvCoverLetter;

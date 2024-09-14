import { Text } from '@react-pdf/renderer';
import CvPage from '../primitives/CvPage';
import CvPart from '../primitives/CvPart';
import CvSlot from '../primitives/CvSlot';
import { PdfPageElement } from '../types';

type CvCoverLetterProps = {
  color: string;
};
function CvCoverLetter({ color }: CvCoverLetterProps): PdfPageElement {
  return (
    <CvPage>
      <CvPart>
        <CvSlot>
          <Text>header</Text>
        </CvSlot>
      </CvPart>

      <CvPart layoutDirection="horizontal">
        <CvSlot
          widthPercentage={33.333}
          isBorderRightVisible
          borderColor={color}
        >
          <Text>From to</Text>
        </CvSlot>

        <CvSlot widthPercentage={33.333}>
          <Text>Text</Text>
        </CvSlot>
      </CvPart>
    </CvPage>
  );
}

export default CvCoverLetter;

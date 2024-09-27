import { View } from '@react-pdf/renderer';
import CvTextBody from '../elements/CvTextBody';
import CvParagraph from '../primitives/CvParagraph';
import CvSignature from '../primitives/CvSignature';
import { Paragraph } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';

type ApplicationNarativeProps = {
  gretting: string;
  structuredBodyText: Paragraph[]; // TODO: decouple from service types.
  closing: string;
  signature: string;
};

function ApplicationNarative({
  gretting,
  structuredBodyText,
  closing,
  signature,
}: ApplicationNarativeProps): PdfViewElement {
  return (
    <View>
      <CvParagraph>{gretting}</CvParagraph>
      <CvTextBody structuredText={structuredBodyText} />
      <CvParagraph>{closing}</CvParagraph>
      <CvSignature>{signature}</CvSignature>
    </View>
  );
}

export default ApplicationNarative;

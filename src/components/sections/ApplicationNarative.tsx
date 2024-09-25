import { View } from '@react-pdf/renderer';
import { Paragraph } from '../../services/coverletterServiceTypes';
import CvParagraph from '../primitives/CvParagraph';
import CvTextBody from '../primitives/CvTextBody';
import { PdfViewElement } from '../types';

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
      <CvParagraph>{signature}</CvParagraph>
    </View>
  );
}

export default ApplicationNarative;

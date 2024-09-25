import { View } from '@react-pdf/renderer';
import { Paragraph } from '../../services/coverletterServiceTypes';
import { PdfViewElement } from '../types';
import CvParagraph from './CvParagraph';

type CvTextProps = {
  structuredText: Paragraph[]; // TODO: Decouple from service types.
};

function CvText({ structuredText }: CvTextProps): PdfViewElement {
  return (
    <View>
      {structuredText.map((paragraph, paragraphIndex) => (
        <View key={paragraphIndex} style={{ marginBottom: '8mm' }}>
          <CvParagraph paragraph={paragraph} />
        </View>
      ))}
    </View>
  );
}

export default CvText;

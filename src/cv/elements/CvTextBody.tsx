import { View } from '@react-pdf/renderer';
import CvParagraph from '../primitives/CvParagraph';
import { Paragraph } from '../types/cvTypes';
import { PdfViewElement } from '../types/pdfTypes';
import CvTextSections from './CvTextSections';

type CvTextBodyProps = {
  structuredText: Paragraph[]; // TODO: Decouple from service types.
};

function CvTextBody({ structuredText }: CvTextBodyProps): PdfViewElement {
  return (
    <View>
      {structuredText.map((paragraph, paragraphIndex) => (
        <CvParagraph key={paragraphIndex}>
          <CvTextSections paragraph={paragraph} />
        </CvParagraph>
      ))}
    </View>
  );
}

export default CvTextBody;

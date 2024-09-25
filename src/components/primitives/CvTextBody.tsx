import { View } from '@react-pdf/renderer';
import { Paragraph } from '../../services/coverletterServiceTypes';
import { PdfViewElement } from '../types';
import CvParagraph from './CvParagraph';
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

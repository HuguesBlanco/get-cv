import { Text, View } from '@react-pdf/renderer';
import { isString } from '../libs/typeChecks';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';

type CvParagraphProps = {
  children: PdfViewElement | PdfTextElement | string;
};

function CvParagraph({ children }: CvParagraphProps): PdfViewElement {
  return (
    <View style={{ marginBottom: '8mm', textAlign: 'justify' }}>
      {isString(children) ? <Text>{children}</Text> : children}
    </View>
  );
}

export default CvParagraph;

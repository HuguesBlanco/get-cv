import { Text, View } from '@react-pdf/renderer';
import { isString } from '../../utils/typeChecks';
import { PdfTextElement, PdfViewElement } from '../types';

type CvParagraphProps = {
  children: PdfViewElement | PdfTextElement | string;
};

function CvParagraph({ children }: CvParagraphProps): PdfViewElement {
  return (
    <View style={{ marginBottom: '8mm' }}>
      {isString(children) ? <Text>{children}</Text> : children}
    </View>
  );
}

export default CvParagraph;

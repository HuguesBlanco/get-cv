import { Text, View } from '@react-pdf/renderer';
import { isString } from '../utils/typeChecks';
import { PdfTextElement, PdfViewElement } from './types';

type CvParagraphProps = {
  children: string | PdfViewElement | PdfTextElement;
  isJustified?: boolean;
};

function CvParagraph({
  children,
  isJustified = false,
}: CvParagraphProps): PdfViewElement {
  return (
    <View
      style={{
        paddingBottom: '10',
        ...(isJustified && { textAlign: 'justify' }),
      }}
    >
      {isString(children) ? <Text>{children}</Text> : children}
    </View>
  );
}

export default CvParagraph;

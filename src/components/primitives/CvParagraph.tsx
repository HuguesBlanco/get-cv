import { Text, View } from '@react-pdf/renderer';
import { isString } from '../../utils/typeChecks';
import { PdfTextElement, PdfViewElement } from '../types';

type CvParagraphProps = {
  children: string | PdfViewElement | PdfTextElement;
  isBottomSpacingEnabled?: boolean;
  isJustified?: boolean;
};

function CvParagraph({
  children,
  isBottomSpacingEnabled = true,
}: CvParagraphProps): PdfViewElement {
  return (
    <View
      style={{
        ...(isBottomSpacingEnabled && { marginBottom: '4mm' }),
      }}
    >
      {isString(children) ? <Text>{children}</Text> : children}
    </View>
  );
}

export default CvParagraph;

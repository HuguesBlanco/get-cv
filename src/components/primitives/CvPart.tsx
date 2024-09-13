import { View } from '@react-pdf/renderer';
import { PdfTextElement, PdfViewElement } from '../types';

type CvPartProps = {
  children:
    | PdfViewElement
    | PdfViewElement[]
    | PdfTextElement
    | PdfTextElement[];
  layoutDirection?: 'vertical' | 'horizontal';
  isMarginBottomEnabled?: boolean;
};

function CvPart({
  children,
  layoutDirection = 'vertical',
  isMarginBottomEnabled = true,
}: CvPartProps): PdfViewElement {
  const flexDirection = layoutDirection === 'vertical' ? 'column' : 'row';
  const marginBottom = isMarginBottomEnabled ? '8mm' : 0;

  return (
    <View
      style={{
        marginBottom,
        flexDirection,
      }}
    >
      {children}
    </View>
  );
}

export default CvPart;

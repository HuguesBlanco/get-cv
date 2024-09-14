import { View } from '@react-pdf/renderer';
import { PdfTextElement, PdfViewElement } from '../types';

type CvPartProps = {
  children:
    | PdfViewElement
    | PdfViewElement[]
    | PdfTextElement
    | PdfTextElement[];
  layoutDirection?: 'vertical' | 'horizontal';
  isExpanded?: boolean;
  isMarginBottomEnabled?: boolean;
};

function CvPart({
  children,
  layoutDirection = 'vertical',
  isExpanded = false,
  isMarginBottomEnabled = true,
}: CvPartProps): PdfViewElement {
  const flexDirection = layoutDirection === 'vertical' ? 'column' : 'row';
  const flexGrow = isExpanded ? 1 : 0;
  const marginBottom = isMarginBottomEnabled ? '8mm' : 0;

  return (
    <View
      style={{
        flexDirection,
        flexGrow,
        marginBottom,
      }}
    >
      {children}
    </View>
  );
}

export default CvPart;

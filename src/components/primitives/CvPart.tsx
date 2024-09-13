import { View } from '@react-pdf/renderer';
import { PdfTextElement, PdfViewElement } from '../types';

type CvPartProps = {
  children:
    | PdfViewElement
    | PdfViewElement[]
    | PdfTextElement
    | PdfTextElement[];
  layoutDirection?: 'vertical' | 'horizontal';
};

function CvPart({
  children,
  layoutDirection = 'vertical',
}: CvPartProps): PdfViewElement {
  const flexDirection = layoutDirection === 'vertical' ? 'column' : 'row';

  return (
    <View
      style={{
        marginBottom: '8mm',
        flexDirection,
      }}
    >
      {children}
    </View>
  );
}

export default CvPart;

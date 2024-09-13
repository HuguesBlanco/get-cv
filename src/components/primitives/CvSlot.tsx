import { View } from '@react-pdf/renderer';
import { PdfTextElement, PdfViewElement } from '../types';

type CvSlotProps = {
  widthPercentage?: number;
  children:
    | PdfViewElement
    | PdfViewElement[]
    | PdfTextElement
    | PdfTextElement[];
} & (
  | { isBorderRightVisible: true; borderColor: string }
  | { isBorderRightVisible?: false; borderColor?: undefined }
);

function CvSlot({
  children,
  isBorderRightVisible = false,
  widthPercentage,
  borderColor,
}: CvSlotProps): PdfViewElement {
  const borderRight = isBorderRightVisible
    ? { borderRight: `0.4mm solid ${String(borderColor)}` }
    : {};

  const width =
    widthPercentage !== undefined
      ? { width: `${String(widthPercentage)}%` }
      : {};

  return (
    <View
      style={{
        ...borderRight,
        justifyContent: 'space-between',
        paddingLeft: '5mm',
        paddingRight: '5mm',
        ...width,
      }}
    >
      {children}
    </View>
  );
}

export default CvSlot;

import { View } from '@react-pdf/renderer';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';

type CvSlotProps = {
  widthPercentage?: number;
  children:
    | PdfViewElement
    | PdfViewElement[]
    | PdfTextElement
    | PdfTextElement[];
  verticalDistribution?: 'top' | 'space-between';
} & (
  | { isBorderRightVisible: true; borderColor: string }
  | { isBorderRightVisible?: false; borderColor?: undefined }
);

function CvSlot({
  children,
  isBorderRightVisible = false,
  widthPercentage,
  borderColor,
  verticalDistribution = 'space-between',
}: CvSlotProps): PdfViewElement {
  const borderRight = isBorderRightVisible
    ? { borderRight: `0.4mm solid ${String(borderColor)}` }
    : {};

  const width =
    widthPercentage !== undefined
      ? { width: `${String(widthPercentage)}%` }
      : {};

  const justifyContent =
    verticalDistribution === 'top' ? 'flex-start' : 'space-between';

  return (
    <View
      style={{
        ...borderRight,
        justifyContent,
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

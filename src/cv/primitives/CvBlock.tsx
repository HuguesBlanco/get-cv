import { View } from '@react-pdf/renderer';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';

type CvBlockProps = {
  children:
    | PdfViewElement
    | PdfViewElement[]
    | PdfTextElement
    | PdfTextElement[];
  widthPercentage?: number;
  isExpanded?: boolean;
  layoutDirection?: 'vertical' | 'horizontal';
  contentDistribution?: 'start' | 'space-between';

  isPaddindXEnabled?: boolean;
  isMarginBottomEnabled?: boolean;
} & (
  | { isBorderRightVisible: true; borderColor: string }
  | { isBorderRightVisible?: false; borderColor?: undefined }
);

function CvBlock({
  children,
  widthPercentage,
  isExpanded = false,
  layoutDirection = 'vertical',
  contentDistribution = 'space-between',
  isPaddindXEnabled = false,
  isMarginBottomEnabled = false,
  isBorderRightVisible = false,
  borderColor,
}: CvBlockProps): PdfViewElement {
  const width =
    widthPercentage !== undefined
      ? { width: `${String(widthPercentage)}%` }
      : {};

  const flexGrow = isExpanded ? 1 : 0;

  const flexDirection = layoutDirection === 'vertical' ? 'column' : 'row';

  const justifyContent =
    contentDistribution === 'start' ? 'flex-start' : 'space-between';

  const paddingLeft = isPaddindXEnabled ? '5mm' : '0mm';
  const paddingRight = isPaddindXEnabled ? '5mm' : '0mm';

  const marginBottom = isMarginBottomEnabled ? '8mm' : 0;

  const borderRight = isBorderRightVisible
    ? { borderRight: `0.4mm solid ${String(borderColor)}` }
    : {};

  return (
    <View
      style={{
        ...width,
        flexGrow,
        flexDirection,
        justifyContent,
        paddingLeft,
        paddingRight,
        marginBottom,
        ...borderRight,
      }}
    >
      {children}
    </View>
  );
}

export default CvBlock;

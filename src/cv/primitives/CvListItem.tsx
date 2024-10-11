import { Text, View } from '@react-pdf/renderer';
import { isString } from '../libs/typeChecks';
import { Icon } from '../types/cvTypes';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';
import CvIcon from './CvIcon';

function getIconPaddingTop(icon: Icon): string {
  switch (icon) {
    case 'circle':
      return '1.35mm';

    case 'envelope':
      return '0.6mm';

    case 'phone':
      return '0.4mm';

    case 'locationDot':
      return '0.1mm';

    case 'github':
    case 'linkedin':
      return '0.2mm';

    default:
      return '0mm';
  }
}

type CvListItemProps = {
  children: string | PdfViewElement | PdfTextElement;
  icon?: Icon;
  iconSize?: number;
  isTopSpacingEnabled?: boolean;
  isBottomSpacingEnabled?: boolean;
  iconColor?: string;
  textColor?: string;
};

function CvListItem({
  children,
  icon,
  iconSize = 5,
  isTopSpacingEnabled = false,
  isBottomSpacingEnabled = true,
  iconColor = '#000000',
  textColor = '#000000',
}: CvListItemProps): PdfViewElement {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...(isBottomSpacingEnabled && { marginBottom: '3mm' }),
        ...(isTopSpacingEnabled && { marginTop: '3mm' }),
      }}
    >
      {icon !== undefined && (
        <View style={{ width: '5mm', paddingTop: getIconPaddingTop(icon) }}>
          <CvIcon icon={icon} size={iconSize} color={iconColor} />
        </View>
      )}
      <View style={{ flexGrow: 1, color: textColor }}>
        {isString(children) ? <Text>{children}</Text> : children}
      </View>
    </View>
  );
}

export default CvListItem;

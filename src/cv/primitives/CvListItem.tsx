import { Text, View } from '@react-pdf/renderer';
import { isString } from '../libs/typeChecks';
import { Icon } from '../types/cvTypes';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';
import CvIcon from './CvIcon';

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
  // TODO: Make that clearer
  const paddingTop =
    icon === 'circle'
      ? '1.35mm'
      : icon === 'github' || icon === 'linkedin'
        ? '0.2mm'
        : '0mm';

  return (
    <View
      style={{
        flexDirection: 'row',
        ...(isBottomSpacingEnabled && { marginBottom: '3mm' }),
        ...(isTopSpacingEnabled && { marginTop: '3mm' }),
      }}
    >
      {icon !== undefined && (
        <View style={{ width: '5mm', paddingTop }}>
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

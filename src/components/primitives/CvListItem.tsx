import { Text, View } from '@react-pdf/renderer';
import { isString } from '../../utils/typeChecks';
import { PdfTextElement, PdfViewElement } from '../types';
import CvIcon from './CvIcon';
import { Icon } from './types';

type CvListItemProps = {
  children: string | PdfViewElement | PdfTextElement;
  icon?: Icon;
  isTopSpacingEnabled?: boolean;
  isBottomSpacingEnabled?: boolean;
};

function CvListItem({
  children,
  icon,
  isTopSpacingEnabled = false,
  isBottomSpacingEnabled = true,
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
        <View style={{ width: '5mm', paddingTop: '1.35mm' }}>
          <CvIcon icon={icon} size={5} />
        </View>
      )}
      <View style={{ flexGrow: 1 }}>
        {isString(children) ? <Text>{children}</Text> : children}
      </View>
    </View>
  );
}

export default CvListItem;

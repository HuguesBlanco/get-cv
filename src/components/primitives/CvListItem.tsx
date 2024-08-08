import { Text, View } from '@react-pdf/renderer';
import { isString } from '../../utils/typeChecks';
import { PdfTextElement, PdfViewElement } from '../types';
import CvIcon from './CvIcon';
import { Icon } from './types';

type CvListItemProps = {
  children: string | PdfViewElement | PdfTextElement;
  icon?: Icon;
  isBottomSpacingEnabled?: boolean;
};

function CvListItem({
  children,
  icon,
  isBottomSpacingEnabled = true,
}: CvListItemProps): PdfViewElement {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...(isBottomSpacingEnabled && { marginBottom: '3mm' }),
      }}
    >
      {icon !== undefined && (
        <View style={{ width: '5mm', justifyContent: 'center' }}>
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

import { Text, View } from '@react-pdf/renderer';
import CvIcon from './CvIcon';
import { PdfViewElement } from './types';

type CvListItemProps = {
  content: string;
};

function CvListItem({ content }: CvListItemProps): PdfViewElement {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ width: '5mm', justifyContent: 'center' }}>
        <CvIcon icon="circle" size={5} />
      </View>
      <Text>{content}</Text>
    </View>
  );
}

export default CvListItem;

import { Text, View } from '@react-pdf/renderer';
import { PdfViewElement } from '../types';

type CvTitleProps = {
  children: string;
  color: string;
};

function CvTitle1({ children, color }: CvTitleProps): PdfViewElement {
  return (
    <View style={{ paddingBottom: 10 }}>
      <Text style={{ color: color, fontSize: 20, textTransform: 'uppercase' }}>
        {children}
      </Text>
    </View>
  );
}

export default CvTitle1;

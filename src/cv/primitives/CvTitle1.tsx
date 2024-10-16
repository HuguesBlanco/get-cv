import { Text, View } from '@react-pdf/renderer';
import { PdfViewElement } from '../types/pdfTypes';

type CvTitleProps = {
  children: string;
  color: string;
};

function CvTitle1({ children, color }: CvTitleProps): PdfViewElement {
  return (
    <View style={{ marginBottom: '5mm' }}>
      <Text
        style={{
          color: color,
          fontSize: '18pt',
          letterSpacing: '1.4',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Text>
    </View>
  );
}

export default CvTitle1;

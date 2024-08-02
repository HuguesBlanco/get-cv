import { Text, View } from '@react-pdf/renderer';
import { isString } from '../utils/typeChecks';
import { PdfTextElement, PdfViewElement } from './types';

type CvTitle2Props = {
  children: string | PdfTextElement;
  extraContent?: string | PdfViewElement | PdfTextElement;
};

function CvTitle2({ children, extraContent }: CvTitle2Props): PdfViewElement {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
      }}
    >
      <Text style={{ fontSize: 11, textTransform: 'uppercase' }}>
        {children}
      </Text>

      {extraContent !== undefined && isString(extraContent) && (
        <Text style={{ fontSize: 9 }}>{extraContent}</Text>
      )}
      {extraContent !== undefined && !isString(extraContent) && (
        <View>{extraContent}</View>
      )}
    </View>
  );
}

export default CvTitle2;

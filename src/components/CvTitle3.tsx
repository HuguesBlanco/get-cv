import { Text, View } from '@react-pdf/renderer';
import { isString } from '../utils/typeChecks';
import { PdfTextElement, PdfViewElement } from './types';

type CvTitle3Props = {
  children: string | PdfTextElement;
  extraContent?: string | PdfViewElement | PdfTextElement;
};

function CvTitle3({ children, extraContent }: CvTitle3Props): PdfViewElement {
  return (
    <View
      style={{
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text>{children}</Text>

      {extraContent !== undefined && isString(extraContent) && (
        <Text>{extraContent}</Text>
      )}
      {extraContent !== undefined && !isString(extraContent) && (
        <View>{extraContent}</View>
      )}
    </View>
  );
}

export default CvTitle3;

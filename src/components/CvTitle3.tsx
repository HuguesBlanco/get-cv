import { Text, View } from '@react-pdf/renderer';
import { isString } from '../utils/typeChecks';
import { PdfTextElement, PdfViewElement } from './types';

type CvTitle3Props = {
  children: string | PdfTextElement;
  extraContent?: string | PdfViewElement | PdfTextElement | null;
};

function CvTitle3({ children, extraContent }: CvTitle3Props): PdfViewElement {
  const isExtraContentAvailable =
    extraContent !== undefined && extraContent !== null;

  return (
    <View
      style={{
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text>{children}</Text>

      {isExtraContentAvailable && isString(extraContent) && (
        <Text>{extraContent}</Text>
      )}
      {isExtraContentAvailable && !isString(extraContent) && (
        <View>{extraContent}</View>
      )}
    </View>
  );
}

export default CvTitle3;

import { Text, View } from '@react-pdf/renderer';
import { isString } from '../libs/typeChecks';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';

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
        marginBottom: '1mm',
        letterSpacing: '0.2',
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

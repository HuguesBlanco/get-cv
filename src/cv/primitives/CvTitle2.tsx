import { Text, View } from '@react-pdf/renderer';
import { isString } from '../libs/typeChecks';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';

type CvTitle2Props = {
  children: string | PdfTextElement;
  extraContent?: string | PdfViewElement | PdfTextElement | null;
};

function CvTitle2({ children, extraContent }: CvTitle2Props): PdfViewElement {
  const isExtraContentAvailable =
    extraContent !== undefined && extraContent !== null;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '3mm',
      }}
    >
      <Text
        style={{
          fontSize: '11pt',
          letterSpacing: '0.9',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Text>

      {isExtraContentAvailable && isString(extraContent) && (
        <Text style={{ fontSize: '9pt' }}>{extraContent}</Text>
      )}
      {isExtraContentAvailable && !isString(extraContent) && (
        <View>{extraContent}</View>
      )}
    </View>
  );
}

export default CvTitle2;

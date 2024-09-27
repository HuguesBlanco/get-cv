import { Font, Text, View } from '@react-pdf/renderer';
import { toPascalCase } from '../libs/caseUtils';
import { PdfViewElement } from '../types/pdfTypes';

type CvSignatureProps = {
  children: string;
};

function CvSignature({ children }: CvSignatureProps): PdfViewElement {
  const FONT_FAMILY = 'Asem Kandis';

  const isFontRegistred =
    Font.getRegisteredFontFamilies().includes(FONT_FAMILY);

  if (!isFontRegistred) {
    Font.register({
      family: FONT_FAMILY,
      fonts: [
        {
          src: `src/assets/${toPascalCase(FONT_FAMILY)}-Regular.ttf`,
          fontStyle: 'normal',
          fontWeight: 'normal',
        },
      ],
    });
  }

  return (
    <View>
      <Text
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: '20',
        }}
      >
        {children}
      </Text>
    </View>
  );
}

export default CvSignature;

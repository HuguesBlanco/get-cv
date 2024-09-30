import { Font, Text, View } from '@react-pdf/renderer';
import asemKandisUrl from '../assets/fonts/AsemKandis-Regular.ttf';
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
          src: asemKandisUrl,
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

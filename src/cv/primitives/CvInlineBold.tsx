import { Font, Text } from '@react-pdf/renderer';
import { PdfTextElement } from '../types/pdfTypes';

import sourceSansBoldURL from '../assets/fonts/SourceSans3-Bold.ttf';

type CvInlineBoldProps = {
  children: string;
};

/**
 * Renders inline text in bold within a PDF document.
 *
 * This component exists as a workaround for an issue in `@react-pdf/renderer` that prevents inline bold text from displaying correctly.\
 * See {@link https://github.com/diegomura/react-pdf/issues/164} for more information.
 *
 * **Note:** For compatibility, use `@react-pdf/layout` version 3.11.5 or lower alongside `@react-pdf/renderer` version 3.4.2.\
 * See {@link https://github.com/diegomura/react-pdf/issues/2855} for related issues.
 *
 * @param props See {@link CvInlineBoldProps}.
 * @returns A <Text> element rendered in bold.
 */
function CvInlineBold({ children }: CvInlineBoldProps): PdfTextElement {
  const BOLD_FONT = 'Source-Sans-3-bold';

  const isFontRegistred = Font.getRegisteredFontFamilies().includes(BOLD_FONT);

  if (!isFontRegistred) {
    Font.register({
      family: BOLD_FONT,
      fonts: [
        {
          src: sourceSansBoldURL,
          fontStyle: 'normal',
          fontWeight: 'normal',
        },
      ],
    });
  }

  return (
    <Text debug style={{ fontFamily: BOLD_FONT }}>
      {children}
    </Text>
  );
}

export default CvInlineBold;

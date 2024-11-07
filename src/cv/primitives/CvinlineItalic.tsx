import { Font, Text } from '@react-pdf/renderer';
import sourceSansItalicURL from '../assets/fonts/SourceSans3-Italic.ttf';
import { PdfTextElement } from '../types/pdfTypes';

type CvInlineItalicProps = {
  children: string;
};

/**
 * Renders inline text in italic within a PDF document.
 *
 * This component exists as a workaround for an issue in `@react-pdf/renderer` that prevents inline italic text from displaying correctly.\
 * See {@link https://github.com/diegomura/react-pdf/issues/164} for more information.
 *
 * **Note:** For compatibility, use `@react-pdf/layout` version 3.11.5 or lower alongside `@react-pdf/renderer` version 3.4.2.\
 * See {@link https://github.com/diegomura/react-pdf/issues/2855} for related issues.
 *
 * @param props See {@link CvInlineItalicProps}.
 * @returns A <Text> element rendered in italic.
 */
function CvInlineItalic({ children }: CvInlineItalicProps): PdfTextElement {
  const ITALIC_FONT = 'Source-Sans-3-italic';

  const isFontRegistred =
    Font.getRegisteredFontFamilies().includes(ITALIC_FONT);

  if (!isFontRegistred) {
    Font.register({
      family: ITALIC_FONT,
      fonts: [
        {
          src: sourceSansItalicURL,
          fontStyle: 'normal',
          fontWeight: 'normal',
        },
      ],
    });
  }

  return (
    <Text debug style={{ fontFamily: ITALIC_FONT }}>
      {children}
    </Text>
  );
}

export default CvInlineItalic;

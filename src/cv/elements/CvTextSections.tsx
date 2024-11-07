import { Font, Text, View } from '@react-pdf/renderer';
import sourceSansBoldURL from '../assets/fonts/SourceSans3-Bold.ttf';
import sourceSansItalicURL from '../assets/fonts/SourceSans3-Italic.ttf';
import CvListItem from '../primitives/CvListItem';
import { Paragraph, SegmentType } from '../types/cvTypes';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';
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

function parseStylesInText(text: string): PdfTextElement {
  const boldPattern = /\*\*(?:.*?)\*\*/;
  const italicPattern = /_(?:.*?)_/;

  const boldOrItalicPattern = new RegExp(
    `(${boldPattern.source}|${italicPattern.source})`,
    'g',
  );

  const parsedText = text
    .split(boldOrItalicPattern)
    .filter(Boolean)
    .map((textSegment, segmentIndex) => {
      const isBoldText = boldPattern.test(textSegment);
      if (isBoldText) {
        const boldText = textSegment.slice(2, -2);
        return <CvInlineBold key={segmentIndex}>{boldText}</CvInlineBold>;
      }

      const isItalicText = italicPattern.test(textSegment);
      if (isItalicText) {
        const italicText = textSegment.slice(1, -1);
        return <CvInlineItalic key={segmentIndex}>{italicText}</CvInlineItalic>;
      }

      return textSegment;
    });

  return <Text>{parsedText}</Text>;
}

type CvTextSectionProps = {
  paragraph: Paragraph;
};

function CvTextSections({
  paragraph,
}: CvTextSectionProps): (PdfViewElement | PdfTextElement)[] {
  return paragraph.map((segment, segmentIndex, allSegments) => {
    const groupContentComponent = segment.content.map(
      (contentString, contentIndex) => (
        <View key={contentIndex}>{parseStylesInText(contentString)}</View>
      ),
    );

    if (segment.type === SegmentType.BULLET_POINT) {
      const previousSection = allSegments[segmentIndex - 1];
      const isPreviousSectionParagraph =
        previousSection?.type === SegmentType.TEXT;

      const isLastSegment = segmentIndex === allSegments.length - 1;

      return (
        <CvListItem
          key={segmentIndex}
          icon="circle"
          isTopSpacingEnabled={isPreviousSectionParagraph}
          isBottomSpacingEnabled={!isLastSegment}
        >
          <View>{groupContentComponent}</View>
        </CvListItem>
      );
    }

    return <View key={segmentIndex}>{groupContentComponent}</View>;
  });
}

export default CvTextSections;

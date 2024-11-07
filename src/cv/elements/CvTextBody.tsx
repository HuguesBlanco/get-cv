import { Text, View } from '@react-pdf/renderer';
import CvInlineBold from '../primitives/CvInlineBold';
import CvInlineItalic from '../primitives/CvinlineItalic';
import CvListItem from '../primitives/CvListItem';
import CvParagraph from '../primitives/CvParagraph';
import {
  ContentGroup,
  Paragraph,
  Segment,
  SegmentType,
} from '../types/cvTypes';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';

type ParsedAndStyledTextProps = {
  children: string;
};

function ParsedAndStyledText({
  children,
}: ParsedAndStyledTextProps): PdfTextElement {
  const boldPattern = /\*\*(?:.*?)\*\*/;
  const italicPattern = /_(?:.*?)_/;

  const boldOrItalicPattern = new RegExp(
    `(${boldPattern.source}|${italicPattern.source})`,
    'g',
  );

  const parsedText = children
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

type ContentBlocksProps = {
  content: ContentGroup;
};

function ContentBlocks({ content }: ContentBlocksProps): PdfViewElement[] {
  return content.map((contentPortion, contentPortionIndex) => (
    <View key={contentPortionIndex}>
      <ParsedAndStyledText>{contentPortion}</ParsedAndStyledText>
    </View>
  ));
}

type SegmentBlocksProps = {
  paragraph: Segment[];
};

function SegmentBlocks({ paragraph }: SegmentBlocksProps): PdfViewElement[] {
  return paragraph.map((segment, segmentIndex, allSegments) => {
    if (segment.type === SegmentType.BULLET_POINT) {
      const previousSegment = allSegments[segmentIndex - 1];
      const isPreviousSegmentText = previousSegment?.type === SegmentType.TEXT;

      const isLastSegment = segmentIndex === allSegments.length - 1;

      return (
        <CvListItem
          key={segmentIndex}
          icon="circle"
          isTopSpacingEnabled={isPreviousSegmentText}
          isBottomSpacingEnabled={!isLastSegment}
        >
          <View>
            <ContentBlocks content={segment.content}></ContentBlocks>
          </View>
        </CvListItem>
      );
    }

    return (
      <View key={segmentIndex}>
        <ContentBlocks content={segment.content}></ContentBlocks>
      </View>
    );
  });
}

type CvTextBodyProps = {
  structuredText: Paragraph[];
};

function CvTextBody({ structuredText }: CvTextBodyProps): PdfViewElement {
  return (
    <View>
      {structuredText.map((paragraph, paragraphIndex) => (
        <CvParagraph key={paragraphIndex}>
          <SegmentBlocks paragraph={paragraph} />
        </CvParagraph>
      ))}
    </View>
  );
}

export default CvTextBody;

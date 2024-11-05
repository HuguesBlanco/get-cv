import { Text, View } from '@react-pdf/renderer';
import CvListItem from '../primitives/CvListItem';
import { Paragraph, SegmentType } from '../types/cvTypes';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';

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
        return (
          <Text debug key={segmentIndex} style={{ fontWeight: 'bold' }}>
            {boldText}
          </Text>
        );
      }

      const isItalicText = italicPattern.test(textSegment);
      if (isItalicText) {
        const italicText = textSegment.slice(1, -1);
        return (
          <Text key={segmentIndex} style={{ fontStyle: 'italic' }}>
            {italicText}
          </Text>
        );
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

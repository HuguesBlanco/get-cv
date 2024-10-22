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
          <Text key={segmentIndex} style={{ fontWeight: 'bold' }}>
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
  return paragraph.map((section, sectionIndex, allSections) => {
    const textComponent = parseStylesInText(section.content);

    if (section.type === SegmentType.BULLET_POINT) {
      const previousSection = allSections[sectionIndex - 1];
      const isPreviousSectionParagraph =
        previousSection?.type === SegmentType.TEXT;

      const isLastSegment = sectionIndex === allSections.length - 1;

      return (
        <CvListItem
          key={sectionIndex}
          icon="circle"
          isTopSpacingEnabled={isPreviousSectionParagraph}
          isBottomSpacingEnabled={!isLastSegment}
        >
          {textComponent}
        </CvListItem>
      );
    }

    return <View key={sectionIndex}>{textComponent}</View>;
  });
}

export default CvTextSections;

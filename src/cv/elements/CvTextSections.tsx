import { Text } from '@react-pdf/renderer';
import CvListItem from '../primitives/CvListItem';
import { Paragraph, SegmentType } from '../types/cvTypes';
import { PdfTextElement, PdfViewElement } from '../types/pdfTypes';

type CvTextSectionProps = {
  paragraph: Paragraph;
};

function CvTextSections({
  paragraph,
}: CvTextSectionProps): (PdfViewElement | PdfTextElement)[] {
  return paragraph.map((section, sectionIndex, allSections) => {
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
          <Text>{section.content}</Text>
        </CvListItem>
      );
    }

    return <Text key={sectionIndex}>{section.content}</Text>;
  });
}

export default CvTextSections;

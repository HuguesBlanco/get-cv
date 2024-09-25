import { Text } from '@react-pdf/renderer';
import { Paragraph, SegmentType } from '../../services/coverletterServiceTypes';
import { PdfTextElement, PdfViewElement } from '../types';
import CvListItem from './CvListItem';

type CvTextSectionProps = {
  paragraph: Paragraph; // TODO: Decouple from service types.
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
          {section.content}
        </CvListItem>
      );
    }

    return <Text key={sectionIndex}>{section.content}</Text>;
  });
}

export default CvTextSections;

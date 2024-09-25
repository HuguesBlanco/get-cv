import { Text, View } from '@react-pdf/renderer';
import { Paragraph, SegmentType } from '../../services/coverletterServiceTypes';
import { PdfViewElement } from '../types';
import CvListItem from './CvListItem';

type ParagraphProps = {
  paragraph: Paragraph; // TODO: Decouple from service types.
};

function CvParagraph({ paragraph }: ParagraphProps): PdfViewElement {
  return (
    <View>
      {paragraph.map((section, sectionIndex, allSections) => {
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
      })}
    </View>
  );
}

export default CvParagraph;

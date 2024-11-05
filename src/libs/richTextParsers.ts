import {
  ContentGroup,
  Paragraph,
  Segment,
  SegmentType,
} from '../services/coverletterServiceTypes';

// These constants define the character sequences used in the custom markup language.
const PARAGRAPH_SEPARATOR_SEQUENCE = '\n\n';
const LINE_BREAK_SEQUENCE = '\n';
const BULLET_POINT_SEQUENCE = '- ';
const STILL_IN_BULLET_POINT_SEQUENCE = '  ';

function groupContentReducer(
  contentgroups: ContentGroup[],
  currentMarkupSegment: string,
): ContentGroup[] {
  if (currentMarkupSegment.startsWith(STILL_IN_BULLET_POINT_SEQUENCE)) {
    const lastContentGroup = contentgroups[contentgroups.length - 1];
    const firstElementOfLastContentGroup = lastContentGroup?.[0] ?? '';

    if (firstElementOfLastContentGroup.startsWith(BULLET_POINT_SEQUENCE)) {
      const cleanedContent = currentMarkupSegment.slice(
        STILL_IN_BULLET_POINT_SEQUENCE.length,
      );

      const contentGroupsWithoutLastOne = contentgroups.slice(0, -1);

      const newLastContentGroup: ContentGroup =
        lastContentGroup !== undefined
          ? [...lastContentGroup, cleanedContent]
          : [];

      return [...contentGroupsWithoutLastOne, newLastContentGroup];
    }
  }

  const contentGroup: ContentGroup = [currentMarkupSegment];
  return [...contentgroups, contentGroup];
}

function convertContentGroupToSegment(contentGroup: ContentGroup): Segment {
  const [maybeFirstContent, ...restOfTheContent] = contentGroup;
  const firstContent = maybeFirstContent ?? '';

  const isBulletPointGroupContent = firstContent.startsWith(
    BULLET_POINT_SEQUENCE,
  );

  if (isBulletPointGroupContent) {
    const cleanedFirstContent = firstContent.slice(
      BULLET_POINT_SEQUENCE.length,
    );

    const newContentGroup = [cleanedFirstContent, ...restOfTheContent];

    return {
      type: SegmentType.BULLET_POINT,
      content: newContentGroup,
    };
  }

  return {
    type: SegmentType.TEXT,
    content: contentGroup,
  };
}

function convertMarkupParagraphToSegments(markupParagraph: string): Segment[] {
  return markupParagraph
    .split(LINE_BREAK_SEQUENCE)
    .reduce(groupContentReducer, [])
    .map(convertContentGroupToSegment);
}

export function convertMarkupToParagraphs(markup: string): Paragraph[] {
  return markup
    .split(PARAGRAPH_SEPARATOR_SEQUENCE)
    .map(convertMarkupParagraphToSegments);
}

function convertSegmentToMarkup(segment: Segment): string {
  const contentString = segment.content.join(
    `${LINE_BREAK_SEQUENCE}${STILL_IN_BULLET_POINT_SEQUENCE}`,
  );

  if (segment.type === SegmentType.BULLET_POINT) {
    return BULLET_POINT_SEQUENCE + contentString;
  }

  return contentString;
}

export function convertParagraphsToMarkup(paragraphs: Paragraph[]): string {
  return paragraphs
    .map((paragraph) =>
      paragraph
        .map((segment) => convertSegmentToMarkup(segment))
        .join(LINE_BREAK_SEQUENCE),
    )
    .join(PARAGRAPH_SEPARATOR_SEQUENCE);
}

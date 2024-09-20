import {
  BulletPointSegment,
  Paragraph,
  Segment,
  TextSegment,
} from '../services/coverletterServiceTypes';

// These constants define the character sequences used in the custom markup language.
const PARAGRAPH_SEPARATOR_SEQUENCE = '\n\n';
const LINE_BREAK_SEQUENCE = '\n';
const BULLET_POINT_SEQUENCE = '- ';

function convertMarkupSegmentToSegment(markupSegment: string): Segment {
  if (markupSegment.startsWith(BULLET_POINT_SEQUENCE)) {
    const cleanedBulletPoint = markupSegment.slice(
      BULLET_POINT_SEQUENCE.length,
    );
    const bulletPointSegment: BulletPointSegment = {
      type: 'bulletPoint',
      content: cleanedBulletPoint,
    };
    return bulletPointSegment;
  }

  const textSegment: TextSegment = {
    type: 'text',
    content: markupSegment,
  };
  return textSegment;
}

function convertMarkupParagraphToSegments(markupParagraph: string): Segment[] {
  return markupParagraph
    .split(LINE_BREAK_SEQUENCE)
    .map(convertMarkupSegmentToSegment);
}

export function convertMarkupToParagraphs(markup: string): Paragraph[] {
  return markup
    .split(PARAGRAPH_SEPARATOR_SEQUENCE)
    .map(convertMarkupParagraphToSegments);
}

import {
  BulletListContent,
  Paragraph,
  TextContent,
} from '../services/coverletterServiceTypes';

// These constants define the character sequences used in the custom markup language.
const PARAGRAPH_SEPARATOR_SEQUENCE = '\n\n';
const LINE_BREAK_SEQUENCE = '\n';
const BULLET_POINT_SEQUENCE = '- ';

export function convertMarkupToParagraphs(markupText: string): Paragraph[] {
  return markupText.split(PARAGRAPH_SEPARATOR_SEQUENCE).map((paragraph) => {
    const content = paragraph.split(LINE_BREAK_SEQUENCE).map((textSegment) => {
      if (textSegment.startsWith(BULLET_POINT_SEQUENCE)) {
        const cleanedTextSegment = textSegment.slice(
          BULLET_POINT_SEQUENCE.length,
        );
        const bulletListContent: BulletListContent = {
          type: 'bulletList',
          content: [cleanedTextSegment],
        };
        return bulletListContent;
      }

      const textContent: TextContent = {
        type: 'text',
        content: [textSegment],
      };
      return textContent;
    });

    return {
      type: 'paragraph',
      content,
    };
  });
}

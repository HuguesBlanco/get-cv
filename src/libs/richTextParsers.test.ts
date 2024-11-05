import { describe, expect, it } from 'vitest';
import { Paragraph, SegmentType } from '../services/coverletterServiceTypes';
import {
  convertMarkupToParagraphs,
  convertParagraphsToMarkup,
} from './richTextParsers';

describe('convertMarkupToParagraphs function tests', () => {
  it('should convert a single paragraph with text to a Paragraph array', () => {
    const markup = 'This is a single paragraph.';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: ['This is a single paragraph.'] }],
    ];

    expect(result).toEqual(expected);
  });

  it('should convert multiple paragraphs with text to a Paragraph array', () => {
    const markup = 'First paragraph.\n\nSecond paragraph.';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: ['First paragraph.'] }],
      [{ type: SegmentType.TEXT, content: ['Second paragraph.'] }],
    ];

    expect(result).toEqual(expected);
  });

  it('should convert paragraphs with bullet points correctly', () => {
    const markup =
      'First paragraph.\n- First bullet point\n- Second bullet point\n\nSecond paragraph.';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: SegmentType.TEXT, content: ['First paragraph.'] },
        { type: SegmentType.BULLET_POINT, content: ['First bullet point'] },
        { type: SegmentType.BULLET_POINT, content: ['Second bullet point'] },
      ],
      [{ type: SegmentType.TEXT, content: ['Second paragraph.'] }],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle an empty string input', () => {
    const markup = '';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [[{ type: SegmentType.TEXT, content: [''] }]];

    expect(result).toEqual(expected);
  });

  it('should handle multiple consecutive empty paragraphs', () => {
    const markup = '\n\n\n\n';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: [''] }],
      [{ type: SegmentType.TEXT, content: [''] }],
      [{ type: SegmentType.TEXT, content: [''] }],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle leading and trailing spaces', () => {
    const markup =
      '   First paragraph with leading spaces.   \n\n   - Not a bullet point as there is spaces before   ';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        {
          type: SegmentType.TEXT,
          content: ['   First paragraph with leading spaces.   '],
        },
      ],
      [
        {
          type: SegmentType.TEXT,
          content: ['   - Not a bullet point as there is spaces before   '],
        },
      ],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle a mix of text and bullet points in multiple paragraphs', () => {
    const markup =
      'Text before bullets.\n- Bullet 1\n- Bullet 2\n\nAnother paragraph.\n\n- Bullet 3';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: SegmentType.TEXT, content: ['Text before bullets.'] },
        { type: SegmentType.BULLET_POINT, content: ['Bullet 1'] },
        { type: SegmentType.BULLET_POINT, content: ['Bullet 2'] },
      ],
      [{ type: SegmentType.TEXT, content: ['Another paragraph.'] }],
      [{ type: SegmentType.BULLET_POINT, content: ['Bullet 3'] }],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle a paragraph with bullet points immediately following a text segment', () => {
    const markup = 'Paragraph text\n- Bullet point immediately after';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: SegmentType.TEXT, content: ['Paragraph text'] },
        {
          type: SegmentType.BULLET_POINT,
          content: ['Bullet point immediately after'],
        },
      ],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle bullet points with no preceding text', () => {
    const markup = '- Bullet point one\n- Bullet point two';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: SegmentType.BULLET_POINT, content: ['Bullet point one'] },
        { type: SegmentType.BULLET_POINT, content: ['Bullet point two'] },
      ],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle paragraphs with special characters', () => {
    const markup =
      'This is a paragraph with special characters: @#$%^&*\n- Bullet with characters: !@#';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        {
          type: SegmentType.TEXT,
          content: ['This is a paragraph with special characters: @#$%^&*'],
        },
        {
          type: SegmentType.BULLET_POINT,
          content: ['Bullet with characters: !@#'],
        },
      ],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle paragraphs starting with a line break', () => {
    const markup =
      'First paragraph.\n\n\nSecond paragraph.\n\n\n- Bullet 1\n\n- Bullet 2';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: ['First paragraph.'] }],
      [
        { type: SegmentType.TEXT, content: [''] },
        { type: SegmentType.TEXT, content: ['Second paragraph.'] },
      ],
      [
        { type: SegmentType.TEXT, content: [''] },
        { type: SegmentType.BULLET_POINT, content: ['Bullet 1'] },
      ],
      [{ type: SegmentType.BULLET_POINT, content: ['Bullet 2'] }],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle indented bullet points (as regular text)', () => {
    const markup = 'First paragraph.\n - Indented bullet\n- Regular bullet';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: SegmentType.TEXT, content: ['First paragraph.'] },
        { type: SegmentType.TEXT, content: [' - Indented bullet'] },
        { type: SegmentType.BULLET_POINT, content: ['Regular bullet'] },
      ],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle empty bullet points', () => {
    const markup = '- \n- Second bullet point\n\n- ';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: SegmentType.BULLET_POINT, content: [''] },
        { type: SegmentType.BULLET_POINT, content: ['Second bullet point'] },
      ],
      [{ type: SegmentType.BULLET_POINT, content: [''] }],
    ];

    expect(result).toEqual(expected);
  });
});

describe('convertParagraphsToMarkup function tests', () => {
  it('should convert a single paragraph with text to a string', () => {
    const paragraphs: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: ['This is a single paragraph.'] }],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected = 'This is a single paragraph.';
    expect(result).toBe(expected);
  });

  it('should convert multiple paragraphs with text to a string', () => {
    const paragraphs: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: ['First paragraph.'] }],
      [{ type: SegmentType.TEXT, content: ['Second paragraph.'] }],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected = 'First paragraph.\n\nSecond paragraph.';
    expect(result).toBe(expected);
  });

  it('should convert paragraphs with bullet points correctly', () => {
    const paragraphs: Paragraph[] = [
      [
        { type: SegmentType.TEXT, content: ['First paragraph.'] },
        { type: SegmentType.BULLET_POINT, content: ['First bullet point'] },
        { type: SegmentType.BULLET_POINT, content: ['Second bullet point'] },
      ],
      [{ type: SegmentType.TEXT, content: ['Second paragraph.'] }],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected =
      'First paragraph.\n- First bullet point\n- Second bullet point\n\nSecond paragraph.';
    expect(result).toBe(expected);
  });

  it('should handle an empty paragraph correctly', () => {
    const paragraphs: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: [''] }],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected = '';
    expect(result).toBe(expected);
  });

  it('should handle multiple consecutive empty paragraphs', () => {
    const paragraphs: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: [''] }],
      [{ type: SegmentType.TEXT, content: [''] }],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected = '\n\n';
    expect(result).toBe(expected);
  });

  it('should handle leading and trailing spaces in text and bullet points', () => {
    const paragraphs: Paragraph[] = [
      [
        {
          type: SegmentType.TEXT,
          content: ['   First paragraph with spaces.   '],
        },
      ],
      [
        {
          type: SegmentType.BULLET_POINT,
          content: ['   Bullet with spaces   '],
        },
      ],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected =
      '   First paragraph with spaces.   \n\n-    Bullet with spaces   ';
    expect(result).toBe(expected);
  });

  it('should convert a mix of text and bullet points across multiple paragraphs', () => {
    const paragraphs: Paragraph[] = [
      [
        { type: SegmentType.TEXT, content: ['Text before bullets.'] },
        { type: SegmentType.BULLET_POINT, content: ['Bullet 1'] },
        { type: SegmentType.BULLET_POINT, content: ['Bullet 2'] },
      ],
      [{ type: SegmentType.TEXT, content: ['Another paragraph.'] }],
      [{ type: SegmentType.BULLET_POINT, content: ['Bullet 3'] }],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected =
      'Text before bullets.\n- Bullet 1\n- Bullet 2\n\nAnother paragraph.\n\n- Bullet 3';
    expect(result).toBe(expected);
  });

  it('should handle special characters in text and bullet points', () => {
    const paragraphs: Paragraph[] = [
      [
        {
          type: SegmentType.TEXT,
          content: ['Text with special chars: @#$%^&*'],
        },
        {
          type: SegmentType.BULLET_POINT,
          content: ['Bullet with special chars: !@#'],
        },
      ],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected =
      'Text with special chars: @#$%^&*\n- Bullet with special chars: !@#';
    expect(result).toBe(expected);
  });

  it('should handle empty bullet points', () => {
    const paragraphs: Paragraph[] = [
      [{ type: SegmentType.BULLET_POINT, content: [''] }],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected = '- ';
    expect(result).toBe(expected);
  });

  it('should handle indented bullet points as normal text', () => {
    const paragraphs: Paragraph[] = [
      [{ type: SegmentType.TEXT, content: ['Text with indent'] }],
      [{ type: SegmentType.TEXT, content: [' - Indented bullet point'] }],
    ];
    const result = convertParagraphsToMarkup(paragraphs);
    const expected = 'Text with indent\n\n - Indented bullet point';
    expect(result).toBe(expected);
  });
});

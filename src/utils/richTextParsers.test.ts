import { describe, expect, it } from 'vitest';
import { Paragraph } from '../services/coverletterServiceTypes';
import { convertMarkupToParagraphs } from './richTextParsers';

describe('Tests of convertMarkupToParagraphs function', () => {
  it('should convert a single paragraph with text to a Paragraph array', () => {
    const markup = 'This is a single paragraph.';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: 'text', content: 'This is a single paragraph.' }],
    ];

    expect(result).toEqual(expected);
  });

  it('should convert multiple paragraphs with text to a Paragraph array', () => {
    const markup = 'First paragraph.\n\nSecond paragraph.';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: 'text', content: 'First paragraph.' }],
      [{ type: 'text', content: 'Second paragraph.' }],
    ];

    expect(result).toEqual(expected);
  });

  it('should convert paragraphs with bullet points correctly', () => {
    const markup =
      'First paragraph.\n- First bullet point\n- Second bullet point\n\nSecond paragraph.';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: 'text', content: 'First paragraph.' },
        { type: 'bulletPoint', content: 'First bullet point' },
        { type: 'bulletPoint', content: 'Second bullet point' },
      ],
      [{ type: 'text', content: 'Second paragraph.' }],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle an empty string input', () => {
    const markup = '';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [[{ type: 'text', content: '' }]];

    expect(result).toEqual(expected);
  });

  it('should handle multiple consecutive empty paragraphs', () => {
    const markup = '\n\n\n\n';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: 'text', content: '' }],
      [{ type: 'text', content: '' }],
      [{ type: 'text', content: '' }],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle leading and trailing spaces', () => {
    const markup =
      '   First paragraph with leading spaces.   \n\n   - Not a bullet point as there is spaces before   ';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: 'text', content: '   First paragraph with leading spaces.   ' }],
      [
        {
          type: 'text',
          content: '   - Not a bullet point as there is spaces before   ',
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
        { type: 'text', content: 'Text before bullets.' },
        { type: 'bulletPoint', content: 'Bullet 1' },
        { type: 'bulletPoint', content: 'Bullet 2' },
      ],
      [{ type: 'text', content: 'Another paragraph.' }],
      [{ type: 'bulletPoint', content: 'Bullet 3' }],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle a paragraph with bullet points immediately following a text segment', () => {
    const markup = 'Paragraph text\n- Bullet point immediately after';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: 'text', content: 'Paragraph text' },
        { type: 'bulletPoint', content: 'Bullet point immediately after' },
      ],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle bullet points with no preceding text', () => {
    const markup = '- Bullet point one\n- Bullet point two';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: 'bulletPoint', content: 'Bullet point one' },
        { type: 'bulletPoint', content: 'Bullet point two' },
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
          type: 'text',
          content: 'This is a paragraph with special characters: @#$%^&*',
        },
        { type: 'bulletPoint', content: 'Bullet with characters: !@#' },
      ],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle paragraphs starting with a line break', () => {
    const markup =
      'First paragraph.\n\n\nSecond paragraph.\n\n\n- Bullet 1\n\n- Bullet 2';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [{ type: 'text', content: 'First paragraph.' }],
      [
        { type: 'text', content: '' },
        { type: 'text', content: 'Second paragraph.' },
      ],
      [
        { type: 'text', content: '' },
        { type: 'bulletPoint', content: 'Bullet 1' },
      ],
      [{ type: 'bulletPoint', content: 'Bullet 2' }],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle indented bullet points (as regular text)', () => {
    const markup = 'First paragraph.\n - Indented bullet\n- Regular bullet';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: 'text', content: 'First paragraph.' },
        { type: 'text', content: ' - Indented bullet' },
        { type: 'bulletPoint', content: 'Regular bullet' },
      ],
    ];

    expect(result).toEqual(expected);
  });

  it('should handle empty bullet points', () => {
    const markup = '- \n- Second bullet point\n\n- ';
    const result = convertMarkupToParagraphs(markup);

    const expected: Paragraph[] = [
      [
        { type: 'bulletPoint', content: '' },
        { type: 'bulletPoint', content: 'Second bullet point' },
      ],
      [{ type: 'bulletPoint', content: '' }],
    ];

    expect(result).toEqual(expected);
  });
});

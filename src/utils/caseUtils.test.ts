import { describe, expect, it } from 'vitest';
import { toPascalCase } from './caseUtils';

describe('toPascalCase', () => {
  it('should convert a single word to PascalCase', () => {
    expect(toPascalCase('Hello')).toBe('Hello');
  });

  it('should convert multiple words with spaces to PascalCase', () => {
    expect(toPascalCase('Hello world')).toBe('HelloWorld');
  });

  it('should handle mixed separators (spaces, hyphens, underscores)', () => {
    expect(toPascalCase('hello-world_test')).toBe('HelloWorldTest');
  });

  it('should handle acronyms as regular words', () => {
    expect(toPascalCase('API response data')).toBe('ApiResponseData');
  });

  it('should handle multiple uppercase letters in words (considered as acronyms)', () => {
    expect(toPascalCase('Convert THIS string to PascalCase')).toBe(
      'ConvertThisStringToPascalCase',
    );
  });

  it('should convert strings with numbers and acronyms', () => {
    expect(toPascalCase('convert 123 ABC to PascalCase')).toBe(
      'Convert123AbcToPascalCase',
    );
  });

  it('should correctly handle the number 0 in the string', () => {
    expect(toPascalCase('convert 0 THIS')).toBe('Convert0This');
  });

  it('should return an empty string if input is empty', () => {
    expect(toPascalCase('')).toBe('');
  });

  it('should handle strings with special characters', () => {
    expect(toPascalCase('convert-this_string! to PascalCase')).toBe(
      'ConvertThisStringToPascalCase',
    );
  });
});

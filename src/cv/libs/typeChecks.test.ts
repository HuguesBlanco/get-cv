import { describe, expect, it } from 'vitest';
import { isString } from './typeChecks';

describe('isString', () => {
  it('should return true for a string', () => {
    expect(isString('Hello, World!')).toBe(true);
  });

  it('should return false for a number', () => {
    expect(isString(123)).toBe(false);
  });

  it('should return false for an object', () => {
    expect(isString({ key: 'value' })).toBe(false);
  });

  it('should return false for an array', () => {
    expect(isString(['an', 'array'])).toBe(false);
  });

  it('should return false for a boolean', () => {
    expect(isString(true)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isString(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isString(null)).toBe(false);
  });

  it('should return false for a function', () => {
    function anyFunction(): string {
      return 'a value';
    }
    expect(isString(anyFunction)).toBe(false);
  });
});

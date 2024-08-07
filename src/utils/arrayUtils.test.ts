import { describe, expect, it } from 'vitest';
import { isLastElement } from './arrayUtils';

describe('isLastElement', () => {
  it('should return true for the last index of a non-empty array', () => {
    const elements = ['a', 'b', 'c', 'd'];
    expect(isLastElement(3, elements)).toBe(true);
  });

  it('should return false for an index that is not the last in a non-empty array', () => {
    const elements = ['a', 'b', 'c', 'd'];
    expect(isLastElement(2, elements)).toBe(false);
  });

  it('should return false for an empty array', () => {
    const elements: string[] = [];
    expect(isLastElement(0, elements)).toBe(false);
  });

  it('should return false for an index that is out of bounds (negative)', () => {
    const elements = ['a', 'b', 'c', 'd'];
    expect(isLastElement(-1, elements)).toBe(false);
  });

  it('should return false for an index that is out of bounds (greater than length)', () => {
    const elements = ['a', 'b', 'c', 'd'];
    expect(isLastElement(4, elements)).toBe(false);
  });

  it('should work with arrays of different types', () => {
    const stringElements = ['a', 'b', 'c'];
    const objectElements = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(isLastElement(2, stringElements)).toBe(true);
    expect(isLastElement(1, stringElements)).toBe(false);

    expect(isLastElement(2, objectElements)).toBe(true);
    expect(isLastElement(1, objectElements)).toBe(false);
  });
});

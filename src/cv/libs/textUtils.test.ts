import { describe, expect, it } from 'vitest';
import { isDisplayableString, isDisplayableStringInObject } from './textUtils';

describe('isDisplayableString', () => {
  it('should return true when value is a non-empty string', () => {
    const initialValue = 'Hello, World!';
    const actualResult = isDisplayableString(initialValue);
    const expectedResult = true;

    expect(actualResult).toBe(expectedResult);
  });

  it('should return false when value is an empty string', () => {
    const initialValue = '';
    const actualResult = isDisplayableString(initialValue);
    const expectedResult = false;

    expect(actualResult).toBe(expectedResult);
  });

  it('should return false when value is undefined', () => {
    const initialValue = undefined;
    const actualResult = isDisplayableString(initialValue);
    const expectedResult = false;

    expect(actualResult).toBe(expectedResult);
  });

  it('should return true when value is a string with spaces', () => {
    const initialValue = '   ';
    const actualResult = isDisplayableString(initialValue);
    const expectedResult = true;

    expect(actualResult).toBe(expectedResult);
  });

  it('should return true when value is a single character string', () => {
    const initialValue = 'a';
    const actualResult = isDisplayableString(initialValue);
    const expectedResult = true;

    expect(actualResult).toBe(expectedResult);
  });

  it('should return false when value is an empty string with spaces trimmed', () => {
    const initialValue = '   '.trim();
    const actualResult = isDisplayableString(initialValue);
    const expectedResult = false;

    expect(actualResult).toBe(expectedResult);
  });
});

describe('isDisplayableStringInObject', () => {
  it('should return true when object contains a non-empty string', () => {
    const initialObject = {
      key1: 'hello',
      key2: undefined,
      key3: '',
    };
    const actualResult = isDisplayableStringInObject(initialObject);
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  });

  it('should return false when object contains only empty strings and undefined values', () => {
    const initialObject = {
      key1: '',
      key2: undefined,
    };
    const actualResult = isDisplayableStringInObject(initialObject);
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });

  it('should return true when nested object contains a non-empty string', () => {
    const initialObject = {
      key1: {
        subKey1: '',
        subKey2: {
          subSubKey1: 'nestedString',
        },
      },
    };
    const actualResult = isDisplayableStringInObject(initialObject);
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  });

  it('should return false when nested object contains only empty strings and undefined values', () => {
    const initialObject = {
      key1: {
        subKey1: '',
        subKey2: {
          subSubKey1: undefined,
        },
      },
    };
    const actualResult = isDisplayableStringInObject(initialObject);
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });

  it('should return true when the object contains multiple levels of nesting with at least one displayable string', () => {
    const initialObject = {
      key1: {
        subKey1: '',
        subKey2: {
          subSubKey1: '',
          subSubKey2: {
            subSubSubKey1: 'deepNestedString',
          },
        },
      },
    };
    const actualResult = isDisplayableStringInObject(initialObject);
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  });

  it('should return false when object is empty', () => {
    const initialObject = {};
    const actualResult = isDisplayableStringInObject(initialObject);
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
});

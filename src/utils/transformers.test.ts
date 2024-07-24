import { describe, expect, it } from 'vitest';
import { transformIsoDatesToDateObjects } from './transformers';

describe('transformIsoDatesToDateObjects', () => {
  it('should return primitive values unchanged', () => {
    expect(transformIsoDatesToDateObjects(42)).toBe(42);
    expect(transformIsoDatesToDateObjects('string')).toBe('string');
    expect(transformIsoDatesToDateObjects(true)).toBe(true);
    expect(transformIsoDatesToDateObjects(null)).toBe(null);
  });

  it('should convert ISO date strings to Date objects for keys ending with "Date"', () => {
    const objectWithDateString = { startDate: '2023-07-23T00:00:00Z' };
    const transformedObject =
      transformIsoDatesToDateObjects(objectWithDateString);
    expect(transformedObject).toEqual({
      startDate: new Date('2023-07-23T00:00:00Z'),
    });
  });

  it('should handle nested objects and convert ISO date strings', () => {
    const nestedObjectWithDateString = {
      user: {
        name: 'John',
        birthDate: '1990-01-01T00:00:00Z',
      },
    };
    const transformedNestedObject = transformIsoDatesToDateObjects(
      nestedObjectWithDateString,
    );
    expect(transformedNestedObject).toEqual({
      user: {
        name: 'John',
        birthDate: new Date('1990-01-01T00:00:00Z'),
      },
    });
  });

  it('should handle arrays of objects and convert ISO date strings', () => {
    const arrayWithDateStrings = [
      { startDate: '2023-07-23T00:00:00Z' },
      { endDate: '2023-07-24T00:00:00Z' },
    ];
    const transformedArray =
      transformIsoDatesToDateObjects(arrayWithDateStrings);
    expect(transformedArray).toEqual([
      { startDate: new Date('2023-07-23T00:00:00Z') },
      { endDate: new Date('2023-07-24T00:00:00Z') },
    ]);
  });

  it('should handle complex nested structures and convert ISO date strings', () => {
    const complexObjectWithDateStrings = {
      project: {
        milestones: [
          { milestoneDate: '2023-07-23T00:00:00Z' },
          { reviewDate: '2023-08-23T00:00:00Z' },
        ],
      },
    };
    const transformedComplexObject = transformIsoDatesToDateObjects(
      complexObjectWithDateStrings,
    );
    expect(transformedComplexObject).toEqual({
      project: {
        milestones: [
          { milestoneDate: new Date('2023-07-23T00:00:00Z') },
          { reviewDate: new Date('2023-08-23T00:00:00Z') },
        ],
      },
    });
  });

  it('should leave non-date strings unchanged', () => {
    const objectWithoutDateStrings = {
      name: 'John',
      description: 'This is a test',
    };
    const transformedObjectWithoutDates = transformIsoDatesToDateObjects(
      objectWithoutDateStrings,
    );
    expect(transformedObjectWithoutDates).toEqual({
      name: 'John',
      description: 'This is a test',
    });
  });

  it('should handle empty objects', () => {
    const emptyObject = {};
    const transformedEmptyObject = transformIsoDatesToDateObjects(emptyObject);
    expect(transformedEmptyObject).toEqual({});
  });

  it('should handle empty arrays', () => {
    const emptyArray: unknown[] = [];
    const transformedEmptyArray = transformIsoDatesToDateObjects(emptyArray);
    expect(transformedEmptyArray).toEqual([]);
  });

  it('should handle null values correctly', () => {
    const nullValue = null;
    const transformedNullValue = transformIsoDatesToDateObjects(nullValue);
    expect(transformedNullValue).toBeNull();
  });

  it('should handle undefined values correctly', () => {
    const undefinedValue = undefined;
    const transformedUndefinedValue =
      transformIsoDatesToDateObjects(undefinedValue);
    expect(transformedUndefinedValue).toBeUndefined();
  });
});

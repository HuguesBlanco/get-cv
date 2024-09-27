export function transformIsoDatesToDateObjects(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.map(transformIsoDatesToDateObjects);
  }

  if (typeof input === 'object' && input !== null) {
    return Object.entries(input).reduce<Record<string, unknown>>(
      (objectWithConvertedDates, [currentKey, currentValue]) => {
        const isIsoDateString =
          currentKey.endsWith('Date') && typeof currentValue === 'string';
        const convertedValue = isIsoDateString
          ? new Date(currentValue)
          : transformIsoDatesToDateObjects(currentValue);

        return { ...objectWithConvertedDates, [currentKey]: convertedValue };
      },
      {},
    );
  }

  return input;
}

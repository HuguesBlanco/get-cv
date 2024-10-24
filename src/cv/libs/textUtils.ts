type StringsContainer = {
  [key: string]: string | undefined | StringsContainer;
};

export function isDisplayableString(
  value: string | undefined,
): value is string {
  return !(value === undefined || value === '');
}

export function isDisplayableStringInObject(object: StringsContainer): boolean {
  return Object.values(object).some(
    (value) =>
      (typeof value === 'string' && isDisplayableString(value)) ||
      (typeof value === 'object' && isDisplayableStringInObject(value)),
  );
}

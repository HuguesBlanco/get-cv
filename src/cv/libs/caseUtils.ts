/**
 * Transforms a string to PascalCase considering acronyms as words, preserving numbers, and handling special characters.
 * @param input The string to be transformed.
 * @returns The transformed string in PascalCase.
 */
export function toPascalCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space between PascalCase transitions (PascalCase --> Pascal Case)
    .replace(/[^a-zA-Z0-9]+/g, ' ') // Replace non-alphanumeric characters with spaces
    .split(' ')
    .filter((word) => word !== '')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

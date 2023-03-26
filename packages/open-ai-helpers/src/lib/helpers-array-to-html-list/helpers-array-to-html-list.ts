/**
 * Convert an array of items to an HTML list string
 * @param items An array of items to be converted
 * @returns An HTML list string
 * @throws An error if the input is not an array
 */
export function HelpersArrayToHtmlList<T>(items: T[]): string | null {

  if (!Array.isArray(items)) {
    throw new Error('Input must be an array');
  }

  if (items.length <= 0) {
    return null;
  }

  const listItems = items.map((item) => `<li>${item}</li>`);

  const listHtml = `<ul>${listItems.join('')}</ul>`;

  return listHtml;
}

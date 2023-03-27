/**
 * Format a number as currency in the specified currency and language format.
 * @param {number} n - The number to format.
 * @param {string} curr - The currency code to use for formatting.
 * @param {string} [LanguageFormat] - The language format to use for formatting. Optional.
 * @example
 * toCurrency(1234.56, 'USD') // returns "$1,234.56"
 * toCurrency(1234.56, 'EUR', 'fr-FR') // returns "1234,56€"
 * toCurrency(1234.56, 'GBP', 'en-GB') // returns "£1,234.56"
 */
export function HelpersToCurrency(n: number, curr: string, LanguageFormat?: string): string {
  return Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
}

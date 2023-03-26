

export function HelpersCapitalize(first: string): string {

  if (typeof first !== 'string') {
    throw new Error('First not Unknown');
  }

  return first.charAt(0).toUpperCase() + first.slice(1);
};
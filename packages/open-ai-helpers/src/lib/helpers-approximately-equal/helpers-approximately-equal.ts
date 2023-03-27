/**
 * A function that checks if two numbers are approximately equal to each other within a given tolerance.
 * 
 * @param firstNumber The first number to compare.
 * @param secondNumber The second number to compare.
 * @param epsilon The tolerance value. If the absolute difference between the two numbers is less than epsilon, they are considered equal. Defaults to 0.001.
 * 
 * @returns A boolean value indicating whether the two input numbers are approximately equal to each other.
 */

export function HelpersApproximatelyEqual(firstNumber: number, secondNumber: number, epsilon = 0.001): boolean {

  const absoluteValue = Math.abs(firstNumber - secondNumber);

  const isEqual = absoluteValue < epsilon;

  return isEqual;
}

import infixToRPN from '@/infixToRPN';
import calculateRPN from '@/calculateRPN';

describe('infixToRPN + calculateRPN', () => {
  test('should evaluate from "2 + 2" to 4', () => {
    const equation = '2 + 2';
    const rpn = infixToRPN(equation);
    const result = calculateRPN(rpn);
    expect(result).toBe(4);
  });

  test('should evaluate from "2 * 2 + 2" to 6', () => {
    const equation = '2 * 2 + 2';
    const rpn = infixToRPN(equation);
    const result = calculateRPN(rpn);
    expect(result).toBe(6);
  });

  test('should evaluate from "2 * (2 + 2)" to 8', () => {
    const equation = '2 * (2 + 2)';
    const rpn = infixToRPN(equation);
    const result = calculateRPN(rpn);
    expect(result).toBe(8);
  });

  test('should evaluate from "2^2" to 4', () => {
    const equation = '2^2';
    const rpn = infixToRPN(equation);
    const result = calculateRPN(rpn);
    expect(result).toBe(4);
  });

  test('should evaluate from "2 ^ (2 + 2)" to 16', () => {
    const equation = '2 ^ (2 + 2)';
    const rpn = infixToRPN(equation);
    const result = calculateRPN(rpn);
    expect(result).toBe(16);
  });

  test('should evaluate from "(4 % 3) * 2" to 2', () => {
    const equation = '(4 % 3) * 2';
    const rpn = infixToRPN(equation);
    const result = calculateRPN(rpn);
    expect(result).toBe(2);
  });
});
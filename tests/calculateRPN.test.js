import calculateRPN from '@/calculateRPN';

describe('calculateRPN', () => {
  describe('when provided with empty array or not array', () => {
    test('should return 0', () => {
      expect(calculateRPN([])).toBe(0);
      expect(calculateRPN(123)).toBe(0);
      expect(calculateRPN('')).toBe(0);
      expect(calculateRPN(undefined)).toBe(0);
    });
  });

  describe('when provided with valid RPN', () => {
    test('should evaluate [2, 2, +] into 4', () => {
      expect(calculateRPN([2, 2, '+'])).toBe(4);
    });

    test('should evaluate [2, 2, 2, +, *] into 8', () => {
      expect(calculateRPN([2, 2, 2, '+', '*'])).toBe(8);
    });

    test('should evaluate [2, 2, 2, *, +] into 6', () => {
      expect(calculateRPN([2, 2, 2, '*', '+'])).toBe(6);
    });
  });
});
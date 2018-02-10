import calculateRPN from '@/calculateRPN';

describe('calculateRPN', () => {
  describe('when provided with empty array or not array', () => {
    test('should return null', () => {
      expect(calculateRPN([])).toBeNull();
      expect(calculateRPN(123)).toBeNull();
      expect(calculateRPN('')).toBeNull();
      expect(calculateRPN(undefined)).toBeNull();
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
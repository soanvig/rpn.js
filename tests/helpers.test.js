import * as helpers from '@/helpers';

describe('removeWhitespaces', () => {
  const removeWhitespaces = helpers.removeWhitespaces;
  describe('when empty string is provided', () => {
    test('should return empty string', () => {
      expect(removeWhitespaces('')).toBe('');
    });
  });

  describe('when not string is provided', () => {
    test('should return empty string', () => {
      expect(removeWhitespaces(false)).toBe('');
      expect(removeWhitespaces(null)).toBe('');
      expect(removeWhitespaces(123)).toBe('');
      expect(removeWhitespaces([])).toBe('');
    });
  });

  describe('when string is provided', () => {
    test('should return string without spaces', () => {
      expect(removeWhitespaces(' a b    c  ')).toBe('abc');
    });
  });
});

describe('identifyOperand', () => {
  const identifyOperand = helpers.identifyOperand;

  describe('when operand is not defined', () => {
    test('should return undefined', () => {
      expect(identifyOperand(123)).toBeUndefined();
    });
  });

  describe('when operand is defined', () => {
    test('should return priority', () => {
      expect(identifyOperand('*')).toBe(2);
    });
  });
});
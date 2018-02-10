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

describe('countParentheses', () => {
  const countParentheses = helpers.countParentheses;

  describe('when string is empty', () => {
    test('should return array [0, 0]', () => {
      expect(countParentheses('')).toEqual(expect.arrayContaining([0, 0]));
    });
  });

  describe('when not string is provided', () => {
    test('should return array [0, 0]', () => {
      expect(countParentheses(123)).toEqual(expect.arrayContaining([0, 0]));
    });
  });

  describe('when string has some parantheses', () => {
    test('should return expected result', () => {
      expect(countParentheses('(123,')).toEqual(expect.arrayContaining([1, 0]));
      expect(countParentheses('())')).toEqual(expect.arrayContaining([1, 2]));
      expect(countParentheses('(())')).toEqual(expect.arrayContaining([2, 2]));
    });
  });
});

describe('splitOnOperands', () => {
  const splitOnOperands = helpers.splitOnOperands;

  describe('when provided with empty string or not string', () => {
    test('should return empty array', () => {
      expect(splitOnOperands('')).toEqual(expect.arrayContaining([]));
      expect(splitOnOperands(123)).toEqual(expect.arrayContaining([]));
    });
  });

  describe('when provided with valid string', () => {
    describe('when single digit numbers', () => {
      test('should return proper result', () => {
        expect(splitOnOperands('2+2')).toEqual(expect.arrayContaining(['2', '+', '2']));
        expect(splitOnOperands('(2+2)*2')).toEqual(expect.arrayContaining(['(', '2', '+', '2', ')', '*', '2']));
      });
    });
  });
});
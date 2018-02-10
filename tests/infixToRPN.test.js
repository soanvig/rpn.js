import infixToRPN from '@/infixToRPN';

describe('infixToRPN', () => {
  describe('when provided empty string', () => {
    test('should return empty array', () => {
      expect(infixToRPN('')).toContainEqual([]);
    });
  });

  describe('when provided not string', () => {
    test('should throw "InvalidEquation" error', () => {
      expect(infixToRPN(123)).toThrowError('InvalidEquation');
    });
  });

  describe('when provided single number as string', () => {
    test('should return array with that number as number', () => {
      expect(infixToRPN('2')).toContainEqual([2]);
    });
  });

  describe('when provided single operand as string', () => {
    test('should throw "InvalidEquation" error', () => {
      expect(infixToRPN('*')).toThrowError('InvalidEquation');
    });
  });

  describe('when provided equation with number of ( not equal to number of )', () => {
    test('should throw "InvalidEquation" error', () => {
      expect(infixToRPN('((2+53)')).toThrowError('InvalidEquation');
      expect(infixToRPN('2+53)')).toThrowError('InvalidEquation');
    });
  });

  describe('when provided equation without spaces', () => {
    describe('when equation has no ()', () => {
      test('should return good result', () => {
        expect(infixToRPN('2+2')).toContainEqual([2, 2, '+']);
        expect(infixToRPN('2+2*2')).toContainEqual([2, 2, 2, '*', '+']);
      });
    });

    describe('when provided equation with ()', () => {
      test('should return good result', () => {
        expect(infixToRPN('2*(2+2)')).toContainEqual([2, 2, '+', '*']);
      });
    });
  });

  describe('when provided equation with spaces', () => {
    test('should return good result', () => {
      expect(infixToRPN('2 + 2')).toContainEqual([2, 2, '+']);
    });
  });
});
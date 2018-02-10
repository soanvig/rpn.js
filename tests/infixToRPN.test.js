import infixToRPN from '@/infixToRPN';

describe('infixToRPN', () => {
  describe('when provided empty string', () => {
    test('should return empty array', () => {
      expect(infixToRPN('')).toEqual(expect.arrayContaining([]));
    });
  });

  describe('when provided not string', () => {
    test('should throw "InvalidEquation" error', () => {
      function proceed () {
        infixToRPN(123);
      }

      expect(proceed).toThrowError('InvalidEquation');
    });
  });

  describe('when provided single number as string', () => {
    test('should return array with that number as number', () => {
      expect(infixToRPN('2')).toEqual(expect.arrayContaining([2]));
    });
  });

  describe('when provided single operand as string', () => {
    test('should throw "InvalidEquation" error', () => {
      function proceed () {
        infixToRPN('*');
      }

      expect(proceed).toThrowError('InvalidEquation');
    });
  });

  describe('when provided equation with number of ( not equal to number of )', () => {
    test('should throw "InvalidEquation" error', () => {
      function proceed1 () {
        infixToRPN('((2+53)');
      }

      function proceed2 () {
        infixToRPN('2+53)');
      }

      expect(proceed1).toThrowError('InvalidEquation');
      expect(proceed2).toThrowError('InvalidEquation');
    });
  });

  describe('when provided equation without spaces', () => {
    describe('when equation has no ()', () => {
      test('should return good result', () => {
        expect(infixToRPN('2+2')).toEqual(expect.arrayContaining([2, 2, '+']));
        expect(infixToRPN('2+2*2')).toEqual(expect.arrayContaining([2, 2, 2, '*', '+']));
      });
    });

    describe('when provided equation with ()', () => {
      test('should return good result', () => {
        expect(infixToRPN('2*(2+2)')).toEqual(expect.arrayContaining([2, 2, 2, '+', '*']));
      });
    });
  });

  describe('when provided equation with spaces', () => {
    test('should return good result', () => {
      expect(infixToRPN('2 + 2')).toEqual(expect.arrayContaining([2, 2, '+']));
    });
  });

  describe('when provided equation with two and more digit number', () => {
    test('should return good result', () => {
      expect(infixToRPN('2+12')).toEqual(expect.arrayContaining([2, 12, '+']));
    });
  });
});
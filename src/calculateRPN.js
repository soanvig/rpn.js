import isNumeric from '@/helpers/isNumeric';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '^': (a, b) => Math.pow(a, b),
  '%': (a, b) => a % b
};

function calculateRPN (rpn) {
  if (!(rpn instanceof Array) || rpn.length === 0) {
    return 0;
  }

  const stack = [];

  rpn.forEach((item) => {
    if (isNumeric(item)) {
      stack.push(item);
      return;
    }

    // it's operand
    const a = stack.pop();
    const b = stack.pop();
    const operation = operations[item];
    const result = operation(b, a);
    stack.push(result);
  });

  return stack.pop();
}

export default calculateRPN;
export default function identifyOperand (operand) {
  const priority = {
    '(': 0,
    '+': 1,
    '-': 1,
    ')': 1,
    '*': 2,
    '/': 2,
    '%': 2,
    '^': 3
  };

  return priority[operand];
}
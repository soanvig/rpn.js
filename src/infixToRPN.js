// InfixToRPN converts string from Infix to RPN notation

import {
  countParentheses,
  identifyOperand,
  removeWhitespaces,
  splitOnOperands,
  isNumeric
} from '@/helpers';

function validateString (string) {
  if (typeof string !== 'string') {
    throw 'InvalidEquation';
  }

  if (string.length === 0) {
    return [];
  }

  const parenthesesCount = countParentheses(string);

  if (parenthesesCount[0] !== parenthesesCount[1]) {
    throw 'InvalidEquation';
  }

  return true;
}

export default function infixToRPN (string) {
  const validate = validateString(string);
  if (validate !== true) {
    return validate;
  }

  const stack = [];
  const output = [];
  string = removeWhitespaces(string);
  string = splitOnOperands(string);

  if (!isNumeric(string[0])) {
    throw 'InvalidEquation';
  }

  entryRead: for (let i = 0; i < string.length; i += 1) {
    const sign = string[i];

    if (isNumeric(sign)) {
      output.push(Number(sign));
    } else if (sign === '(') {
      stack.push(sign);
    } else if (sign === ')') {
      // Move to output all operands until (
      paranthesisLoop: for (let j = stack.length - 1; j >= 0; j -= 1) {
        const operand = stack.pop();
        if (operand === '(') {
          break paranthesisLoop;
        }

        output.push(operand);
      }
    } else if (['+', '-', '*', '/', '%', '^'].includes(sign)) {
      // If operand's priority is greater than operand's on the stack
      // or stack is empty, add operand to stack.
      // Otherwise send from stack to output all operators, that have higher or equal priority to sign, and add operand to stack.
      let topOperandPriority, topOperand;

      const signPriority = identifyOperand(sign);

      do {
        topOperand = stack[stack.length - 1];
        topOperandPriority = identifyOperand(topOperand);
        if (topOperandPriority >= signPriority) {
          output.push(stack.pop());
        }
      } while (topOperandPriority >= signPriority);

      stack.push(sign);
    }
  }

  // At the end, when all elements were loaded, send all operators
  // from stack to output
  while (stack.length > 0) {
    output.push(stack.pop());
  }

  return output;
}
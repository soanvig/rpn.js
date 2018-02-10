import isNumeric from './isNumeric';
import identifyOperand from './identifyOperand';

export default function splitOnOperands (string) {
  if (!string || typeof string !== 'string') {
    return '';
  }

  const output = [];
  string = string.split('');

  string.forEach((char) => {
    if (typeof identifyOperand(char) !== 'undefined') {
      output.push(char);
      return;
    }

    if (isNumeric(char)) {
      const last = output[output.length - 1];
      if (isNumeric(last)) {
        output[output.length - 1] = last + char;
      } else {
        output.push(char);
      }
    }
  });

  return output;
}
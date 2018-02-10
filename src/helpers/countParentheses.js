export default function countParentheses (string) {
  if (typeof string !== 'string') {
    return [0, 0];
  }

  const left = (string.match(/\(/g) || []).length;
  const right = (string.match(/\)/g) || []).length;

  return [left, right];
}
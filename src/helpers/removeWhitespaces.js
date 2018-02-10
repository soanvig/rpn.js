export default function removeWhitespaces (string) {
  if (!string || typeof string !== 'string') {
    return '';
  }

  return string.replace(/(\s)+/g, '');
}
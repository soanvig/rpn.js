# rpn.js

[Reverse polish notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) (RPN).

Converts any string equation (infix notation) to RPN.
Calculates RPN notations.

## Usage

### infixToRPN

```js
import { infixToRPN } from 'rpn.js';

const infix = '(2 + 2) * 2';
const rpn = infixToRPN(infix);

console.log(rpn);
// => [2, 2, 2, '+', '*']
```
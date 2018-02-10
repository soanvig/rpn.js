# rpn.js

[Reverse polish notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation) (RPN).

Converts any string equation (infix notation) to RPN.
Calculates RPN notations.

## Installation

```
npm install rpn.js
or
yarn add rpn.js
```

## Usage

See [tests](tests) directory for more examples.

### infixToRPN

```js
import { infixToRPN } from 'rpn.js';

const infix = '(2 + 2) * 2';
const rpn = infixToRPN(infix);

console.log(rpn);
// => [2, 2, 2, '+', '*']
```

### calculateRPN

```js
import { calculateRPN } from 'rpn.js';

const rpn = [2, 2, 2, '+', '*'];
const result = calculateRPN(rpn);

console.log(result);
// => 8
```
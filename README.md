# node-random

[![Build Status](https://travis-ci.org/rockyliyanlok/node-random.svg?branch=master)](https://travis-ci.org/rockyliyanlok/node-random) [![Download Stats](https://img.shields.io/npm/dw/@rockyli/random.svg)](https://github.com/rockyliyanlok/node-random)

Random generator with simple API to help you create random numbers, booleans, bytes and strings.

## Installation

To install the random generator, use [npm](http://github.com/npm/npm):

```
npm install @rockyli/random
```

## Usage

```javascript
const random = require('@rockyli/random');

random.integer(min = 0, max = 100); // generate integer from 0 to 100
random.number(min = 0, max = 100); // generate number from 0.0 to 100.0
random.boolean(); // true or false
random.bytes(len = 16); // generate cryptographically strong pseudo-random data
random.string(len = 16, type = 'alphanumeric', capitalization = 'lowercase'); // generate random string

```

## API

- `integer(min, max)`
  - `min` - the minimum value of random integer. (default: 0) [OPTIONAL]
  - `max` - the maxium value of random integer. (default: 100) [OPTIONAL]
 

- `number(min, max)`
  - `min` - the minimum value of random integer. (default: 0.0) [OPTIONAL]
  - `max` - the maxium value of random integer. (default: 100.0) [OPTIONAL]
 

- `boolean()` 
 

- `string(len, type, capitalization)`
  - `len` - the length of the random string. (default: 16) [OPTIONAL]
  - `type` - define the character set for the string. (default: `alphanumeric`) [OPTIONAL]
    - `alphanumeric` - [0-9 a-z A-Z]
    - `alphabetic` - [a-z A-Z]
    - `numeric` - [0-9]
    - `hex` - [0-9 a-f]
    - `custom` - any given characters
  - `capitalization` - define whether the output should be lowercase or uppercase only. (default: `lowercase`) [OPTIONAL]
    - `lowercase`
    - `uppercase`
    - `null`
 

## Tests

```
npm install
npm run test
```

## LICENSE

node-random is licensed under the MIT license.

# `react-arithmetic`

A horrible substitute for actual math by (ab)using `React` instead

# Usage

There are two operations you can perform out of the box `Add` and `Multiply`. You
can then use these on a `Number` to render an arithmetic operation

So you if you wanted to represent `2 * 2 * (1 + 2 + 2)`, you can do it as follows

```js
<Multiply>
  <Number value={ 2 } />
  <Number value={ 2 } />
  <Add>
    <Number value={ 1 } />
    <Number value={ 2 } />
    <Number value={ 2 } />
  </Add>
</Multiply>
```

This will resolve `20`

## Tests [![Build Status](https://travis-ci.com/SivanMehta/react-calculator.svg?branch=master)](https://travis-ci.com/SivanMehta/react-calculator)

```sh
npm test
```

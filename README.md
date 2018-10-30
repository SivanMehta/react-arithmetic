# `react-arithmetic`


![npm (scoped)](https://img.shields.io/npm/v/react-arithmetic.svg?style=popout-square)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=popout-square)
[![Build Status](https://travis-ci.com/SivanMehta/react-arithmetic.svg?branch=master)](https://travis-ci.com/SivanMehta/react-arithmetic)

A horrible substitute for actual math by (ab)using `React` instead

# Usage

```sh
npm install react-arithmetic
```

There are two operations you can perform out of the box `Add` and `Multiply`. You
can then use these on a `Number` to render an arithmetic operation

So you if you wanted to represent `2 * 2 * (1 + 2 + 2)`, you can do it as follows

```js
import React, { Component } from 'react';
import { Number, Add, Multiply } from 'react-arithmetic';

class Mathemagic extends Component {
  render() {
    return (
      <Multiply>
        <Number value={ 2 } />
        <Number value={ 2 } />
        <Add>
          <Number value={ 1 } />
          <Number value={ 2 } />
          <Number value={ 2 } />
        </Add>
      </Multiply>
    );
  }
}
```

This will resolve `20`

## Tests

```sh
npm test
```

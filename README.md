## Overview

Px par is a small sass and js function that allows for the converting a child's with into a % of it's parent. Its primary purpose is to allow programmers to convert container & child sizes from pixel measurements into % without requiring a calculator.

## Install

`npm install --save px-par`

## SASS

### Import in sass

`@import 'node_modules/px-par/index.scss';`

### Import using sass loader

`@import 'px-par/index.scss';`

### Example

The px par function is provided in both camel case and underscore separated.

```
.container {
    width: 100%;
    .cell {
        width: px_par(100, 50);
    }
}
```

OR

```
.container {
    width: 100%;
    .cell {
        width: pxPar(100, 50);
    }
}
```

## Node and Styled Components

### Import js

The px par function is provided in both camel case and underscore separated.

`import {px_par, pxPar} from 'px-par'`

### Example

```
import styled, { css } from 'styled-components'
import {pxPar} from 'px-par'

const containerStyles = css`
    .row {
        width: 100%;
        .cell {
            width: ${pxPar(100, 50)};
        }
    }
`

const Container = styled.div`
    ${containerStyles}
`
```

## Testing

Running
`npm test`
should output the following

```
> px-par@0.1.3 test C:\Users\zach\Desktop\px-par\px-par
> mocha

  Running SASS Test
    The function for px conversion to %
      √  par_size(100, 50); Outputs calc( (100% / 100) * 50)
      √  par_size(240, 20); Outputs calc( (100% / 240) * 20)

  Running JS Test
    The function for px conversion to %
      √  par_size(100, 50) Outputs calc( ( (100% / 100) * 50 + 0px )
      √  par_size(100, 50) Outputs calc( ( (100% / 240) * 20 + 0px )


  4 passing (24ms)
```

## License

MIT https://github.com/JoueBien/px-text/blob/master/LICENSE

## Notes

This library & documentation was written to work with the sass loader that vue uses. It should work with other frameworks but there are no guarantees that it will.

3.x works with dart sass, has typescript support & has modern test utils that work in node 20.x.x.
2.x is recommended for Vue2 or node-sass users.

If you know how to use it with other front end frameworks feel free to make a pull request or open an issue.

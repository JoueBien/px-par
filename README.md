## Overview
Px par is a small sass and js function that allows for the quick conversion of pixels into to rem. Its primary purpose is to allow programmers to convert container & child sizes from pixel measurements into % without requiring a calculator. 

## Install 
```npm install --save px-par```

## SASS

### Import in sass
```@import 'node_modules/px-par/index.scss';```
### Import using sass loader
```@import 'px-par/index.scss';```

### Example
```
.container {
    width: 100%;
    .cell {
        width: px_par(100, 50);
    }
}
```

## Node and Styled Components

### Import js
```import {px_par} from 'px-par'```

### Example
```
import styled, { css } from 'styled-components'
import {px_par} from 'px-par'

const containerStyles = css`
    .row {
        width: 100%;
        .cell {
            width: ${px_par(100, 50)};
        }
    }
`

const Container = styled.div`
    ${containerStyles}
`

```

## Testing 
Running
``` npm test ```
should ouput the following
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

Note that this library & documentation was written to work with the sass loader that vue uses. It should work with other frameworks but there are no guarantees that it will.

If you know how to use it with other front end frameworks feel free to make a pull request or open an issue.

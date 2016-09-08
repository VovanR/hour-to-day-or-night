# hour-to-day-or-night

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Convert hour to day or night: 8 → 'day'

Demo: [vovanr.github.io/hour-to-day-or-night][demo]

## Install

```
npm install --save hour-to-day-or-night
```

## Usage

```js
var hourToDayOrNight = require('hour-to-day-or-night');

hourToDayOrNight(8);
//=> 'day'

hourToDayOrNight(19);
//=> 'night'

hourToDayOrNight(17.9);
//=> 'day'

hourToDayOrNight('5.9');
//=> 'night'

hourToDayOrNight();
//=> ''
```

## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)

[demo]: http://vovanr.github.io/hour-to-day-or-night

[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square

[npm-url]: https://npmjs.org/package/hour-to-day-or-night
[npm-image]: http://img.shields.io/npm/v/hour-to-day-or-night.svg?style=flat-square

[travis-url]: https://travis-ci.org/VovanR/hour-to-day-or-night
[travis-image]: http://img.shields.io/travis/VovanR/hour-to-day-or-night.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/VovanR/hour-to-day-or-night
[coveralls-image]: http://img.shields.io/coveralls/VovanR/hour-to-day-or-night.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/hour-to-day-or-night
[depstat-image]: https://david-dm.org/VovanR/hour-to-day-or-night.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/hour-to-day-or-night
[depstat-dev-image]: https://david-dm.org/VovanR/hour-to-day-or-night/dev-status.svg?style=flat-square

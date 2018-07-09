<a name="1.0.0"></a>
# [1.0.0](https://github.com/VovanR/hour-to-day-or-night/compare/v0.1.1...v1.0.0) (2018-05-07)


### Bug Fixes

* **lib:** Do not convert 24 hours. Because after 23:59 goes 00:00 ([8ef107a](https://github.com/VovanR/hour-to-day-or-night/commit/8ef107a))


### build

* **nodejs:** Drop support for NodeJS v4 ([03cb46c](https://github.com/VovanR/hour-to-day-or-night/commit/03cb46c))


### Features

* **lib:** Allow argument type `number` only between 0 and 24 ([806312c](https://github.com/VovanR/hour-to-day-or-night/commit/806312c)), closes [#5](https://github.com/VovanR/hour-to-day-or-night/issues/5)


### BREAKING CHANGES

* **lib:** Throws `RangeError` if `hour` is 24. Because correct `24` is `0`
* **nodejs:** Drop support for NodeJS v4
* **lib:** Throw error with string or empty argument



<a name="0.1.1"></a>
## [0.1.1](https://github.com/VovanR/hour-to-day-or-night/compare/v0.1.0...v0.1.1) (2018-02-08)



<a name="0.1.0"></a>
# 0.1.0 (2016-09-08)




var DAY = 'day';
var NIGHT = 'night';

/**
 * @param {number} hour from 0 to 24
 * @return {string} 'day' or 'night'
 *
 * @example
 * hourToDayOrNight(8);
 * //=> 'day'
 *
 * hourToDayOrNight(19);
 * //=> 'night'
 */
function hourToDayOrNight(hour) {
	if (typeof hour !== 'number' || isNaN(hour)) {
		throw new TypeError('Expected `hour` type to be a `number`');
	}

	if (hour < 0 || hour > 24) {
		throw new RangeError('Expected `hour` to be a number between 0 and 24');
	}

	if (hour >= 18) {
		return NIGHT;
	} else if (hour >= 6) {
		return DAY;
	}

	return NIGHT;
}

module.exports = hourToDayOrNight;

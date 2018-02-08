var DAY = 'day';
var NIGHT = 'night';

/**
 * @param {number|string} hour
 * @return {string} day or night
 *
 * @example
 * hourToDayOrNight(8);
 * //=> 'day'
 *
 * hourToDayOrNight(19);
 * //=> 'night'
 */
function hourToDayOrNight(hour) {
	if ((!hour && hour !== 0) || hour > 24) {
		return '';
	}

	if (hour >= 18) {
		return NIGHT;
	} else if (hour >= 6) {
		return DAY;
	}

	return NIGHT;
}

module.exports = hourToDayOrNight;

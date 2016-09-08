/* eslint-disable no-nested-ternary */

/**
 * @param {Number|String} hour
 * @return {String} day or night
 */
function hourToDayOrNight(hour) {
	if ((!hour && hour !== 0) || hour > 24) {
		return '';
	}

	return hour >= 18 ? 'night' :
		hour >= 6 ? 'day' :
		'night';
}

module.exports = hourToDayOrNight;

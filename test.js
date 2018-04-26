import test from 'ava';
import fn from './';

const spec = {
	day: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
	night: [0, 1, 2, 3, 4, 5, 18, 19, 20, 21, 22, 23]
};

test('is function', t => {
	t.is(typeof fn, 'function');
});

test('should convert number', t => {
	Object.keys(spec).forEach(part => {
		spec[part].forEach(hour => {
			t.is(fn(hour), part);
		});
	});
});

test('should convert float', t => {
	t.is(fn(5.9), 'night');
	t.is(fn(17.9), 'day');
});

test('should throw `TypeError` with incorrect argument type', t => {
	const error = t.throws(() => fn(null), TypeError);
	t.is(error.message, 'Expected `hour` type to be a `number`');
});

test('should throw `TypeError` with empty argument value', t => {
	[undefined, null, ''].forEach(arg => t.throws(() => fn(arg), TypeError));
});

test('should throw `TypeError` with wrong argument types', t => {
	[NaN, [], {}, '3'].forEach(arg => t.throws(() => fn(arg), TypeError));
});

test('should throw `RangeError` with argument value > 24 hours', t => {
	const error = t.throws(() => fn(25), RangeError);
	t.is(error.message, 'Expected `hour` to be a number from 0 to 23');
});

test('should throw `RangeError` with argument value < 0 hours', t => {
	const error = t.throws(() => fn(-1), RangeError);
	t.is(error.message, 'Expected `hour` to be a number from 0 to 23');
});

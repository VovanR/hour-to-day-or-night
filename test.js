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

test('should convert string', t => {
	Object.keys(spec).forEach(part => {
		spec[part].forEach(hour => {
			t.is(fn(String(hour)), part);
		});
	});
});

test('should convert float', t => {
	t.is(fn(5.9), 'night');
	t.is(fn(17.9), 'day');
	t.is(fn('5.9'), 'night');
	t.is(fn('17.9'), 'day');
});

test('should not convert empty value', t => {
	[undefined, null, ''].forEach(arg => t.is(fn(arg), ''));
});

test('should not convert value > 24 hours', t => {
	t.is(fn(25), '');
});

//TESTS FOR THE DICE ROLLING FUNCTION
import { roll } from '../roller.ts'

describe('rolls one die', () => {
	const die = '1d20';
	it('returns a number when given a die to roll', () => {
		expect(typeof(roll(die))).toBe('number');
	});
	it('cannot roll zero dice', () => {
		expect(() => {
			roll();
		}).toThrow();
	});
});


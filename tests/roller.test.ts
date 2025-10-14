//TESTS FOR THE DICE ROLLING FUNCTION
import { roll } from '../roller.ts'

describe('rolls one die', () => {
	it('returns a number', () => {
		expect(typeof(roll(die))).toBe(number);
	});
});


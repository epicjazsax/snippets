//TESTS FOR THE DICE ROLLING FUNCTION
import { Roller } from '../roller.ts'

let roller: Roller;

beforeAll(() => {
	roller = new Roller();
});

describe('rolls one die', () => {
	const die = '1d20';
	it('returns a number when given a die to roll', () => {
		expect(typeof(roller.roll(die))).toBe('number');
	});
	it('cannot roll zero dice', () => {
		expect(() => {
			roller.roll();
		}).toThrow();
	});
});


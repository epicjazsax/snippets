//TESTS FOR THE DICE ROLLING FUNCTION
import { Roller } from '../roller.ts'

let roller: Roller;

beforeAll(() => {
    roller = new Roller();
});

describe('rolls a given number as a die', () => {
    const die = 20;
    it('returns a number when given a die to roll', () => {
        expect(typeof (roller.roll(die))).toBe('number');
    });
    it('cannot roll a non-integer number', () => {
        expect(() => {
            roller.roll(2.5);
        }).toThrow();
    });
    it('returns a positive number', () => {
        expect(roller.roll(die)).toBeGreaterThan(0);
    });
    it('returns an integer', () => {
        const rolledNumber = roller.roll(die);
        const roundedDownToInteger = Math.floor(rolledNumber);
        expect(rolledNumber).toEqual(roundedDownToInteger);
    });
});

describe('cannot roll improper dice formats', () => {
    it('cannot roll nothing', () => {
        expect(() => {
            roller.roll();
        }).toThrow();
    });
    it('cannot roll a boolean', () => {
        expect(() => {
            roller.roll(false);
        }).toThrow();
        expect(() => {
            roller.roll(true);
        }).toThrow();
    });
});


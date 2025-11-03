//TESTS FOR THE DICE ROLLING FUNCTION
import { Roller } from '../roller.ts'

let roller: Roller;
function mockMinValue() {
    return jest.spyOn(Math, 'random').mockReturnValue(0)
};

function mockMaxValue() {
    return jest.spyOn(Math, 'random').mockReturnValue(0.99999999999999)
};

beforeAll(() => {
    roller = new Roller();
});

describe('rolls one d20', () => {
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
    it('returns a one as its lowest value', () => {
        mockMinValue();
        expect(roller.roll(die)).toEqual(1);
    });
    it('returns its amount of sides as its highest value', () => {
        mockMaxValue();
        expect(roller.roll(die)).toEqual(die);
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


//TESTS FOR THE DICE ROLLING FUNCTION
import { Roller } from '../roller.ts'

let roller: Roller

function mockMinValue() {
    return jest.spyOn(Math, 'random').mockReturnValue(0)
}

function mockMaxValue() {
    return jest.spyOn(Math, 'random').mockReturnValue(0.99999999999999)
}

beforeAll(() => {
    roller = new Roller()
})

describe('rolls one d20 as an integer', () => {
    const die = 20
    it('returns a number when given a die to roll', () => {
        expect(typeof (roller.roll(die))).toBe('number')
    })
    it('cannot roll a non-integer number', () => {
        expect(() => {
            roller.roll(2.5)
        }).toThrow()
    })
    it('returns a positive number', () => {
        expect(roller.roll(die)).toBeGreaterThan(0)
    })
    it('returns an integer', () => {
        const rolledNumber = roller.roll(die)
        const roundedDownToInteger = Math.floor(rolledNumber)
        expect(rolledNumber).toEqual(roundedDownToInteger)
    })
    it('returns a one as its lowest value', () => {
        mockMinValue()
        expect(roller.roll(die)).toEqual(1)
    })
    it('returns its amount of sides as its highest value', () => {
        mockMaxValue()
        expect(roller.roll(die)).toEqual(die)
    })
})

describe('rolls other popular dice', () => {
    it('returns a one as a d4s lowest value', () => {
        mockMinValue()
        expect(roller.roll(4)).toEqual(1)
    })
    it('returns a four as a d4s highest value', () => {
        mockMaxValue()
        expect(roller.roll(4)).toEqual(4)
    })
    it('returns a one as a d6s lowest value', () => {
        mockMinValue()
        expect(roller.roll(6)).toEqual(1)
    })
    it('returns a six as a d6s highest value', () => {
        mockMaxValue()
        expect(roller.roll(6)).toEqual(6)
    })
    it('returns a one as a d8s lowest value', () => {
        mockMinValue()
        expect(roller.roll(8)).toEqual(1)
    })
    it('returns an eight as a d8s highest value', () => {
        mockMaxValue()
        expect(roller.roll(8)).toEqual(8)
    })
    it('returns a one as a d10s lowest value', () => {
        mockMinValue()
        expect(roller.roll(10)).toEqual(1)
    })
    it('returns a ten as a d10s highest value', () => {
        mockMaxValue()
        expect(roller.roll(10)).toEqual(10)
    })
    it('returns a one as a d12s lowest value', () => {
        mockMinValue()
        expect(roller.roll(12)).toEqual(1)
    })
    it('returns a twelve as a d12s highest value', () => {
        mockMaxValue()
        expect(roller.roll(12)).toEqual(12)
    })
    it('returns a one as a d100s lowest value', () => {
        mockMinValue()
        expect(roller.roll(100)).toEqual(1)
    })
    it('returns a one-hundred as a d100s highest value', () => {
        mockMaxValue()
        expect(roller.roll(100)).toEqual(100)
    })
})

describe('cannot roll improper dice formats', () => {
    it('cannot roll nothing', () => {
        expect(() => {
            roller.roll()
        }).toThrow()
    })
    it('cannot roll a boolean', () => {
        expect(() => {
            roller.roll(false)
        }).toThrow()
        expect(() => {
            roller.roll(true)
        }).toThrow()
    })
})

describe('rolls two d20s using a string', () => {
    const dice = '2d20'
    it('returns an object of rolled dice', () => {
        expect(typeof (roller.roll(dice))).toEqual('object')
    })
    it('returns two rolls when given two dice', () => {
        expect(roller.roll(dice)).toHaveLength(2)
    })
    it('returns both rolls as numbers', () => {
        expect(typeof ((roller.roll(dice))[0])).toBe('number')
        expect(typeof (roller.roll(dice)[1])).toBe('number')
    })
    it('returns two ones as its lowest values', () => {
        mockMinValue()
        expect(roller.roll(dice)).toEqual([1, 1])
    })
    it('returns two twenties as its highest values', () => {
        mockMaxValue()
        expect(roller.roll(dice)).toEqual([20, 20])
    })
})

describe('validates dice string properly', () => {
    it('requires the "d" delineator', () => {
        expect(() => {
            roller.roll('abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890')
        }).toThrow()
        expect(() => {
            roller.roll('`-=[],./~!@#$%^&*()_+{}|:"<>?')
        }).toThrow()
        expect(() => {
            roller.roll('\\\'')
        }).toThrow()
    })
    it('requires a number before the "d"', () => {
        expect(() => {
            roller.roll('d20')
        }).toThrow()
    })
    it('requires a number after the "d"', () => {
        expect(() => {
            roller.roll('20d')
        }).toThrow()
    })
    it('requires exactly one "d" delineator', () => {
        expect(() => {
            roller.roll('d20d20')
        }).toThrow()
    })
    it('requires quantity to be an integer', () => {
        expect(() => {
            roller.roll('twentyd20')
        }).toThrow()
    })
    it('requires number of sides to be an integer', () => {
        expect(() => {
            roller.roll('20dtwenty')
        }).toThrow()
    })
})

describe('rolls dice of multiple types in one command', () => {
    const multidice: object = ['2d4', '5d6', '3d20']
    const numberOfDice: number = 10
    const maxValues: number[] = [4, 4, 6, 6, 6, 6, 6, 20, 20, 20]
    const minValues: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    it('accepts an array of dice', () => {
        expect(() => {
            roller.roll(multidice)
        }).not.toThrow()
    })
    it('does not accept an object', () => {
        expect(() => {
            roller.roll({ name: 'Name', number: 42, })
        }).toThrow()
    })
    it('returns the correct number of dice', () => {
        expect(roller.roll(multidice).length).toEqual(numberOfDice)
    })
    it('returns dice as an array', () => {
        expect(Array.isArray(roller.roll(multidice))).toBe(true)
    })
    it('can return max values for all dice', () => {
        mockMaxValue()
        expect(roller.roll(multidice)).toEqual(maxValues)
    })
    it('can return min values for all dice', () => {
        mockMinValue()
        expect(roller.roll(multidice)).toEqual(minValues)
    })
})


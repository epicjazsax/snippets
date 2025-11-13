// FUNCTION TO ROLL DICE
//
// TODO: rewrite tests and roll 'number' so roll always returns an array
//
// future features include:
// -special readout for certain rolls (ex. nat1/nat20, snakeeyes)??
export class Roller {
    private parse(dice: string): [number, number] {
        if (!dice.includes('d')) {
            throw new Error('missing dice delineator "d"')
        }

        const quantityAndSidesOfDice: string[] = dice.split('d')

        if (quantityAndSidesOfDice.length !== 2) {
            throw new Error('must give only one delineator "d"')
        }
        if (!quantityAndSidesOfDice[0]) {
            throw new Error('must give quantity of dice to roll')
        }
        if (!quantityAndSidesOfDice[1]) {
            throw new Error('must give number of sides on dice to roll')
        }
        if (isNaN(+quantityAndSidesOfDice[0])) {
            throw new Error('quantity must be a number')
        }
        if (isNaN(+quantityAndSidesOfDice[1])) {
            throw new Error('sides must be a number')
        }
        if (Math.floor(+quantityAndSidesOfDice[0]) !== +quantityAndSidesOfDice[0]) {
            throw new Error('quantity must be an integer')
        }
        if (Math.floor(+quantityAndSidesOfDice[1]) !== +quantityAndSidesOfDice[1]) {
            throw new Error('sides must be an integer')
        }

        const quantity = +quantityAndSidesOfDice[0]
        const sides = +quantityAndSidesOfDice[1]

        return [quantity, sides]
    }

    roll(dice: any) {
        if ((typeof (dice)) === 'number') {
            return this.rollSingle(dice)
        }

        if ((typeof (dice)) === 'string') {
            const [quantity, sides] = this.parse(dice)

            let arrayOfRolledDice: number[] = []
            for (let n = 0; n < quantity; n++) {
                arrayOfRolledDice.push(this.rollSingle(sides))
            }
            return arrayOfRolledDice
        }
        if (((typeof (dice)) === 'object') && (Array.isArray(dice))) {
            let arrayOfRolls: number[] = []
            for (let handful of dice) {
                if ((typeof (handful)) !== 'string') {
                    throw new Error('must give each set of dice as string')
                }
                let currentDice = this.roll(handful)
                function isIterable(obj: any): boolean {
                    return typeof obj[Symbol.iterator] === 'function'
                }
                if (!isIterable(currentDice)) {
                    throw new Error('current handful of dice is not iterable')
                }
                arrayOfRolls = arrayOfRolls.concat(currentDice)
            }
            return arrayOfRolls
        }

        throw new Error('argument type not supported')
    }
    private rollSingle(sidesOnDie: number): number {
        if (!Number.isInteger(sidesOnDie)) {
            throw new Error('number of sides on die must be an integer!')
        }
        return Math.floor((Math.random() * sidesOnDie) + 1)
    }
}


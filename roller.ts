// FUNCTION TO ROLL DICE
//
// future features include:
// -roll multiple dice
// -roll dice of multiple varieties
// -special readout for certain rolls (ex. nat1/nat20, snakeeyes)??
export class Roller {
    parse(dice: string): [number, number] {
        if (!dice.includes('d')) {
            throw new Error('missing dice delineator "d"')
        }

        const quantityAndSidesOfDice: string[] = dice.split('d');

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

        const quantity = +quantityAndSidesOfDice[0];
        const sides = +quantityAndSidesOfDice[1];

        return [quantity, sides]
    }

    roll(die: any) {
        if ((typeof (die)) === 'number') {
            return this.rollSingle(die)
        }

        if ((typeof (die)) === 'string') {
            const [quantity, sides] = this.parse(die)

            let arrayOfRolledDice: number[] = [];
            for (let n = 0; n < quantity; n++) {
                arrayOfRolledDice.push(this.rollSingle(sides));
            }
            return arrayOfRolledDice
        }

        throw new Error('argument type not supported')
    }
    rollSingle(sidesOnDie: number): number {
        if (!Number.isInteger(sidesOnDie)) {
            throw new Error('number of sides on die must be an integer!')
        }
        return Math.floor((Math.random() * sidesOnDie) + 1)
    }
};


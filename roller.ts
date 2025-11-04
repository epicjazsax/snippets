// FUNCTION TO ROLL DICE
//
// future features include:
// -roll multiple dice
// -roll dice of multiple varieties
// -special readout for certain rolls (ex. nat1/nat20, snakeeyes)??
export class Roller {
    roll(die: any) {
        if ((typeof (die)) === 'number') {
            if (!Number.isInteger(die)) {
                throw new Error('number must be an integer!')
            }
            return (Math.floor((Math.random() * (die)) + 1))
        }

        if ((typeof (die)) === 'string') {
            if (!die.includes('d')) {
                throw new Error('missing dice delineator "d"')
            }

            const quantityAndSidesOfDice: string[] = die.split('d');

            if (quantityAndSidesOfDice.length !== 2) {
                throw new Error('invalid dice format')
            }
            if (!quantityAndSidesOfDice[0]) {
                throw new Error('must give quantity of dice to roll')
            }
            if (!quantityAndSidesOfDice[1]) {
                throw new Error('must give number of sides of dice to roll')
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
            let arrayOfRolledDice: number[] = [];
            for (let n = 0; n < quantity; n++) {
                arrayOfRolledDice.push(Math.floor((Math.random() * sides) + 1));
            }
            return arrayOfRolledDice
        }

        throw new Error('argument type not supported')
    }
};


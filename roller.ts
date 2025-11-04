// FUNCTION TO ROLL DICE
//
// future features include:
// -roll multiple dice
// -roll dice of multiple varieties
// -special readout for certain rolls (ex. nat1/nat20, snakeeyes)??
export class Roller {
    roll(die: any) {
        if ((typeof (die)) === 'number') {
            if (Number.isInteger(die)) {
                return (Math.floor((Math.random() * (die)) + 1))
            } else {
                throw new Error('number must be an integer!')
            }
        } else if ((typeof (die)) === 'string') {
            if (!die.includes('d')) {
                throw new Error('missing dice delineator "d"')
            }
            const quantityAndSidesOfDice: object = die.split('d');
            const quantity = quantityAndSidesOfDice[0];
            const sides = quantityAndSidesOfDice[1];
            let arrayOfRolledDice: number[];
            for (let n = 0; n < quantity; n++) {
                arrayOfRolledDice = arrayOfRolledDice.push(Math.floor((Math.random() * (die)) + 1));
            }
            return arrayOfRolledDice
        } else {
            throw new Error('argument type not supported')
        }
    }
};


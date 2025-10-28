// FUNCTION TO ROLL DICE
//
// future features include:
// -roll any die
// -roll multiple dice
// -roll dice of multiple varieties
// -special readout for certain rolls (ex. nat1/nat20, snakeeyes)??
export class Roller {
    roll(die: any) {
        if ((typeof (die)) === 'number') {
            if (Number.isInteger(die)) {
                return die
                //return (Math.floor((Math.random() * (die)) + 1))
            } else {
                throw new Error('number must be an integer!')
            }
        } else {
            throw new Error('argument type not supported')
        }
    }
    //	if (die) {
    //		return 2
    //	} throw new MissingArgumentError('must specify a die to roll!');
};


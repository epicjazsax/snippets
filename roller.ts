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
                return 2
            } else {
                throw new Error
            }
        } else {
            throw new Error
        }
    }
    //	if (die) {
    //		return 2
    //	} throw new MissingArgumentError('must specify a die to roll!');
};


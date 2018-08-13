// exports to checkingSpace.js

import knightSpaces from '/knightSpaces.js';
import onBoard from '/onBoard.js';

export function knightAttacks(knight) {

	function attacks(id) {
		if (id === checkSpaceId) { return id; }
	}
	
	if (knightSpaces(knight).filter(onBoardNonActiveIds).filter(attacks).length) {
		return true; 
	}
} // returns true/false if knight can attack checkSpaceId

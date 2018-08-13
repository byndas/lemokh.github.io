// exports to checkingSpace.js

import bishopAttacks from '/bishopAttacks.js';
import rookAttacks from '/rookAttacks.js';

export function queenAttacks(queen) {
    
	if (bishopAttacks(queen, checkSpaceId)) { return true; }
	if (rookAttacks(queen, checkSpaceId)) { return true; }
	return false;
} // returns true/false if queen can attack checkSpaceId

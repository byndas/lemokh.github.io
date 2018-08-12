import pawnLit from 'pawnLit';
import knightLit from 'knightLit';
import bishopLit from 'bishopLit';
import rookLit from 'rookLit';
import kingLit from 'kingLit';

export function possibleMoves() {
	console.log('ENTERS possibleMoves()');
	// populates litIds with piece's possible moves
	switch (pieceToMove.dataset.name) {
		case 'pawn':    pawnLit();				break;
		case 'knight':  knightLit();			break;
		case 'bishop':  bishopLit();            break;
		case 'rook':    rookLit();              break;
		case 'queen':   bishopLit(); rookLit(); break;
		case 'king':    kingLit();              break;
		// default: alert('default ERROR! pieceToMove is empty');
	}
}
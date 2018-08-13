import wherePieceCanMove from "/js/wherePieceCanMove.js";

var kingAttackers=[], greyLitPieces=[], kingLitIds=[], pathOfCheck=[],
	canBlockPathOfCheck=[], canEatKingAttacker=[], castleIds=[],
	orangeTakenBoxIdCounter = -16, blueTakenBoxIdCounter = -1, nails,
	enPassanting = false, pins, kingInCheck, stuckActivePieces, litIds, 
	checkSpaceId, pinnedLitIds, behindKingId, pawnBlocksKingAttacker,
	kingStuck, newPieceClicked, pinnerPiece, greyPieceToMove, noCastle,
	blocker, passiveSideCoversId, checkPath, blueKingFirstMove, 
	blueRook1FirstMove, activeKing, blueRook2FirstMove, pieceToMove, 
	orangeKingFirstMove, orangeRook1FirstMove, orangeRook2FirstMove, 
	goToDiv, enPassantDiv, pawnJumpDiv,index1, index2, pinnedPieces, 
	moves, bishopMoves, bishopX, bishopY, openAndOpponentHeldKingSpaces,
	rookMoves, kingSpaces;

const board = document.getElementById('board');

var blueNodes = board.querySelectorAll("[data-side='blue']"),
	orangeNodes = board.querySelectorAll("[data-side='orange']"),

	blues = Array.from(blueNodes),
	oranges = Array.from(orangeNodes),

	activeSide = blues,
	passiveSide = oranges,

	///////////////////////////

	userInput = 10,
	obj,
	runTimer,
	clock1,
	clock2,
	blueTime = {
		minutes: userInput,
		tenths: 0,
		hundredths: 0 
	},
	orangeTime = {
		minutes: userInput,
		tenths: 0,
		hundredths: 0 
	};

function setTimer() { // unnecessary?
	document.getElementById('start')
			.addEventListener('click', getMinutes);
}

function startClock() { runTimer = setInterval(countDown, 1000); };

function countDown() {

	obj.hundredths -= 1;
	
	if ( obj.hundredths < 0 ) {
		obj.tenths -= 1;
		obj.hundredths = 9;
	}
	if ( obj.tenths < 0 ) {
			obj.minutes -= 1;
			obj.tenths = 5;
	}
	if ( obj.minutes < 0 ) { return resign(); }

	clockToUpdate.innerHTML =  
		obj.minutes + ':' + obj.tenths + obj.hundredths;
}

function toggleClocks() {

	clearInterval(runTimer);
	
	if (activeSide[0].dataset.side === 'blue') {	
		obj = blueTime;
		clockToUpdate = clock1;
	}
	else { 
		obj = orangeTime;
		clockToUpdate = clock2;
	}
	startClock();
}

////////////////////////////////////////////////////////////

function resign() {
	clearInterval(runTimer);
	board.classList.add('noClick');
	
	activeSide.forEach(activePiece => {
		activePiece.removeEventListener('click', wherePieceCanMove);
	});
	
	alert(activeKing.dataset.side + " resigns");
	console.log('END OF GAME');
}

////////////////////////////////////////////////////////////

function draw() {
	clearInterval(runTimer);
	alert("Game ends in a draw");
	return;
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

window.onload = function () {
	document.getElementById('start').addEventListener('click', function getMinutes() {
	timerSet = document.getElementById('timeSet').value;	
		if (timerSet) {
			if (timerSet > 0) {
				if (timerSet < 1000) {	
					if (!timerSet.includes('.'))
						if (!timerSet.includes('e')) {
					
						userInput = +(timerSet);
						
						clock1 = document.getElementById('time1');
						clock1.innerHTML = userInput+':00';
						
						clock2 = document.getElementById('time2');
						clock2.innerHTML = userInput+':00';

						blueTime = {
							minutes: userInput,
							tenths: 0,
							hundredths: 0 
						};
						
						orangeTime = {
							minutes: userInput,
							tenths: 0,
							hundredths: 0 
						};

						document.getElementById('modal').style.display = "none";
						
						function showTimers(timer) {
							timer.style.visibility = "visible";
							timer.style.opacity = '1';
							timer.style.transform = 'scale(1.0)';
							timer.style.transition = 'visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s';
						}

						showTimers(document.getElementById('time1'));
						showTimers(document.getElementById('time2'));
						
						lit();
					}
				}
			}
		}
	});
}
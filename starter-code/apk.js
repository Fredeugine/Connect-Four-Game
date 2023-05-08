const followMarker = document.querySelector('.followMarker')
const container = document.querySelector('.boardContainer')
const invisibleDivs = document.querySelectorAll('.invisibleBoardDivs')
const counter = document.querySelector('.counter')
const CountDown = document.querySelector(".timerCountDown");
const bottomCounterDiv = document.querySelector('.markerRed')
const whoseTurnText = document.querySelector('.whoseTurnText')
const PlyrvsPlyrBtn = document.querySelector('#plp')
const frontPage = document.querySelector('.frontPage')
const PvPGamePage = document.querySelector('.cleanStatePage')
const rulesPage = document.querySelector('.rulesPage')
const gameRules = document.querySelector('.gameRules')
const tickedSvg = document.querySelector('.tickedSvg')
const menuBtn = document.querySelector('.menu')
const menuPage = document.querySelector('.menuPage')
const bottom_bar = document.querySelector('#bottom_bar')
const pp1 = document.querySelector('.pp1')
const whoseTurnDetails = document.querySelector('.whoseTurnDetails')
const continueBtn = document.querySelector('#menuIns')
const quitBtn = document.querySelector('#quitGame')
const playAgain = document.querySelector('#playAgain')
const restartBtn = document.querySelector('.restart')
const restart2 = document.querySelector('#restart2')


PlyrvsPlyrBtn.addEventListener('click', function () {

	var startGame = confirm("Welcome to the Connect Four Game. Press 'OK' to start.");

	if (startGame) {
		frontPage.style.display = 'none';
		PvPGamePage.style.display = 'flex'
		PvPGamePage.style.setProperty('transition', 'opacity 0.5s ease-in-out')
		countDown()
	} else {

	}
})

gameRules.addEventListener('click', function () {
	frontPage.style.display = 'none';
	rulesPage.style.display = 'flex'
})
tickedSvg.addEventListener('click', function () {
	rulesPage.style.display = 'none';
	frontPage.style.display = 'flex';
})
menuBtn.addEventListener('click', function () {
	menuPage.style.display = 'flex'
	PvPGamePage.style.setProperty('opacity', '50%');
})
continueBtn.addEventListener('click', function () {
	menuPage.style.display = 'none';
	PvPGamePage.style.removeProperty('opacity');
})
quitBtn.addEventListener('click', function () {
	PvPGamePage.style.display = 'none'
	frontPage.style.display = 'flex';
	menuPage.style.display = 'none';
	PvPGamePage.style.removeProperty('opacity');
})


function moveMarker(mouse) {
	const rect = container.getBoundingClientRect();
	const xAxis = mouse.clientX - rect.left;
	if (mouse.clientX >= rect.left && xAxis < rect.width - 40) {
		followMarker.style.transform = `translatex(${xAxis}px`;
	}
}

container.addEventListener('mousemove', moveMarker);
const clickCounts = [0, 0, 0, 0, 0, 0, 0];
const div1CounterPositions = [455, 455, 455, 455, 455, 455, 455];
const board = [
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null]
];

var tile = [5, 5, 5, 5, 5, 5, 5]


function checkHorizontal(board) {
	var win = 0
	var win2 = 0
	for (var arr = 0; arr < board.length; arr++) {
		for (var i = 0; i < board[arr].length; i++) {
			if (board[arr][i] === 'x') {
				win++
			} else {
				win = 0
			}
			if (board[arr][i] === 'y') {
				win2++
			} else {
				win2 = 0
			}
			if ((win === 4 || win2 === 4) && whoseTurn === 0) {
				console.log("Horizontal win!");
				bottom_bar.style.display = 'flex';
				bottomCounterDiv.style.display = 'none'
				whoseTurnDetails.style.display = 'none'
				pp1.innerText = 'PLAYER 2'
				container.removeEventListener('mousemove', moveMarker);
				

			}
			if ((win === 4 || win2 === 4) && whoseTurn === 1) {
				console.log("Horizontal win!");
				bottom_bar.style.display = 'flex';
				bottomCounterDiv.style.display = 'none'
				whoseTurnDetails.style.display = 'none'
				
				
			}
		}
	}

	for (var i = 0; i <= 6; i++) {
		for (var arr = 0; arr < board.length; arr++) {
			if (board[arr][i] === 'x') {
				win++
			} else {
				win = 0
			}
			if (board[arr][i] === 'y') {
				win2++
			} else {
				win2 = 0
			}
			if ((win === 4 || win2 === 4) && whoseTurn === 0) {
				console.log("vertical win!");
				bottom_bar.style.display = 'flex';
				bottomCounterDiv.style.display = 'none'
				pp1.innerText = 'PLAYER 2'
				whoseTurnDetails.style.display = 'none'
				container.removeEventListener('mousemove', moveMarker);

			}
			if ((win === 4 || win2 === 4) && whoseTurn === 1) {
				console.log("Vertical win!");
				bottom_bar.style.display = 'flex';
				bottomCounterDiv.style.display = 'none'
				whoseTurnDetails.style.display = 'none'
				container.removeEventListener('mousemove', moveMarker);

			}
		}
	}


// Check for diagonal wins (left to right)
	for (var row = 0; row <= 2; row++) {
		for (var col = 0; col <= 3; col++) {
			swin = 0
			swin2 = 0
			for (var i = 0; i < 4; i++) {
				if (board[row + i][col + i] === 'x') {
					swin++
				} else {
					swin = 0
				}
				if (board[row + i][col + i] === 'y') {
					swin2++
				} else {
					swin2 = 0
				}
				if ((swin === 4 || swin2 === 4) && whoseTurn === 0) {
					bottom_bar.style.display = 'flex';
					bottomCounterDiv.style.display = 'none'
					whoseTurnDetails.style.display = 'none'
					pp1.innerText = 'PLAYER 2'
					container.removeEventListener('mousemove', moveMarker);
					return console.log("Diagonal win!")
				}
				if ((swin === 4 || swin2 === 4) && whoseTurn === 1) {
					bottom_bar.style.display = 'flex';
					bottomCounterDiv.style.display = 'none'
					whoseTurnDetails.style.display = 'none'
					container.removeEventListener('mousemove', moveMarker);
					return console.log("Diagonal win!")
				}
			}
		}
	}

// Check for diagonal wins (right to left)
	for (var row = 0; row <= 2; row++) {
		for (var col = 3; col <= 6; col++) {
			dwin = 0
			dwin2 = 0
			for (var i = 0; i < 4; i++) {
				if (board[row + i][col - i] === 'x') {
					dwin++
				} else {
					dwin = 0
				}
				if (board[row + i][col - i] === 'y') {
					win2++
				} else {
					dwin2 = 0
				}
				if ((swin === 4 || swin2 === 4) && whoseTurn === 0) {
					bottom_bar.style.display = 'flex';
					bottomCounterDiv.style.display = 'none'
					whoseTurnDetails.style.display = 'none'
					pp1.innerText = 'PLAYER 2'
					container.removeEventListener('mousemove', moveMarker);
					return console.log("Diagonal win!")
				}
				if ((swin === 4 || swin2 === 4) && whoseTurn === 1) {
					bottom_bar.style.display = 'flex';
					
					bottomCounterDiv.style.display = 'none'
					whoseTurnDetails.style.display = 'none'
					container.removeEventListener('mousemove', moveMarker);
					return console.log("Diagonal win!")
				}
			}
		}
	}


}


var newCounter

function invisible() {
	invisibleDivs.forEach(function (div, index) {
		div.addEventListener('click', function handleClicks() {

			
			if (clickCounts[index] < 6) {
				clickCounts[index]++;
				if (whoseTurn === 0) {
					board[tile[index]][index] = 'y';
					tile[index]--;
				} else {
					board[tile[index]][index] = 'x';
					tile[index]--;
				}

				 newCounter = counter.cloneNode();
				newCounter.style.setProperty('transition', 'transform 700ms ease-in-out');
				newCounter.style.visibility = 'visible';
				container.appendChild(newCounter);
				newCounter.style.transform = `translatex(${(index * 87.9)}px)`;
				checkHorizontal(board)
				setTimeout(function () {
					newCounter.style.transform = `translate(${(index * 87.9)}px, ${div1CounterPositions[index]}px)`;
					div1CounterPositions[index] -= 88;
				}, 100);
				clearInterval(a);
				playerTurn()

			}
		});
	});
}

var whoseTurn = 1

function playerTurn() {

	if (whoseTurn === 0) {
		whoseTurn++
		followMarker.src = 'assets/images/marker-red.svg';
		bottomCounterDiv.src = '/starter-code/assets/images/turn-background-red.svg';
		counter.src = 'assets/images/counter-red-large.svg';
		counter.class = 'counter'
		whoseTurnText.innerText = "PLAYER 1'S TURN"
		countDown()
	} else {
		whoseTurn--
		followMarker.src = 'assets/images/marker-yellow.svg';
		bottomCounterDiv.src = 'assets/images/turn-background-yellow.svg';
		counter.src = 'assets/images/counter-yellow-large.svg';
		counter.class = 'counter'
		whoseTurnText.innerText = "PLAYER 2'S TURN"
		countDown()
	}
}



invisible();
var a;
//Countdown
function countDown() {
	var count = 5;
	
	 a = setInterval(function good() {
		count--;
		CountDown.innerHTML = count + 's';
		if (count === 0) {
			clearInterval(a);
			playerTurn()
		}
	}, 1000);

}

const newCounters = document.querySelectorAll('.newCounter')
playAgain.addEventListener('click', function () {
	location.reload()
	
})
restartBtn.addEventListener('click', function () {
	location.reload()
})
restart2.addEventListener('click', function () {
	location.reload()
})






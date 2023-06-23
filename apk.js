const followMarker = document.querySelector('.followMarker')
const container = document.querySelector('.boardContainer')
const invincibleDivs = document.querySelectorAll('.invisibleBoardDivs')
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
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score11')
const PvsCpu = document.querySelector('#plp2')


function PLP() {
	var startGame = confirm("Welcome to the Connect Four Game. Press 'OK' to start.");

	if (startGame) {
		frontPage.style.display = 'none';
		PvPGamePage.style.display = 'flex'
		PvPGamePage.style.setProperty('transition', 'opacity 0.5s ease-in-out')
		countDown()
	} else {

	}
	btnCpu = false
}
function CPU(){
	PLP()
	btnCpu = true
}
PlyrvsPlyrBtn.addEventListener('click',PLP)
PvsCpu.addEventListener('click',CPU)

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

var containerRect;
function moveMarker(mouse) {
	containerRect = container.getBoundingClientRect();
	const xAxis = mouse.clientX - containerRect.left;
	if (mouse.clientX >= containerRect.left && xAxis < containerRect.width - 40) {
		followMarker.style.transform = `translatex(${xAxis}px`;
	}
	console.log(containerRect.left)
}


container.addEventListener('mousemove', moveMarker);
var clickCounts = [0, 0, 0, 0, 0, 0, 0];
var div1CounterPositions = [455, 455, 455, 455, 455, 455, 455];

var board = [
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null]
];

var tile = [5, 5, 5, 5, 5, 5, 5]

function disableClicks(){
    clickCounts = [10, 10,10, 10, 10, 10, 10];
	 board = [
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null]
	];
	enableCountdown = false
	 
}
function checkHorizontal(board) {
	var win = 0
	var win2 = 0
	for (let arr = 0; arr < board.length; arr++) {
		for (let i = 0; i < board[arr].length; i++) {
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
				win2 = 0
				win = 0
				console.log("Horizontal win!");
				bottom_bar.style.display = 'flex';
				bottomCounterDiv.style.display = 'none'
				whoseTurnDetails.style.display = 'none'
				pp1.innerText = 'PLAYER 2'
				container.removeEventListener('mousemove', moveMarker);
				disableClicks()
			}
			if ((win === 4 || win2 === 4) && whoseTurn === 1) {
				console.log("Horizontal win!");
				bottom_bar.style.display = 'flex';
				bottomCounterDiv.style.display = 'none'
				whoseTurnDetails.style.display = 'none'
				container.removeEventListener('mousemove', moveMarker);
				pp1.innerText = 'PLAYER 1'
				disableClicks()
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
				disableClicks()

			}
			if ((win === 4 || win2 === 4) && whoseTurn === 1) {
				console.log("Vertical win!");
				bottom_bar.style.display = 'flex';
				bottomCounterDiv.style.display = 'none'
				whoseTurnDetails.style.display = 'none'
				pp1.innerText = 'PLAYER 1'
				container.removeEventListener('mousemove', moveMarker);
				disableClicks()

			}
		}
	}

// Check for diagonal wins (left to right)
	for (let row = 0; row <= 2; row++) {
		for (let col = 0; col <= 3; col++) {
			swin = 0
			swin2 = 0
			for (let i = 0; i < 4; i++) {
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
					disableClicks()
					return console.log("Diagonal win!")
				}
				if ((swin2 === 4 || swin2 === 4) && whoseTurn === 1) {
					bottom_bar.style.display = 'flex';
					bottomCounterDiv.style.display = 'none'
					whoseTurnDetails.style.display = 'none'
					pp1.innerText = 'PLAYER 1'
					container.removeEventListener('mousemove', moveMarker);
					disableClicks()
					return console.log("Diagonal win!")

					
				}
			}
		}
	}

// Check for diagonal wins (right to left)
	for (let row = 0; row <= 2; row++) {
		for (let col = 3; col <= 6; col++) {
			dwin = 0
			dwin2 = 0
			for (let i = 0; i < 4; i++) {
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
				if ((dwin === 4 || dwin2 === 4) && whoseTurn === 0) {
					bottom_bar.style.display = 'flex';
					bottomCounterDiv.style.display = 'none'
					whoseTurnDetails.style.display = 'none'
					pp1.innerText = 'PLAYER 2'
					container.removeEventListener('mousemove', moveMarker);
					return console.log("Diagonal win!")
				}
				if ((dwin === 4 || dwin2 === 4) && whoseTurn === 1) {
					bottom_bar.style.display = 'flex';
					bottomCounterDiv.style.display = 'none'
					whoseTurnDetails.style.display = 'none'
					pp1.innerText = 'PLAYER 1'
					container.removeEventListener('mousemove', moveMarker);
					return console.log("Diagonal win!")
				}
			}
		}
	}
}

var newCounter;
var newCounterArr = []
var div1CounterPositions2 = [345, 345, 345, 345, 345, 345, 345];

function invincible() {
	invincibleDivs.forEach(function (div, index) {
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
				newCounterArr.push(newCounter)
				newCounter.style.setProperty('transition', 'transform 700ms ease-in-out');
				newCounter.style.visibility = 'visible';
				container.appendChild(newCounter);

				if (window.innerWidth < 700) {
					newCounter.style.transform = `translatex(${(index * 65)}px)`;
				} else {
					newCounter.style.transform = `translatex(${(index * 87.9)}px)`;
				}

				checkHorizontal(board)
				setTimeout(function () {
					if (window.innerWidth < 700) {
						newCounter.style.transform = `translate(${(index * 65)}px, ${div1CounterPositions2[index]}px)`;
						div1CounterPositions2[index] -= 68;
					} else {
						newCounter.style.transform = `translate(${(index * 87.9)}px, ${div1CounterPositions[index]}px)`;
						div1CounterPositions[index] -= 88;
					}
				}, 100);
				clearInterval(a);
				playerTurn()
			}
		});
	});
}


// var otherArr;
// window.addEventListener('resize',function (){
// 	newCounterArr.forEach(function (counts,index){
// 		div1CounterPositions2 = [345, 345, 345, 345, 345, 345, 345];
// 		if (window.innerWidth <= 700) {
// 			counts.style.transform = `translate(${(index * 65)}px, ${div1CounterPositions2[index]}px)`;
// 		}
// 	})
// })
//
//
// otherArr = newCounterArr.map(function (all){
// 	return all
// })
//
// window.addEventListener('resize',function (){
// 	otherArr.forEach(function (counts,index){
// 		if (window.innerWidth > 700){
// 			div1CounterPositions = [455, 455, 455, 455, 455, 455, 455];
// 			counts.style.transform = `translate(${(index * 87.9)}px, ${div1CounterPositions[index]}px)`;
// 		}
// 	})
//
// })







// check for window resize and reposition counters

var whoseTurn = 1

function playerTurn() {

	if (whoseTurn === 0) {
		whoseTurn++
		followMarker.src = 'starter-code/assets/images/marker-red.svg';
		bottomCounterDiv.src = 'starter-code/assets/images/turn-background-red.svg';
		counter.src = 'starter-code/assets/images/counter-red-large.svg';
		counter.class = 'counter'
		whoseTurnText.innerText = "PLAYER 1'S TURN"
		countDown()
		if(btnCpu){
			clickCounts = [0, 0, 0, 0, 0, 0, 0];
		}
		
	} else {
		whoseTurn--
		followMarker.src = 'starter-code/assets/images/marker-yellow.svg';
		bottomCounterDiv.src = 'starter-code/assets/images/turn-background-yellow.svg';
		counter.src = 'starter-code/assets/images/counter-yellow-large.svg';
		counter.class = 'counter'
		whoseTurnText.innerText = "PLAYER 2'S TURN"
		countDown()
		if(btnCpu){
			clickCounts = [10, 10, 10, 10, 10, 10, 10];
		}
		if (enableCountdown){setTimeout(PlayWithCpu,1000)}
	}
}




invincible();
var enableCountdown = true
var a;
var count;
//Countdown
function countDown() {
	count = 15;
	if (enableCountdown){
	 a = setInterval(function good() {
		count--;
		CountDown.innerHTML = count + 's';
		if (count === 0) {
			clearInterval(a);
			playerTurn()
		}
	}, 1000);
	}

}

playAgain.addEventListener('click', function () {
	removeCounters()
	updateScore()
	clickCounts = [0, 0, 0, 0, 0, 0, 0];
	count = 15
	enableCountdown = true
})
restartBtn.addEventListener('click', function () {
	removeCounters()
	count = 15
	enableCountdown = true
})
restart2.addEventListener('click', function () {
	menuPage.style.display = 'none';
	PvPGamePage.style.removeProperty('opacity');
	removeCounters()
})
function removeCounters(){
	for (let i = 0; i < newCounterArr.length; i++) {
		newCounterArr[i].parentNode.removeChild(newCounterArr[i]);
	}
	newCounterArr.length = 0
	container.addEventListener('mousemove', moveMarker);
	clickCounts = [0, 0, 0, 0, 0, 0, 0];
	div1CounterPositions = [455, 455, 455, 455, 455, 455, 455];
	tile = [5, 5, 5, 5, 5, 5, 5]
	board = [
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null]
	];
	bottom_bar.style.display = 'none';
	bottomCounterDiv.style.display = 'flex'
	whoseTurnDetails.style.display = 'flex'
}
var scoreNum1 = 1
var scoreNum2 = 1
function updateScore(){
	if (pp1.innerHTML === 'PLAYER 2'){
		score2.innerHTML = `${scoreNum1}`
		scoreNum1++
	}
	else {
		score1.innerHTML = `${scoreNum2}`
		scoreNum2++
	}
}

// Get the boxes inside the container

// Function to simulate a click on a random box
var btnCpu = true;
function PlayWithCpu() {
	if (btnCpu) {
		clickCounts = [0, 0, 0, 0, 0, 0, 0];
		// Get a random div
		const invincibleDivIndex = Math.floor(Math.random() * invincibleDivs.length);
		const randomDiv = invincibleDivs[invincibleDivIndex];

		// Get the bounding rectangle of the random box
		const invincibleDivRect = randomDiv.getBoundingClientRect();

		// Calculate the coordinates of the center of the random box relative to the container
		const x = invincibleDivRect.left + invincibleDivRect.width / 2 - containerRect.left;
		const y = invincibleDivRect.top + invincibleDivRect.height / 2 - containerRect.top;

		// Create a new click event
		const clickEvent = new MouseEvent("click", {
			view: window,
			bubbles: true,
			cancelable: true,
			clientX: x,
			clientY: y,
		});

		// Dispatch the click event on the random box
		randomDiv.dispatchEvent(clickEvent);
	}
}







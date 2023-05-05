const followMarker = document.querySelector('.followMarker')
const container = document.querySelector('.boardContainer')
const invisibleDivs = document.querySelectorAll('.invisibleBoardDivs')
const counter = document.querySelector('.counter')
const CountDown = document.querySelector(".timerCountDown");
const bottomCounterDiv = document.querySelector('.markerRed')
const whoseTurnText = document.querySelector('.whoseTurnText')
var lastxAxis = 0
var lastyAxis = 0

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

function invisible() {
  invisibleDivs.forEach(function(div, index) {
    div.addEventListener('click', function() {
      if (clickCounts[index] < 6) {
        clickCounts[index]++;

        const newCounter = counter.cloneNode();
        newCounter.style.setProperty('transition', 'transform 700ms ease-in-out');
        newCounter.style.visibility = 'visible';
        container.appendChild(newCounter);
        newCounter.style.transform = `translatex(${(index * 87.9)}px)`;

        setTimeout(function() {
          newCounter.style.transform = `translate(${(index * 87.9)}px, ${div1CounterPositions[index]}px)`;
          div1CounterPositions[index] -= 88;
        }, 100);
       
      }
    });
  });
}
var whoseTurn = 1
function playerTurn() {
	
	if (whoseTurn === 0){
		whoseTurn++
		followMarker.src = '/starter-code/assets/images/marker-red.svg';
		bottomCounterDiv.src = '/starter-code/assets/images/turn-background-red.svg';
		counter.src = '/starter-code/assets/images/counter-red-large.svg';
		counter.class = 'counter'
		whoseTurnText.innerText = "PLAYER 1'S TURN"
		countDown()
	}
	else{
		whoseTurn--
		followMarker.src = '/starter-code/assets/images/marker-yellow.svg';
		bottomCounterDiv.src = '/starter-code/assets/images/turn-background-yellow.svg';
		counter.src = '/starter-code/assets/images/counter-yellow-large.svg';
		counter.class = 'counter'
		whoseTurnText.innerText = "PLAYER 2'S TURN"
		countDown()
	}
}


invisible();
//Countdown
function countDown() {
  var count = 15;
  const a = setInterval(function good() {
    count--;
     CountDown.innerHTML = count + 's';
    if (count == 0) {
      clearInterval(a);
      playerTurn()
    }
  }, 1000);
  
}
countDown()






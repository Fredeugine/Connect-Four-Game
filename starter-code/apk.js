const followMarker = document.querySelector('.followMarker')
const container = document.querySelector('.boardContainer')
const invisibleDivs = document.querySelectorAll('.invisibleBoardDivs')
const counter = document.querySelector('.counter')
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
var clickCount = 0
var clickCount2 = 0
var div1CounterPosition = 455
var div1CounterPosition2 = 455


function invisible() {
  invisibleDivs.forEach(function(div, index) {
    div.addEventListener('click', function() {
    	if (index === 0) {
     	 if (clickCount < 6) {   
         clickCount++;
         container.removeEventListener('mousemove', moveMarker);
          
         followMarker.style.transform = 'translatex(35px)';
         const newCounter = counter.cloneNode();
         newCounter.style.setProperty('transition', 'transform 700ms ease-in-out');
         newCounter.style.visibility = 'visible';
         container.appendChild(newCounter); 
          
         setTimeout(function(){
          newCounter.style.transform = `translatey(${div1CounterPosition}px)`;
          div1CounterPosition -= 88;
         },100)
       }
      }
      
      
      if (index === 1) {
      	if (clickCount2 < 6) {
      		clickCount2++;
      		container.removeEventListener('mousemove', moveMarker);
      
      		followMarker.style.transform = 'translatex(124px)';
      		const newCounter = counter.cloneNode();
      		newCounter.style.setProperty('transition', 'transform 700ms ease-in-out');
      		newCounter.style.visibility = 'visible';
      		container.appendChild(newCounter);
      		newCounter.style.transform = `translatex(90px)`
      		setTimeout(function() {
      			newCounter.style.transform = `translate(90px, ${div1CounterPosition2}px)`;
      			div1CounterPosition2 -= 88;
      		}, 100)
      	}
      }
    });
  });
}

invisible();












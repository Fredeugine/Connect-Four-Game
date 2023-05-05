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

	invisibleDivs.forEach(function(div, index) {
		div.addEventListener('click',function(){
			if(index === 0){
				 container.removeEventListener('mousemove',moveMarker)
				followMarker.style.transform = 'translatex(35px)';
				counter.style.transform ='translatey(455px)'
			}
	})
	})


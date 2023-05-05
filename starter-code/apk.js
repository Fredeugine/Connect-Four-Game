const followMarker = document.querySelector('.followMarker')
const container = document.querySelector('.boardContainer')
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

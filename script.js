// this is my first javascript project

function digitalClock(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let amOrPm = 'AM';
	
	if(hours > 12){
		hours = hours - 12;
		amOrPm = 'PM';
	}
	
	if(hours < 10){
		hours = '0' + hours;
	}
	
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	
	let finalTime = `${hours} : ${minutes} : ${seconds}  ${amOrPm}`;
	
	document.getElementById('clock').innerHTML = finalTime;
	
	setInterval(digitalClock, 1000);
}
digitalClock();
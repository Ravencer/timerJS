function countTimer(deadline, interval) {
	const timerHours = document.querySelector('#timer-hours'),
		timerMinutes = document.querySelector('#timer-minutes'),
		timerSeconds = document.querySelector('#timer-seconds');


	function getTimeRemaining() {
		const dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeRemaining % 60),
			minutes = Math.floor((timeRemaining / 60) % 60),
			hours = Math.floor(timeRemaining  / 60 / 60);
		return {
			hours,
			minutes,
			seconds
		};
	}
	function updateClock() {
		const timer = getTimeRemaining();
		if (timer.seconds >= 0) {
			timerHours.textContent = ('0' + timer.hours).slice(-2);
			timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
			timerSeconds.textContent = ('0' + timer.seconds).slice(-2);
		} else {
			timerHours.textContent = '00';
			timerHours.style.color = 'red';
			timerMinutes.textContent = '00';
			timerSeconds.style.color = 'red';
			timerSeconds.textContent = '00';
			timerMinutes.style.color = 'red';
			clearInterval(interval);
		}
	}
	updateClock();
}

export default countTimer;

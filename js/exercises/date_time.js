// 2- Reloj Digital y Alarma
export function digitalClock() {
	const startBtn = document.getElementById('start-watch');
	const stopBtn = document.getElementById('stop-watch');
	const clock = document.getElementById('clock');
	let timer;
	startBtn.addEventListener('click', () => {
		timer = setInterval(() => {
			const now = new Date();
			clock.innerHTML = now.toLocaleString();
		}, 1000);
		startBtn.disabled = true;
		stopBtn.disabled = false;
		clock.style.padding = '5px';
	});
	stopBtn.addEventListener('click', () => {
		clearInterval(timer);
		clock.innerHTML = null;
		startBtn.disabled = false;
		stopBtn.disabled = true;
		clock.style.padding = 0;
	});
}
export function alarm(sound, startBtn, stopBtn) {
	const $alarmHTML = document.createElement('audio');
	/* o tambien-> "http://soundbible.com/mp3/Loud_Alarm_Clock_Buzzer-Muk1984-493547174.mp3" */
	$alarmHTML.src = sound;
	document.addEventListener('click', (e) => {
		if (e.target.matches(startBtn) || e.target.matches(`${startBtn} *`)) {
			$alarmHTML.play();
			document.querySelector(startBtn).disabled = true;
			document.querySelector(stopBtn).disabled = false;
		}
		if (e.target.matches(stopBtn) || e.target.matches(`${stopBtn} *`)) {
			$alarmHTML.pause();
			$alarmHTML.currentTime = 0;
			document.querySelector(startBtn).disabled = false;
			document.querySelector(stopBtn).disabled = true;
		}
	});
}

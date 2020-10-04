// 4-cuenta regresiva
const tiempo = Math.floor((Math.random() + 1) * 2); // para que no me de un menor menor a 1
let tiempoLimite = tiempo * 60; // lo pase a segundos/minutos
let minutes;
let seconds;
let cronometrooo;
export function endOfTheWorld(countdownText, finalMessage) {
	const countdownAlgorithm = () => {
		minutes = `${Math.floor(tiempoLimite / 60)}`; // pasi los segundos a minutos
		seconds = `${Math.floor(tiempoLimite % 60)}`; // a segundos
		// agrego un cero(0) si es menor a 9
		if (seconds < 10) {
			seconds = `0${seconds}`;
		}
		// agrego un cero(0) si es menor a 9
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}
		const $countdownEl = document.querySelector(countdownText);
		$countdownEl.innerHTML = `${minutes}m:${seconds}s`;
		if (tiempoLimite === 0) {
			clearInterval(cronometrooo);
			document.querySelector('.end-world__title').innerHTML = null;
			$countdownEl.innerHTML = finalMessage;
		} else {
			tiempoLimite -= 1;
		}
	};
	cronometrooo = setInterval(countdownAlgorithm, 1000);
}

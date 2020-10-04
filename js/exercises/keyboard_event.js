// 3-Eventos del teclado(pelotita)
const $map = document.getElementById('map');
const $ball = document.getElementById('ball');
let posX = 0;
let posY = 0;
function moveBall(direction) {
	if (posX < 560) {
		if (direction === 'right') {
			posX += 15;
		}
	}

	if (posX >= 10) {
		if (direction === 'left') {
			posX -= 15;
		}
	}

	if (posY >= 10) {
		if (direction === 'up') {
			posY -= 15;
		}
	}

	if (posY <= 260) {
		if (direction === 'down') {
			posY += 15;
		}
	}
	$ball.style.position = 'absolute';
	$ball.style.left = `${posX}px`;
	$ball.style.top = `${posY}px`;
}
function moverPelota() {
	document.addEventListener('keydown', (e) => {
		// Ball
		if (e.key === 'ArrowRight') {
			moveBall('right');
		} else if (e.key === 'ArrowLeft') {
			moveBall('left');
		} else if (e.key === 'ArrowUp') {
			moveBall('up');
		} else if (e.key === 'ArrowDown') {
			moveBall('down');
		}
	});
}
export function sun(stage) {
	document.addEventListener('click', (e) => {
		// click en el fuera del mapa,el mapa no tape el header
		$map.style.position = 'static';
		// cuando este usando las flechas para desplazarme en la pagina, la pelotra no me siga lol
		$ball.style.position = 'sticly';
		if (e.target.matches(stage) || e.target.matches(`${stage} *`)) {
			moverPelota();
			$map.style.position = 'relative';
		}
	});
}

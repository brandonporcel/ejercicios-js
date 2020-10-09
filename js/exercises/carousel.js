const d = document;
export function swimming() {
	const $nextBtn = d.getElementById('slider__next-btn');
	const $prevBtn = d.getElementById('slider__prev-btn');
	// nodelist con todos los items
	const $items = d.querySelectorAll('.slider__item');
	// se crea pa que cuando este en la ultima slide,volver a la primera
	// y viceversa(no se por que viceversa)
	// tiene que ser igual a la posicion del item que tenga la clase active
	let contador = 2;
	d.addEventListener('click', (e) => {
		if (e.target === $prevBtn) {
			// para que la etiqueta a no haga lo que tiene  q hacer
			e.preventDefault();
			// cuando haga click para atras,el que se este viendo se va a ocultar
			$items[contador].classList.remove('active');
			// se va a mostrar la anterior
			contador -= 1;
			// importante que este aca,no abajo del add("active")
			// se hace esto porque no hay item que sea menor a 0, el primero es 0 bruh
			if (contador < 0) {
				// ejemp:si tengo 7 items(length=7),tengo 6 posiciones
				// 7-1=6 XD la ultima posicion= ultimo item
				contador = $items.length - 1;
			}
			// se muestra
			$items[contador].classList.add('active');
		}
		if (e.target === $nextBtn) {
			e.preventDefault();
			// oculto la imgaen actual
			$items[contador].classList.remove('active');
			// selecciono la sigiente
			contador += 1;
			// pregutno si estoy en el ultimo item(6)  el length es de 7,por eso resto
			// tambien funcaria de la sig. forma
			// if (contador >= $items.length) {
			if (contador > $items.length - 1) {
				// si es true,vuevlo a la posicion 0,primer item
				contador = 0;
			}
			// y nada mas. dibuje maestro dibuje
			$items[contador].classList.add('active');
		}
	});
}

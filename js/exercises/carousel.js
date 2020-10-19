const d = document;
export function swimming() {
	const $nextBtn = d.getElementById('slider__next-btn');
	const $prevBtn = d.getElementById('slider__prev-btn');
	// nodelist con todos los items
	const $items = d.querySelectorAll('.slider__item');
	// nodelist con los botoncitos para navegar
	const $navItems = d.querySelectorAll('.slider__nav-item');
	// se crea pa que cuando este en la ultima slide,volver a la primera
	// y viceversa(no se por que viceversa)
	// tiene que ser igual a la posicion del item que tenga la clase active
	let contador = 2;
	let contadorNav = 2;
	d.addEventListener('click', (e) => {
		if (e.target.classList.contains('slider__nav-item')) {
			$navItems.forEach((item, index) => {
				if (e.target === item) {
					console.log($items[contador]);
					console.log($items[index]);
					// al actual se lo oculta
					// contador tiene algo interesante,
					$items[contador].classList.remove('active');
					console.log(contador);
					// al q da click se lo muestra
					console.log(index);
					$items[index].classList.add('active');
					console.log(index);
					// al item del nav q le de click,se colorea
					item.classList.add('active');
				} else {
					item.classList.remove('active');
					$items[index].classList.remove('active');
				}
				contador = index;
				contadorNav = index;
			});
		}
		if (e.target === $prevBtn) {
			// para que la etiqueta "a" no haga lo que tiene  q hacer
			e.preventDefault();
			// cuando haga click para atras,el que se este viendo se va a ocultar
			$items[contador].classList.remove('active');
			$navItems[contadorNav].classList.remove('active');
			// se va a mostrar la anterior
			contador -= 1;
			contadorNav -= 1;
			// importante que este aca,no abajo del add("active")
			// se hace esto porque no hay item que sea menor a 0, el primero es 0 bruh
			if (contador < 0 || contadorNav < 0) {
				// ejemp:si tengo 7 items(length=7),tengo 6 posiciones
				// 7-1=6 XD la ultima posicion= ultimo item
				contador = $items.length - 1;
				contadorNav = $navItems.length - 1;
			}
			// se muestra
			$items[contador].classList.add('active');
			$navItems[contadorNav].classList.add('active');
		}
		if (e.target === $nextBtn) {
			e.preventDefault();
			// oculto la imgaen actual
			$items[contador].classList.remove('active');
			$navItems[contadorNav].classList.remove('active');
			// selecciono la sigiente
			contador += 1;
			contadorNav += 1;
			// pregutno si estoy en el ultimo item(6)  el length es de 7,por eso resto
			// tambien funcaria de la sig. forma
			// if (contador >= $items.length) {
			if (contador > $items.length - 1 || contadorNav > $navItems.length - 1) {
				// si es true,vuevlo a la posicion 0,primer item
				contador = 0;
				contadorNav = 0;
			}
			// y nada mas. dibuje maestro dibuje
			$items[contador].classList.add('active');
			$navItems[contadorNav].classList.add('active');
		}

		/* 		$navItems.forEach((item) => {
			if (e.target === item) {
				// $items[contadorNav].classList.remove('active');
				// $items[contador].classList.remove('active');

				// $navItems[contadorNav - 1].classList.add('active');
				// $items[$navItems.length - 1].classList.add('active');
			}
		}); */
	});
}

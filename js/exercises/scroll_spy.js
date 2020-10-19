const d = document;
// los a(enlaces) y las section tienen un data-scroll-spy para que se relacionen
export function iFollowYou() {
	const $secciones = d.querySelectorAll('section[data-scroll-spy]');
	// recibe entradas(entries)-> elems que entran en la visualizacion y son detectados por el intOb
	// f12 entries-> me dan datos. si el el fue intersectado,que es?(section),etc
	const funcionCallback = (entradas) => {
		entradas.forEach((entrada) => {
			// este id es el id del item que se ve.
			// entrada nos deja ver datos del elemenmto que éste llego a detectar,como el target
			// de ahi podemos optener el id.
			const id = entrada.target.getAttribute('id');
			if (entrada.isIntersecting) {
				// encontro algo..
				// al elemento que encontro,tiene ,le doy la clase active
				// al elem que encontro tiene que coincidir con el id declarado arriba
				// q seria el q detecto
				// #explicarComoElOrto is my passion
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
					'active'
				);
			} else {
				// y a los ue no encuentra,les saca el active. corta
				// d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
				// 	'active'
				// );
				// me sale warning en la consola,NO S EPOR QUEEEE LPMADREEEE
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
					'active'
				);
			}
		});
	};
	// recibe una callback y una si quermeos,opciones
	const observador = new IntersectionObserver(funcionCallback, {
		// tiene mas opciones pero esta me sirve mas
		// a partir de la mitad del elemetno lo va a tomar(?)
		// tiene maximos y minimos
		threshold: [0.5, 0.75],
	});
	// a quien va a "vigilar" el observador?
	// el metodo observe recibe el item a asignarme el observador,a cada seccion.
	$secciones.forEach((el) => observador.observe(el));
}

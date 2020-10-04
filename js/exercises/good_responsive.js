// 7-Responsive javascript
const d = document;
const w = window;
export function toyChiquito(id, mediaQueryCSS, mobileContent, desktopContent) {
	// obtengo y detecto la media query a traves de js
	const changeScreenSize = w.matchMedia(mediaQueryCSS);
	// recibe el evento de la media query
	const responsive = (e) => {
		// e.matches me da un valor boolean,se determina si la mediquery se cumple(true).interfazdesktop
		if (e.matches) {
			d.getElementById(id).innerHTML = desktopContent;
		} else {
			d.getElementById(id).innerHTML = mobileContent;
		}
	};
	// revisa la media query,cuando la detecte hacer el cambio de contenido(la funcion)
	// PERO HAY QUE CAMBIAR EL TAMAÑO DEL DOCUMENTO MANUALMANTE Y PARA QUE ESO NO PASE...
	changeScreenSize.addEventListener('change', responsive);
	// tengo que llamar a la funcion para que cargye de una perro
	// y pasarle la variable que tine la info de la mediaquery
	// al cargar el documento va a comprobar la anchura del mismo
	responsive(changeScreenSize);
}

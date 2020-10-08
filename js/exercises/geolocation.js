// 12-> Detección de la Geolocalización
const d = document;

function freakingOutTheNeighborhood(id) {
	const $coordenadas = d.getElementById(id);
	// la funcion getCurrentPosition necesita parametros
	// el de exito(funcion) es obligatorio,opciones(objeto) y error(funcion) son opcionales
	const options = {
		// que el dispositivo haga la mejor lectura posible del coso(localizaicon)
		enableHighAccuracy: true,
		// "tiempo que va esperar la rta para tomar la lectucoordsra"
		timeout: 5000,
		// para que no se guarden los datos en el caché
		maximumAge: 0,
	};
	// position va a ser un objeto
	const success = (position) => {
		const coords = position.coords;
		const latLon = `${position.coords.latitude},${position.coords.longitude}`;

		$coordenadas.innerHTML = `
        <p>Tu posicion actual es</p>	
        <ul>
            <li>latitud: <b>${coords.latitude}</b></li>
            <li>longitud: <b>${coords.longitude}</b></li>
            <li>el margen de error es de unos: <b>${coords.accuracy}</b>metros</li>
        </ul>
        <a href='https://www.google.com/maps/@${latLon},15z' target='_blank' >Ver mapa</a>`;
	};

	const error = (err) => {
		$coordenadas.innerHTML = `<p> ERROR:<br> ${err.code} - ${err.message}<b></b><br> Anda al coso que esta al lado de la barra de direcciones y pone permitir localizacion breoo`;
	};

	navigator.geolocation.getCurrentPosition(success, error, options);
}
export function getGeolocation(btn) {
	const $coordsBtn = d.querySelector(btn);
	$coordsBtn.addEventListener('click', () => {
		freakingOutTheNeighborhood('geolocation');
	});
}

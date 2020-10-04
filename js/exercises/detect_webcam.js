// 11-Deteccion de Webcam. no me funcionaaAyudaaaaa
const d = document;
const n = navigator;
export function iSeeYou(id) {
	const $video = d.getElementById(id);
	// hacer validacion(true) de que el navegador acepte el metodo
	// navigator.mediaDevices.getUserMedia->funcion de codigo nativo.

	if (n.mediaDevices.getUserMedia) {
		// recibe parametros->activar video,audio
		// esta funcion es una promesa
		// metodo then: si la funcion es true,capturar los valores retornados de la funcion
		// metodo catch: capturar el error
		n.mediaDevices
			.getUserMedia({ audio: false, video: true })
			// stream->objeto que tiene las datos del vidio
			.then((stream) => {
				console.log(stream);
				// para que puedad aceptar la url
				$video.srcObject = stream;
				// para que el video no se quede con el primer fotograma
				$video.play();
			})
			.catch((err) => {
				console.log(`sucedio el este error:${err}`);
			});
	}
}

// 10-Deteccion del estado de red
const d = document;
const n = navigator;
const w = window;
// nof unciona meparece
export function areYouThere() {
	const isOnLine = () => {
		const message = d.createElement('h1');
		if (n.onLine) {
			message.innerHTML = 'Conexion Establecidaaaaaa';
			message.classList.add('online');
			console.log('si');
			d.body.insertAdjacentElement('afterbegin', message);
		} else {
			message.innerHTML = 'Conexion Perdidsssssssssssssa';
			message.classList.add('offline');
			console.log('no');
			d.body.insertAdjacentElement('afterbegin', message);
		}
		setTimeout(() => d.body.removeChild(message), 3500);
	};
	w.addEventListener('online', () => isOnLine());
	w.addEventListener('offline', () => isOnLine());
}

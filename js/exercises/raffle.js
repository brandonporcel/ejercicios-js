const d = document;
export function amongUs(
	inputGame,
	addBtn,
	seeImpostorBtn,
	playerList,
	impostorResult
) {
	const $input = d.getElementById(inputGame);
	const $addBtn = d.getElementById(addBtn);
	const $playerList = d.getElementById(playerList);
	const $impostorBtn = d.getElementById(seeImpostorBtn);
	let playerArray = [];
	const $impostorMessage = d.getElementById(impostorResult);
	const addToGame = () => {
		const inputValue = $input.value;
		// cuando toque el boton, no tenga q volver a poner el mouse sobre el input#paja
		$input.focus();
		// verifico que no eswte vacio
		if (inputValue === '' || inputValue.length === 0) {
			alert('No ingresaste nada pibe');
		} else {
			// limpiar el mensaje del impostor
			$impostorMessage.innerHTML = '';
			// pongo los nombres en un array para luego hacer el math.random
			playerArray.push(inputValue);
			// pongo los nombre de la lista ordenada de html
			$playerList.insertAdjacentHTML('beforeend', `<li>${inputValue}</li>`);
			// limpio el input
			$input.value = '';
		}
	};
	const getImpostor = () => {
		$input.focus();
		// obtengo el numero del impostor aleatoriamnete
		const random = Math.floor(Math.random() * playerArray.length);
		// el impostor va a ser el nombre que este en la posicion random
		const impostor = playerArray[random];
		// limpio el array por las dudas
		playerArray = [];
		// que cuatro segundo despues de tocar el btn desaparezca
		setTimeout(() => {
			// limpio el ul
			$playerList.innerHTML = '';
		}, 4000);
		// message
		$impostorMessage.innerHTML = `<b>siempre fui yo,"${impostor}" <br> boluditos</b>`;
	};
	$addBtn.addEventListener('click', () => {
		addToGame();
	});
	$impostorBtn.addEventListener('click', () => {
		if (playerArray.length === 0) {
			// si toca el btn pero no puso ningun nombre
			$impostorMessage.innerHTML = '<b>que hace pibe,no pusiste nada</b>';
		} else {
			getImpostor();
		}
	});
}

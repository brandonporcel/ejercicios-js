// 1- Menú de Hamburguesa
export function panelMenu(panelMenuBtn, menu, menuItem) {
	document.addEventListener('click', (e) => {
		if (
			e.target.matches(panelMenuBtn) ||
			e.target.matches(`${panelMenuBtn} *`)
		) {
			document.querySelector(menu).classList.toggle('active');
			document.querySelector(panelMenuBtn).classList.toggle('is-active');
		}
		if (e.target.matches(menuItem)) {
			document.querySelector(menu).classList.remove('active');
			document.querySelector(panelMenuBtn).classList.remove('is-active');
		}
	});
}

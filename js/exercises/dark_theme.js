// 6-Tema dark/light y localStorage
const d = document;
export function theDarkSide(btn, classDark, body) {
	const $themeBtn = d.querySelector(btn);
	const $bodyEl = d.querySelector(body);
	const moon = '🌚';
	const sun = '🌞';
	const localStorageDarkTheme = 'theme';
	d.addEventListener('click', (e) => {
		if (e.target.matches(btn)) {
			if ($themeBtn.textContent === moon) {
				$bodyEl.classList.add(classDark);
				$themeBtn.textContent = sun;
				localStorage.setItem(localStorageDarkTheme, 'dark');
			} else {
				$bodyEl.classList.remove(classDark);
				$themeBtn.textContent = moon;
				localStorage.setItem(localStorageDarkTheme, 'light');
			}
		}
	});
	if (localStorage.getItem(localStorageDarkTheme) === 'dark') {
		$bodyEl.classList.add(classDark);
		$themeBtn.textContent = sun;
	} else {
		$bodyEl.classList.remove(classDark);
		$themeBtn.textContent = moon;
	}
}

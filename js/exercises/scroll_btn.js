// 5- boton de scroll
const w = window;
const d = document;
export function toTheSky(scrollBtn) {
	w.addEventListener('scroll', () => {
		const $scrollBtn = d.querySelector(scrollBtn);
		if (w.pageYOffset > 600) {
			$scrollBtn.classList.add('active');
		} else {
			$scrollBtn.classList.remove('active');
		}
	});
	d.addEventListener('click', (e) => {
		if (e.target.matches(scrollBtn)) {
			w.scrollTo({
				behavior: 'smooth',
				top: 0,
			});
		}
	});
}

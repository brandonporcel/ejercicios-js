// 13-> buscador internos
const d = document;
export function colador(idSearcher, idItems) {
	const $searcher = d.getElementById(idSearcher);
	const $items = d.querySelectorAll(idItems);
	$searcher.addEventListener('keyup', () => {
		$items.forEach((elem) => {
			if (
				elem.innerHTML.toLowerCase().includes($searcher.value.toLowerCase())
			) {
				elem.classList.remove('filter-found');
			} else {
				elem.classList.add('filter-found');
			}
		});
	});
}

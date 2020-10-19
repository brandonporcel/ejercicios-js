const d = document;
export function videoTape() {
	const $video = d.querySelector('#video-the-office');
	const callback = (entradas) => {
		if (entradas[0].isIntersecting) {
			$video.play();
		} else {
			$video.pause();
		}
		window.addEventListener('visibilitychange', () => {
			if (d.visibilityState === 'visible') {
				$video.play();
			} else {
				$video.pause();
			}
		});
	};
	const obserber = new IntersectionObserver(callback, {
		threshold: 0.5,
	});
	obserber.observe($video);
}

const d = document;
const w = window;
export function a() {
	const $speechSelect = d.getElementById('speech-select');
	const $speechText = d.getElementById('speech-text');
	const $speechBtn = d.getElementById('speech-btn');
	const speechMessage = new SpeechSynthesisUtterance();
	let voices = [];
	d.addEventListener('DOMContentLoaded', () => {
		w.speechSynthesis.addEventListener('voiceschanged', () => {
			// obtengo las voces
			voices = w.speechSynthesis.getVoices();
			voices.forEach((voice) => {
				const $option = d.createElement('option');
				$option.value = voice.name;
				$option.textContent = `${voice.name}***${voice.lang}`;
				$speechSelect.appendChild($option);
			});
		});
	});
	d.addEventListener('change', (e) => {
		if (e.target === $speechSelect) {
			// no entendi un pingo aca
			speechMessage.voice = voices.find(
				(voice) => voice.name === e.target.value
			);
		}
	});
	d.addEventListener('click', (e) => {
		if (e.target === $speechBtn) {
			speechMessage.text = $speechText.value;
			// internamente lee la propiedad text
			w.speechSynthesis.speak(speechMessage);
		}
	});
}

import { useEffect, useState } from "react";

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
let speech = new SpeechRecognition();

speech.continuous = true;

const useVoice = () => {
	const [text, setText] = useState("");
	const [isListening, setIsListening] = useState(false);

	const listen = () => {
		setIsListening(!isListening);
		if (isListening) {
			speech.stop();
		} else {
			speech.start();
		}
	};

	useEffect(() => {
		if (!speech) {
			return;
		}
		speech.onresult = (event) => {
			setText(event.results[event.results.length - 1][0].transcript);
			setIsListening(false);
			speech.stop();
		};
	}, []);

	return {
		text,
		isListening,
		listen,
	};
};

export { useVoice };

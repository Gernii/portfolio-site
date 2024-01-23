<script lang="ts">
	import { onMount } from 'svelte';

	import {
		TEXT_TYPING_DELAY_BEFORE_GENERATE,
		TEXT_TYPING_DELAY_BEFORE_REMOVE,
		TEXT_TYPING_DELAY_BEFORE_REPLAY,
		TEXT_TYPING_DELAY_GENERATE,
		TEXT_TYPING_DELAY_REMOVE
	} from '../../features/text-typing-effect/constants';

	interface $$Props {
		texts: string[];
	}

	export let texts: $$Props['texts'];

	$: currentText = texts[0];

	const generateText = (idx: number, currentLenght: number) => {
		// If the index is greater than the length of the texts array, reset the index to 0
		// If we hit the last text, go back to the first text
		if (idx > texts.length - 1) {
			setTimeout(() => {
				generateText(0, 0);
			}, TEXT_TYPING_DELAY_BEFORE_REPLAY);
			return;
		}
		const currentTextInTexts = texts[idx];
		const textTotalLenght = texts[idx].length;

		// If the current length is greater than the length of the current text, start remove the text
		if (currentLenght >= textTotalLenght) {
			setTimeout(() => {
				removeText(idx, currentLenght);
			}, TEXT_TYPING_DELAY_BEFORE_REMOVE);
			return;
		}

		// If the current length is 0, set the current text to the first character of the current text in texts array
		// If not, line will be hidden because there are no text to show and make a glich effect when no text visible
		if (currentLenght === 0) {
			currentText = currentTextInTexts[currentLenght];
		} else {
			currentText += currentTextInTexts[currentLenght];
		}
		// Start typing the text
		setTimeout(() => generateText(idx, currentLenght + 1), TEXT_TYPING_DELAY_GENERATE);
	};

	const removeText = (idx: number, currentLenght: number) => {
		// If the current length is 1, start typing the next text
		// If ew remove to the last text, not 1, line will be hidden because there are no text to show and make a glich effect when no text visible
		if (currentLenght === 1) {
			setTimeout(() => {
				generateText(idx + 1, 0);
			}, TEXT_TYPING_DELAY_BEFORE_GENERATE);
			return;
		}

		// Remove the last character of the current text
		currentText = currentText?.slice(0, -1);

		// Start remove the text
		setTimeout(() => removeText(idx, currentLenght - 1), TEXT_TYPING_DELAY_REMOVE);
	};

	onMount(() => {
		setTimeout(() => {
			removeText(0, currentText.length);
		}, TEXT_TYPING_DELAY_BEFORE_REMOVE);
	});
</script>

{currentText}

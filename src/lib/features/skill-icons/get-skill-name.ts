import type { SkillTypes } from './types';
export const getSkillName = (skill: SkillTypes) => {
	switch (skill) {
		case 'javascript':
			return 'Javascript';
		case 'typescript':
			return 'Typescript';
		case 'aws':
			return 'Amazon Web Services';
		case 'css':
			return 'CSS';
		case 'html':
			return 'HTML';
		case 'qwik':
			return 'Qwik';
		case 'react':
			return 'React';
		case 'svelte':
			return 'Svelte';
		case 'sveltekit':
			return 'SvelteKit';
		case 'tailwindcss':
			return 'TailwindCSS';
		case 'vite':
			return 'Vite';
		case 'partytown':
			return 'Partytown';
	}
};

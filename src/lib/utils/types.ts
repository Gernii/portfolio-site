export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title?: string;
	slug?: string;
	description?: string;
	date?: string;
	categories?: Categories[];
	published?: boolean;
	thumbnail?: string;
};

export type Boolean = 'true' | 'false';

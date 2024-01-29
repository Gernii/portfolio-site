import type { SkillTypes } from '$lib/features/skill-icons';

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

export interface Project_Collaborator {
	name?: string;
	ref?: string;
}

export interface Project_SourceCode {
	link?: string;
	title?: string;
}

export interface Project_Demo {
	link?: string;
	title?: string;
}

export interface Project {
	title?: string;
	slug?: string;
	description?: string;
	date?: string;
	sourceCode?: Project_SourceCode;
	demo?: Project_Demo;
	published?: boolean;
	thumbnail?: string;
	collaborator?: Project_Collaborator[];
	technologyStack?: SkillTypes[];
}

export interface ProjectResponse {
	title?: string;
	slug?: string;
	description?: string;
	date?: string;
	'source-code'?: Project_SourceCode;
	demo?: Project_Demo;
	published?: boolean;
	thumbnail?: string;
	collaborator?: Project_Collaborator[];
	'technology-stack'?: SkillTypes[];
}

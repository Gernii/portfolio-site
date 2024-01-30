import type { SkillTypes } from '../skill-icons';

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

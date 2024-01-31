import type { SkillTypes } from '../skill-icons';

export interface Project_TeamMember {
	name?: string;
	ref?: string;
}

interface Project_External {
	link?: string;
	title?: string;
}

export type Project_Prototype = Project_External;
export type Project_SourceCode = Project_External;
export type Project_Demo = Project_External;

export interface Project {
	title?: string;
	slug?: string;
	description?: string;
	date?: string;
	sourceCode?: Project_SourceCode;
	demo?: Project_Demo;
	published?: boolean;
	thumbnail?: string;
	teamMember?: Project_TeamMember[];
	technologyStack?: SkillTypes[];
	prototype?: Project_Prototype;
}

import type { ComponentDataType } from './constans';

export interface ComponentDataProps {
	type: ComponentDataType;
	title?: string;
	image?: string;
	background?: boolean;
	hidden?: boolean;
	description?: string;
}

export interface ComponentDataResponseProps {
	type: ComponentDataType;
	title?: string;
	image?: string;
	background?: boolean;
	hidden?: boolean;
	description?: string;
}

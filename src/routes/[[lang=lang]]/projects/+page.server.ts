import type { Project } from '$lib/utils/types';

import { getLang } from '$lib/libs/i18n/routing';

async function getProjects(lang?: string) {
	let projects: Project[] = [];

	let paths: Record<string, unknown>;

	switch (lang) {
		case 'en':
			paths = import.meta.glob(`/src/projects/en/*.json`, {
				eager: true
			});
			break;
		default:
			paths = import.meta.glob(`/src/projects/vi/**/*.json`, {
				eager: true
			});
			break;
	}

	for (const path in paths) {
		const file = paths[path];

		const slug = path.split('/').at(-2);

		if (file && typeof file === 'object' && 'default' in file && slug) {
			const defaultObject = file.default as Omit<Project, 'slug'>;
			const project: Project = { ...defaultObject, slug };
			project.published && projects.push(project);
		}
	}

	projects = projects.sort(
		(first, second) =>
			(second.date ? new Date(second.date) : new Date()).getTime() -
			(first.date ? new Date(first.date) : new Date()).getTime()
	);

	return projects;
}

export const load = async ({ params }) => {
	const lang = getLang(params.lang);

	const projects: Project[] = await getProjects(lang);

	return { projects };
};

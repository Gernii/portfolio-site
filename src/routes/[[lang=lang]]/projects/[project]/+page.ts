import { error } from '@sveltejs/kit';

import type { Project, ProjectResponse } from '$lib/utils/types';

import { getLang } from '$lib/libs/i18n/routing';

export const load = async ({ params }) => {
	const lang = getLang(params.lang);

	const projectName = params.project;

	try {
		const description = await import(`../../../../projects/${lang}/${projectName}/description.md`);
		const details = await import(`../../../../projects/${lang}/${projectName}/details.json`);

		return {
			content: description.default,
			meta: projectParser(details.default)
		};
	} catch (e) {
		throw error(404, `Could not find ${projectName}`);
	}
};

const projectParser = (project: ProjectResponse): Project => {
	return {
		title: project.title,
		slug: project.slug,
		description: project.description,
		date: project.date,
		thumbnail: project.thumbnail,
		collaborator: project.collaborator,
		sourceCode: project['source-code'],
		technologyStack: project['technology-stack'],
		demo: project.demo
	};
};

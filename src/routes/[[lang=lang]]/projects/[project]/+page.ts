import { error } from '@sveltejs/kit';

import { getLang } from '$lib/libs/i18n/routing';

export const load = async ({ params }) => {
	const lang = getLang(params.lang);

	const projectName = params.project;

	try {
		const project = await import(`../../../../projects/${lang}/${projectName}.md`);

		return {
			content: project.default,
			meta: project.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${projectName}`);
	}
};

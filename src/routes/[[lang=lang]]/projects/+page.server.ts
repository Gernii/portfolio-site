import { type Project } from '$lib/features/projects';
import { getLang } from '$lib/libs/i18n/routing';

const getProjects = async (lang?: string) => {
	let projects: Project[] = [];

	let paths: Record<string, unknown>;
	// ! import.meta.glob need to hardcode the path to work
	switch (lang) {
		case 'en':
			paths = import.meta.glob(`/src/projects/en/*.md`, {
				eager: true
			});
			break;
		default:
			paths = import.meta.glob(`/src/projects/vi/*.md`, {
				eager: true
			});
			break;
	}

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Project, 'slug'>;

			const project: Project = { ...metadata, slug };
			project.published && projects.push(project);
		}
	}

	projects = projects.sort(
		(first, second) =>
			(second.date ? new Date(second.date) : new Date()).getTime() -
			(first.date ? new Date(first.date) : new Date()).getTime()
	);

	return projects;
};

export const load = async ({ params }) => {
	const lang = getLang(params.lang);

	const projects: Project[] = await getProjects(lang);

	return { projects };
};

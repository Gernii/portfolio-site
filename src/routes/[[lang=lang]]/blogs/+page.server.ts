import type { Post } from '$lib/utils/types';

import { getLang, route } from '$lib/libs/i18n/routing';

export const load = async ({ fetch, params }) => {
	const lang = getLang(params.lang);

	const response = await fetch(route('/api/blogs', lang));
	const blogs: Post[] = await response.json();
	console.log(blogs);

	return { blogs };
};

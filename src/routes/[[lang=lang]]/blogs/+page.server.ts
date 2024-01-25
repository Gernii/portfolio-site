import type { Post } from '$lib/utils/types';

import { getLang, route } from '$lib/libs/i18n/routing';

export const load = async ({ fetch, params }) => {
	const lang = getLang(params.lang);

	const response = await fetch(route('/api/posts', lang));
	const posts: Post[] = await response.json();

	return { posts };
};

import type { Post } from '$lib/utils/types';

import { getLang } from '$lib/libs/i18n/routing';
import { getBlogs } from '$lib/features/blogs/get-blogs';

export const load = async ({ params }) => {
	const lang = getLang(params.lang);

	const blogs: Post[] = await getBlogs(lang);

	return { blogs };
};

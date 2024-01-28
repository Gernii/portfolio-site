import { error } from '@sveltejs/kit';

import type { Post } from '$lib/utils/types';

import { getLang } from '$lib/libs/i18n/routing';

export const load = async ({ params }) => {
	const lang = getLang(params.lang);

	const blogName = params.blog;

	try {
		const post = await import(`../../../../blogs/${lang}/${blogName}.md`);
		console.log(post.default);

		return {
			content: post.default,
			meta: post.metadata as Post
		};
	} catch (e) {
		throw error(404, `Could not find ${blogName}`);
	}
};

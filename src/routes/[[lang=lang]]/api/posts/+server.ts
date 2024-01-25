import { json } from '@sveltejs/kit';

import type { Post } from '$lib/utils/types';

async function getPosts(lang?: string) {
	let posts: Post[] = [];

	let paths: Record<string, unknown>;
	// ! import.meta.glob need to hardcode the path to work
	switch (lang) {
		case 'en':
			paths = import.meta.glob(`/src/posts/en/*.md`, {
				eager: true
			});
			break;
		default:
			paths = import.meta.glob(`/src/posts/vi/*.md`, {
				eager: true
			});
			break;
	}

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export const GET = async ({ params }) => {
	const { lang } = params;

	const posts = await getPosts(lang);
	return json(posts);
};

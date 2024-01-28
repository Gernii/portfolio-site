import { json } from '@sveltejs/kit';

import type { Post } from '$lib/utils/types';

async function getBlogs(lang?: string) {
	let blogs: Post[] = [];

	let paths: Record<string, unknown>;
	// ! import.meta.glob need to hardcode the path to work
	switch (lang) {
		case 'en':
			paths = import.meta.glob(`/src/blogs/en/*.md`, {
				eager: true
			});
			break;
		default:
			paths = import.meta.glob(`/src/blogs/vi/*.md`, {
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
			post.published && blogs.push(post);
		}
	}

	blogs = blogs.sort(
		(first, second) =>
			(second.date ? new Date(second.date) : new Date()).getTime() -
			(first.date ? new Date(first.date) : new Date()).getTime()
	);

	return blogs;
}

export const GET = async ({ params }) => {
	const { lang } = params;

	const blogs = await getBlogs(lang);
	return json(blogs);
};

import { PUBLIC_HOSTNAME } from '$env/static/public';

import type { Post } from '$lib/utils/types';

import { getLang } from '$lib/libs/i18n/routing';
import { getBlogs } from '$lib/features/blogs/get-blogs.js';

export const GET = async ({ params }) => {
	const lang = getLang(params.lang);

	const blogs: Post[] = await getBlogs(lang);

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${PUBLIC_HOSTNAME}</title>
				<description>${PUBLIC_HOSTNAME}</description>
				<link>${PUBLIC_HOSTNAME}</link>
				<atom:link href="${PUBLIC_HOSTNAME}/rss.xml" rel="self" type="application/rss+xml"/>
				${blogs
					.map(
						(blog) => `
						<item>
							<title>${blog.title}</title>
							<description>${blog.description}</description>
							<link>${PUBLIC_HOSTNAME}/${blog.slug}</link>
							<guid isPermaLink="true">${PUBLIC_HOSTNAME}/${blog.slug}</guid>
                            ${blog.date && `<pubDate>${new Date(blog.date).toUTCString()}</pubDate>`}
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
};

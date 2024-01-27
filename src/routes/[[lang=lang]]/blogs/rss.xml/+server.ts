import { PUBLIC_HOSTNAME } from '$env/static/public';

import type { Post } from '$lib/utils/types';

import { getLang, route } from '$lib/libs/i18n/routing.js';

export const GET = async ({ fetch, params }) => {
	const lang = getLang(params.lang);
	const response = await fetch(route('/api/posts', lang));
	const posts: Post[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${PUBLIC_HOSTNAME}</title>
				<description>${PUBLIC_HOSTNAME}</description>
				<link>${PUBLIC_HOSTNAME}</link>
				<atom:link href="${PUBLIC_HOSTNAME}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${PUBLIC_HOSTNAME}/${post.slug}</link>
							<guid isPermaLink="true">${PUBLIC_HOSTNAME}/${post.slug}</guid>
                            ${post.date && `<pubDate>${new Date(post.date).toUTCString()}</pubDate>`}
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
};

import fs from 'fs';

/**
 * Generate robots.txt
 * @param {string} outDir - The output directory.
 * @param {string[]} sitemaps - The list of sitemaps.
 */
export const generateRobots = (outDir, sitemaps) => {
	const robotsPreCreate = [
		'User-agent: *',
		'Allow: /',
		'Disallow: /admin',
		'Disallow: /*.js$',
		'Disallow: /*.json'
	];

	const sitemapList = sitemaps.map((sitemap) => `Sitemap: ${sitemap}`);

	const robotsPreCreateString = robotsPreCreate.join('\n');

	const sitemapListString = sitemapList.join('\n');

	const txtContent = `${robotsPreCreateString}\n\n${sitemapListString}`;

	try {
		fs.writeFileSync(`${outDir}/robots.txt`, txtContent);
	} catch (err) {
		console.err(err);
	}
};

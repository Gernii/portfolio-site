<script lang="ts">
	import { page } from '$app/stores';

	import { PUBLIC_GITHUB, PUBLIC_HOSTNAME, PUBLIC_LINKEDIN } from '$env/static/public';

	// import SvelteSeo from 'svelte-seo';
	import type { Thing, WithContext } from 'schema-dts';

	import * as m from '$i18n/messages';
	import { languageTag } from '$i18n/runtime';

	import { serializeSchema } from './handler';

	interface $$Props {
		title?: string;
		description?: string;
		image?: string;
		JsonLD?: Thing | WithContext<Thing>;
		type?: 'website' | 'article';
		removeSiteNameFromTitle?: boolean;
	}

	export let title: $$Props['title'] = undefined;
	export let description: NonNullable<$$Props['description']> = m.siteDescription();
	export let image: NonNullable<$$Props['image']> = `${PUBLIC_HOSTNAME}/personal-image.jpg`;
	export let type: NonNullable<$$Props['type']> = 'website';
	export let removeSiteNameFromTitle: NonNullable<$$Props['removeSiteNameFromTitle']> = false;
	export let JsonLD: NonNullable<$$Props['JsonLD']> = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Le Ngo Duc Anh',
		jobTitle: 'Full-stack developer',
		url: PUBLIC_HOSTNAME,
		gender: 'male',
		image,
		sameAs: [PUBLIC_GITHUB, PUBLIC_LINKEDIN]
	};
	$: currentPage = `${PUBLIC_HOSTNAME}${$page.url.pathname !== '/' ? $page.url.pathname : ''}`;

	$: formattedTitle = !removeSiteNameFromTitle
		? title
			? m.siteNameWithTitle({ title })
			: m.siteName()
		: title;
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={currentPage} />
	<meta name="twitter:title" content={formattedTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={formattedTitle} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={currentPage} />
	<meta property="og:title" content={formattedTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={m.siteName()} />
	<meta property="og:image" content={image} />
	<meta property="og:locale" content={languageTag()} />
	<link rel="canonical" href={currentPage} />
	{@html serializeSchema(JsonLD)}
</svelte:head>

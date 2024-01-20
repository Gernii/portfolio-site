<script lang="ts">
	import { page } from '$app/stores';

	import { PUBLIC_HOSTNAME } from '$env/static/public';

	import SvelteSeo from 'svelte-seo';

	import * as m from '$i18n/messages';

	interface $$Props {
		title?: string;
		description?: string;
		SEOImage?: string;
	}

	$: urlPathName = $page.url.pathname !== '/' ? $page.url.pathname : '';

	export let title: $$Props['title'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let SEOImage: $$Props['SEOImage'] = undefined;

	let hostname = PUBLIC_HOSTNAME;

	$: imageUrl = SEOImage ?? `${hostname}/images/logo/CoTAI-Ver0-320.png`;

	$: contentTitle = title ? m.siteNameWithTitle({ title }) : m.siteName();
</script>

<svelte:head>
	<link rel="canonical" href={`${hostname}${urlPathName}`} />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>
<SvelteSeo
	title={contentTitle}
	{description}
	openGraph={{
		title: contentTitle,
		type: 'website',
		url: `${hostname}${urlPathName}`,
		site_name: m.siteName(),
		description,
		images: [
			{
				url: imageUrl,
				alt: m.siteName()
			}
		]
	}}
	twitter={{
		card: 'summary_large_image',
		title: contentTitle,
		description,
		image: imageUrl
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		url: hostname,
		description: m.homePage_head_description(),
		name: m.siteName()
	}}
/>

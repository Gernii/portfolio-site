<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import { PUBLIC_HOSTNAME } from '$env/static/public';

	import { ThemeChanger } from '$lib/components/ui/theme-changer';

	import { CommonPageLayout } from '$lib/layouts/common';

	import * as m from '$i18n/messages';
	import {
		setLanguageTag,
		type AvailableLanguageTag,
		sourceLanguageTag,
		availableLanguageTags
	} from '$i18n/runtime';

	import { currentLang, route } from '$lib/libs/i18n/routing';

	let hostname = PUBLIC_HOSTNAME;

	// Use the default language if no language is given
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	$: setLanguageTag(lang);

	// Set the lang attribute on the html tag
	$: if (browser) document.documentElement.lang = lang;
</script>

<noscript>{m.noscript()}</noscript>

<link rel="alternate" hreflang={'vi'} href={`${hostname}${route($page.url.pathname, 'vi')}`} />

<!-- TODO: Update after implement ENG -->
<svelte:head>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={`${hostname}${route($page.url.pathname, lang)}`} />
	{/each}
</svelte:head>

<ThemeChanger />

{#key $currentLang}
	<CommonPageLayout>
		<slot />
	</CommonPageLayout>
{/key}

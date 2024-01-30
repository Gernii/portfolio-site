<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

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

	// Use the default language if no language is given
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	$: setLanguageTag(lang);

	// Set the lang attribute on the html tag
	$: if (browser) document.documentElement.lang = lang;
</script>

<noscript>{m.noscript()}</noscript>

<svelte:head>
	{#each availableLanguageTags as lang}
		<link rel="alternate" hreflang={lang} href={route($page.url.pathname, lang, true)} />
	{/each}
</svelte:head>

<ThemeChanger />

{#key $currentLang}
	<CommonPageLayout>
		<slot />
	</CommonPageLayout>
{/key}

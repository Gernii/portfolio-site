<script lang="ts">
	import { page } from '$app/stores';

	import { cx } from 'cva';
	import ISO6991 from 'iso-639-1';

	import { availableLanguageTags } from '$i18n/runtime';

	import LangSelectorIcon from './lang-selector-icon.svelte';

	import { currentLang, route } from '$lib/libs/i18n/routing';
</script>

<ul
	tabIndex={0}
	class="dropdown-content z-[1] space-y-1 rounded-box bg-base-100 p-2 shadow shadow-base-content/5"
>
	{#each availableLanguageTags as lang}
		<li>
			<a
				class={cx('btn btn-ghost btn-block flex-nowrap justify-start', {
					'btn-active pointer-events-none cursor-default': lang === $currentLang
				})}
				href={route($page.url.pathname, lang)}
				hreflang={lang}
			>
				<LangSelectorIcon {lang} />
				<span class="whitespace-nowrap">
					{ISO6991.getNativeName(lang)}
				</span>
			</a>
		</li>
	{/each}
</ul>

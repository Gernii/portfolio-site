<script lang="ts">
	import { page } from '$app/stores';

	import { cx } from 'cva';

	import { pageRoutingHandler } from '$lib/utils/page-routing';

	import * as m from '$i18n/messages';

	import { LangSelector } from '../lang-selector';
	import { ThemeSelector } from '../theme-selector';

	import NavigatorItem from './navigator-item.svelte';

	import { navigate } from '$lib/libs/i18n/routing';

	interface $$Props {
		sidenav?: boolean;
	}

	export let sidenav: NonNullable<$$Props['sidenav']> = false;

	const pageRouting = pageRoutingHandler();
</script>

<div
	class={cx('flex h-full flex-col ', {
		'rounded-btn bg-base-100': sidenav,
		'bg-transparent': !sidenav
	})}
>
	<nav
		class={cx('flex', {
			'flex-row items-center gap-x-3': !sidenav,
			'flex-col p-4': sidenav
		})}
	>
		<NavigatorItem
			href={navigate(pageRouting.about)}
			target="_self"
			aria-label={m.about()}
			active={$page.url.pathname.includes(pageRouting.about)}
		>
			{m.about()}
		</NavigatorItem>
		<NavigatorItem
			href={navigate(pageRouting.projects)}
			target="_self"
			aria-label={m.projects()}
			active={$page.url.pathname.includes(pageRouting.projects)}
		>
			{m.projects()}
		</NavigatorItem>
		<NavigatorItem
			href={navigate(pageRouting.blogs)}
			target="_self"
			aria-label={m.blogs()}
			active={$page.url.pathname.includes(pageRouting.blogs)}
		>
			{m.blogs()}
		</NavigatorItem>
		<NavigatorItem href="#contact" target="_self" aria-label={m.contact()}>
			{m.contact()}
		</NavigatorItem>
	</nav>
	{#if sidenav}
		<hr class="mb-2 w-full border border-base-content/5" />
		<div class="flex items-center justify-between px-4 py-2">
			<p class="font-semibold">{m.language()}:</p>
			<LangSelector />
		</div>
		<div class="flex items-center justify-between px-4 py-2">
			<p class="font-semibold">{m.theme()}:</p>
			<ThemeSelector />
		</div>
	{/if}
</div>

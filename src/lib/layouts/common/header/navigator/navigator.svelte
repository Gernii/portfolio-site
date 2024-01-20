<script lang="ts">
	import { cx } from 'cva';

	import * as m from '$i18n/messages';

	import { LangSelector } from '../lang-selector';
	import { ThemeSelector } from '../theme-selector';

	import NavigatorItem from './navigator-item.svelte';

	interface $$Props {
		sidenav?: boolean;
	}

	export let sidenav: NonNullable<$$Props['sidenav']> = false;
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

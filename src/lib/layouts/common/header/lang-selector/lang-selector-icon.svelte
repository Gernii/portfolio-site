<script lang="ts">
	import { cx } from 'cva';

	import type { AvailableLanguageTag } from '$i18n/runtime';

	import { IconFlagUs, IconFlagVietnam } from '$lib/components/icons';

	interface $$Props {
		lang: AvailableLanguageTag;
	}

	export let lang: $$Props['lang'];

	$: iconClasses = cx('inline-block w-7');
</script>

{#if lang === 'vi'}
	<IconFlagVietnam class={iconClasses} />
{:else}
	<IconFlagUs class={iconClasses} />
{/if}

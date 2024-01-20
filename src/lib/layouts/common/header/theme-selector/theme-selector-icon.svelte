<script lang="ts">
	import { cx } from 'cva';

	import { IconMoon, IconSun } from '$lib/components/icons';

	$: iconClasses = cx('inline-block w-7');
</script>

<div class="block dark:hidden">
	<IconSun class={iconClasses} />
</div>
<div class="hidden dark:block">
	<IconMoon class={iconClasses} />
</div>

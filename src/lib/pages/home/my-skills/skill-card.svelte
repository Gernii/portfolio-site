<script lang="ts">
	import { cx } from 'cva';

	interface $$Props {
		tooltip: string;
		title?: string;
		needBgWhite?: boolean;
	}

	export let tooltip: $$Props['tooltip'];
	export let title: $$Props['title'] = undefined;
	export let needBgWhite: NonNullable<$$Props['needBgWhite']> = false;
</script>

<div class="flex">
	<div
		class="group card card-bordered tooltip card-compact bg-base-100 hover:shadow"
		data-tip={tooltip}
	>
		<div
			class="card-body size-24 items-center transition-transform group-hover:scale-105 sm:size-32"
		>
			<div
				class={cx('h-full p-1', {
					'rounded-btn dark:bg-white': needBgWhite
				})}
			>
				<slot />
			</div>

			<p>{title ?? tooltip}</p>
		</div>
	</div>
</div>

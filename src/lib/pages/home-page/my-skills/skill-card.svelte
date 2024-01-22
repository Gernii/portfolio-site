<script lang="ts">
	import { cx } from 'cva';

	import { Picture } from '$lib/components/ui/picture';

	interface $$Props {
		meta: ImgMeta[];
		tooltip: string;
		title?: string;
		needBgWhite?: boolean;
	}

	export let meta: $$Props['meta'];
	export let tooltip: $$Props['tooltip'];
	export let needBgWhite: NonNullable<$$Props['needBgWhite']> = false;
	export let title: $$Props['title'] = undefined;
</script>

<div class="flex">
	<div
		class="group card card-bordered tooltip card-compact bg-base-100 hover:shadow"
		data-tip={tooltip}
	>
		<div
			class="card-body size-24 items-center transition-transform group-hover:scale-105 sm:size-32"
		>
			<Picture
				{meta}
				pictureClass={cx('size-12 sm:size-16 p-1', {
					'dark:bg-white rounded-btn': needBgWhite
				})}
			/>
			<p>{title ?? tooltip}</p>
		</div>
	</div>
</div>

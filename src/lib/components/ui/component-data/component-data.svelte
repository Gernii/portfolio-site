<script lang="ts">
	import { cx } from 'cva';

	import { ContainerContent, Container } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';

	import * as m from '$i18n/messages';

	import type { ComponentDataProps } from './types';
	import { ComponentDataType } from './constans';

	import { TextContent } from '$lib/features/text-content';

	interface $$Props extends ComponentDataProps {
		idx: number;
	}

	export let title: $$Props['title'] = undefined;
	export let background: $$Props['background'] = false;
	export let description: $$Props['description'] = undefined;
	export let hidden: $$Props['hidden'] = false;
	export let image: $$Props['image'] = undefined;
	export let type: $$Props['type'] = 0;
	export let idx: $$Props['idx'];
</script>

{#if !hidden && title && description}
	<Container
		class={cx({
			'bg-base-200': background || idx % 2 === 0 || idx === 0
		})}
	>
		<ContainerContent
			class={cx({
				'grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2': type !== ComponentDataType['no-image']
			})}
		>
			<div class="pt-2">
				<SectionTitle>{title}</SectionTitle>

				<TextContent text={description} />
			</div>
			{#if image && type !== ComponentDataType['no-image']}
				<div
					class={cx('overflow-hidden rounded-box', {
						'order-1 lg:-order-1': type === ComponentDataType['text-right']
					})}
				>
					<figure class="aspect-thumbnail43">
						<img
							src={image}
							loading="lazy"
							alt={m.thumbnail({ title: title })}
							height={200}
							width={448}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</figure>
				</div>
			{/if}
		</ContainerContent>
	</Container>
{/if}

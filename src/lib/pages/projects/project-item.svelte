<script lang="ts">
	import { DEFAULT_THUMBNAIL } from '$lib/utils/constants';
	import { formatDate } from '$lib/utils/format-date';
	import { pageRoutingHandler } from '$lib/utils/page-routing';

	import type { Project } from '$lib/features/projects';

	type $$Props = Project;

	export let slug: $$Props['slug'] = undefined;
	export let title: $$Props['title'] = undefined;
	export let date: $$Props['date'] = undefined;
	export let description: $$Props['description'] = undefined;
	export let thumbnail: $$Props['thumbnail'] = undefined;

	const pageRouting = pageRoutingHandler();
</script>

{#if slug}
	<li class="py-1">
		<div class="group card card-bordered card-compact bg-base-100 hover:bg-base-200 hover:shadow">
			<div class="relative aspect-thumbnail169 overflow-hidden rounded-t-box">
				<a href={pageRouting.projectsWithId(slug)}>
					<img
						src={thumbnail ?? DEFAULT_THUMBNAIL}
						alt={title}
						class="absolute inset-0 m-auto min-h-[100%] min-w-[100%] object-cover transition-transform group-hover:scale-105"
					/>
				</a>
			</div>
			<div class="card-body">
				<div>
					<a
						class="text-xl font-semibold group-hover:text-primary"
						href={pageRouting.projectsWithId(slug)}
					>
						{title}
					</a>
					{#if date}
						<p>{formatDate(date)}</p>
					{/if}
				</div>
				{#if description}
					<p class="line-clamp-2">{description}</p>
				{/if}
			</div>
		</div>
	</li>
{/if}

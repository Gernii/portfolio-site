<script lang="ts">
	import { formatDate } from '$lib/utils/format-date';
	import { pageRoutingHandler } from '$lib/utils/page-routing';
	import type { Post } from '$lib/utils/types';

	type $$Props = Post;

	export let slug: $$Props['slug'] = undefined;
	export let title: $$Props['title'] = undefined;
	export let date: $$Props['date'] = undefined;
	export let description: $$Props['description'] = undefined;

	const pageRouting = pageRoutingHandler();
</script>

{#if slug}
	<li class="group card card-bordered card-compact bg-base-100 hover:shadow">
		<div class="card-body">
			<div>
				<a
					class="text-xl font-semibold group-hover:text-primary"
					href={pageRouting.blogsWithId(slug)}
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
	</li>
{/if}

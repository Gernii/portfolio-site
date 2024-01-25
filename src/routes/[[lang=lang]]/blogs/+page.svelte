<script lang="ts">
	import { pageRoutingHandler } from '$lib/utils/page-routing';

	import { navigate } from '$lib/libs/i18n/routing.js';
	export let data;

	$: posts = data.posts;

	const pageRouting = pageRoutingHandler();
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/atom+xml"
		href={navigate(pageRouting.blogsWithId('rss.xml'))}
	/>
</svelte:head>

<section>
	<ul class="posts">
		{#each posts as post}
			{#if post.slug}
				<li class="post">
					<a href={pageRouting.blogsWithId(post.slug)} class="title">{post.title}</a>
					<p class="date">post.date</p>
					<p class="description">{post.description}</p>
				</li>
			{/if}
		{/each}
	</ul>
</section>

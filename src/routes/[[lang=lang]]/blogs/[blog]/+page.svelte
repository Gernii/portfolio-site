<script lang="ts">
	import { Container, ContainerContent } from '$lib/components/ui/container';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div class="mt-header-space">
	<Container root="section">
		<ContainerContent>
			<article>
				<!-- Title -->
				<hgroup>
					<h1>{data.meta.title}</h1>
					<p>Published at {data.meta.date}</p>
				</hgroup>

				<!-- Tags -->
				<div class="tags">
					{#if data.meta.categories}
						{#each data.meta.categories as category}
							<span class="surface-4">&num;{category}</span>
						{/each}
					{/if}
				</div>

				<!-- Post -->
				<div class="prose">
					<svelte:component this={data.content} />
				</div>
			</article>
		</ContainerContent>
	</Container>
</div>

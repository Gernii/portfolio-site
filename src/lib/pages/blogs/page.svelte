<script lang="ts">
	import { page } from '$app/stores';

	import { SEO } from '$lib/components/ui/seo';
	import { Container, ContainerContent } from '$lib/components/ui/container';
	import SectionTitle from '$lib/components/ui/section-title/section-title.svelte';

	import type { Post } from '$lib/utils/types';
	import { pageRoutingHandler } from '$lib/utils/page-routing';

	import * as m from '$i18n/messages';

	import BlogItem from './blog-item.svelte';

	import { navigate } from '$lib/libs/i18n/routing';

	$: blogs = $page.data.blogs as Post[];

	const pageRouting = pageRoutingHandler();
</script>

<SEO title={m.blogs()} />
<svelte:head>
	<link
		rel="alternate"
		type="application/atom+xml"
		href={navigate(pageRouting.blogsWithId('rss.xml'))}
	/>
</svelte:head>
<div class="mt-header-space">
	<Container root="section">
		<ContainerContent class="min-h-svh space-y-8">
			<div class="space-y-2">
				<SectionTitle paddingBottom={false}>{m.blogs()}</SectionTitle>
				<p>
					{m.blogs_description()}
				</p>
			</div>
			<ul class="divide-y-2 divide-base-100">
				{#each blogs as post}
					<BlogItem {...post} />
				{/each}
			</ul>
		</ContainerContent>
	</Container>
</div>

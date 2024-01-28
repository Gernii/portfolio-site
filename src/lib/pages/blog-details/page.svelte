<script lang="ts">
	import { page } from '$app/stores';

	import type { Thing, WithContext } from 'schema-dts';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SEO } from '$lib/components/ui/seo';

	import { formatDate } from '$lib/utils/format-date';
	import type { Post } from '$lib/utils/types';

	import * as m from '$i18n/messages';

	import { currentLang } from '$lib/libs/i18n/routing';

	$: pd = $page.data as { meta: Post; content: any };

	const JsonLDData: WithContext<Thing> = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		image: pd.meta.thumbnail,
		url: $page.url.href,
		headline: pd.meta.title,
		dateCreated: pd.meta.date,
		datePublished: pd.meta.date,
		// dateModified: '2019-02-11T11:11:11',
		inLanguage: $currentLang,
		isFamilyFriendly: true,
		contentLocation: {
			'@type': 'Place',
			name: 'Ho Chi Minh City, Vietnam'
		},
		accountablePerson: {
			'@type': 'Person',
			name: m.myFullName(),
			url: $page.url.origin
		},
		author: {
			'@type': 'Person',
			name: m.myFullName(),
			url: $page.url.origin
		},
		creator: {
			'@type': 'Person',
			name: m.myFullName(),
			url: $page.url.origin
		},
		publisher: {
			'@type': 'Organization',
			name: m.myFullName(),
			url: $page.url.origin,
			logo: {
				'@type': 'ImageObject',
				url: $page.url.origin + '/personal-image.jpg'
			}
		},
		mainEntityOfPage: 'True',
		keywords: pd.meta.categories
	};
</script>

<SEO
	type="article"
	title={pd.meta.title}
	removeSiteNameFromTitle
	JsonLD={JsonLDData}
	description={pd.meta.description}
/>

<div class="mt-header-space">
	<Container root="section">
		<ContainerContent>
			<article>
				<div class="space-y-4">
					<!-- Title -->
					<hgroup class="space-y-2">
						<h1 class="text-5xl font-bold">{pd.meta.title}</h1>
						<p class="text-sm">{m.publishedAt()} {formatDate(pd.meta.date)}</p>
					</hgroup>

					<!-- Tags -->
					{#if pd.meta.categories}
						<div class="flex flex-row flex-wrap items-center gap-x-2">
							<span>{m.categories()}: </span>
							{#each pd.meta.categories as category}
								<span class="badge badge-outline">&num;{category}</span>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Post -->
				<div class="prose mt-24">
					<svelte:component this={pd.content} />
				</div>
			</article>
		</ContainerContent>
	</Container>
</div>

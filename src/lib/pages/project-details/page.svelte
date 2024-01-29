<script lang="ts">
	import { page } from '$app/stores';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SEO } from '$lib/components/ui/seo';

	import { formatDate } from '$lib/utils/format-date';
	import type { Project } from '$lib/utils/types';

	import * as m from '$i18n/messages';

	import Details from './details.svelte';
	import DetailsItem from './details-item.svelte';
	import TechnologyStack from './technology-stack.svelte';

	$: pd = $page.data as { meta: Project; content: any };

	$: meta = pd.meta;

	// TODO: Add JsonLD
	// $: JsonLDData = {
	// 	'@context': 'https://schema.org',
	// 	'@type': 'BlogPosting',
	// 	image: meta.thumbnail,
	// 	url: $page.url.href,
	// 	headline: meta.title,
	// 	dateCreated: meta.date,
	// 	datePublished: meta.date,
	// 	// dateModified: '2019-02-11T11:11:11',
	// 	inLanguage: $currentLang,
	// 	isFamilyFriendly: true,
	// 	contentLocation: {
	// 		'@type': 'Place',
	// 		name: 'Ho Chi Minh City, Vietnam'
	// 	},
	// 	accountablePerson: {
	// 		'@type': 'Person',
	// 		name: m.myFullName(),
	// 		url: $page.url.origin
	// 	},
	// 	author: {
	// 		'@type': 'Person',
	// 		name: m.myFullName(),
	// 		url: $page.url.origin
	// 	},
	// 	creator: {
	// 		'@type': 'Person',
	// 		name: m.myFullName(),
	// 		url: $page.url.origin
	// 	},
	// 	publisher: {
	// 		'@type': 'Organization',
	// 		name: m.myFullName(),
	// 		url: $page.url.origin,
	// 		logo: {
	// 			'@type': 'ImageObject',
	// 			url: $page.url.origin + '/personal-image.jpg'
	// 		}
	// 	},
	// 	mainEntityOfPage: 'True'
	// } as WithContext<Thing>;
</script>

<SEO type="article" title={`${meta.title}`} description={meta.description} />

<div class="mt-header-space">
	<Container root="section">
		<ContainerContent>
			<article class="space-y-16">
				<div class="flex flex-col justify-between gap-x-32 gap-y-8 lg:flex-row">
					<!-- Title -->
					<div class="space-y-4">
						<h1 class="text-5xl font-bold">{meta.title}</h1>
						<p>{meta.description}</p>
						{#if meta.technologyStack && meta.technologyStack.length > 0}
							<TechnologyStack techs={meta.technologyStack} />
						{/if}
					</div>
					<Details>
						{#if meta.date}
							<DetailsItem title={m.project_date()}>
								{formatDate(meta.date, 'short')}
							</DetailsItem>
						{/if}
						{#if meta.sourceCode?.link}
							<DetailsItem title={m.sourcecode()}>
								<a class="link" href={meta.sourceCode.link}>
									{meta.sourceCode?.title ?? m.link()}
								</a>
							</DetailsItem>
						{/if}
						{#if meta.demo?.link}
							<DetailsItem title={m.website()}>
								<a class="link" href={meta.demo.link}>
									{meta.demo?.title ?? m.link()}
								</a>
							</DetailsItem>
						{/if}
					</Details>
				</div>
				<div class="card overflow-hidden">
					<img src={meta.thumbnail} alt={meta.title} class="w-full" />
				</div>

				<!-- Post -->
				<div class="prose">
					<svelte:component this={pd.content} />
				</div>
			</article>
		</ContainerContent>
	</Container>
</div>

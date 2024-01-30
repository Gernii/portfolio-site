<script lang="ts">
	import { page } from '$app/stores';

	import { PUBLIC_HOSTNAME } from '$env/static/public';

	import type { Thing, WithContext } from 'schema-dts';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SEO } from '$lib/components/ui/seo';

	import { formatDate } from '$lib/utils/format-date';
	import { pageRoutingHandler } from '$lib/utils/page-routing';

	import * as m from '$i18n/messages';

	import Details from './details.svelte';
	import DetailsItem from './details-item.svelte';
	import TechnologyStack from './technology-stack.svelte';

	import type { Project } from '$lib/features/projects';
	import { getLang, route } from '$lib/libs/i18n/routing';

	$: pd = $page.data as { meta: Project; content: any };

	$: meta = pd.meta;

	const pageRouting = pageRoutingHandler();

	$: JsonLDData = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareSourceCode',
		name: meta.title,
		keywords: 'website,projects',
		url: $page.url.href,
		datePublished: meta.date,
		dateCreated: meta.date,
		creator: {
			'@type': 'Person',
			name: m.myFullName(),
			url: route(pageRouting.home, getLang(), true)
		},
		image: {
			'@type': 'ImageObject',
			url: `${PUBLIC_HOSTNAME}${meta.thumbnail}`
		},
		description: meta.description
	} satisfies WithContext<Thing>;
</script>

<SEO type="article" title={`${meta.title}`} JsonLD={JsonLDData} description={meta.description} />

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
								{formatDate(meta.date, 'medium')}
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
									{meta.demo?.title ?? m.demo()}
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

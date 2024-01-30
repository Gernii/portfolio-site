<script lang="ts">
	import { page } from '$app/stores';

	import { SEO } from '$lib/components/ui/seo';
	import { Container, ContainerContent } from '$lib/components/ui/container';
	import SectionTitle from '$lib/components/ui/section-title/section-title.svelte';

	import * as m from '$i18n/messages';

	import ProjectItem from './project-item.svelte';

	import type { Project } from '$lib/features/projects';

	$: projects = $page.data.projects as Project[];
</script>

<SEO title={m.projects()} />

<div class="mt-header-space">
	<Container root="section">
		<ContainerContent class="min-h-svh space-y-8">
			<div class="space-y-2">
				<SectionTitle paddingBottom={false}>{m.projects()}</SectionTitle>
				<p>
					{m.projects_description()}.
				</p>
			</div>
			<ul class="grid grid-cols-3 divide-y-2 divide-base-100">
				{#each projects as project}
					<ProjectItem {...project} />
				{/each}
			</ul>
		</ContainerContent>
	</Container>
</div>

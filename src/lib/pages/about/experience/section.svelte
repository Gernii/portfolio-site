<script lang="ts">
	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';

	import * as m from '$i18n/messages';

	import Item from './item.svelte';
</script>

<Container root="section">
	<ContainerContent>
		<SectionTitle>{m.experience()}</SectionTitle>
		<div>
			<Item
				companyName="CoTAI"
				companyLongName={m.CoTAIFullText()}
				monthStart={1}
				role="Full-stack Developer"
				yearStart={2022}
				companyUrl="https://cot.ai"
				description={m.CoTAIDescription()}
				isWorking
			/>
		</div>
	</ContainerContent>
</Container>

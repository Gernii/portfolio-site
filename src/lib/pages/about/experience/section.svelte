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
				role="Software Engineer"
				monthStart={9}
				monthEnd={9}
				yearStart={2019}
				yearEnd={2024}
				companyUrl="https://cot.ai"
				description={m.CoTAIDescription()}
			/>
		</div>
	</ContainerContent>
</Container>

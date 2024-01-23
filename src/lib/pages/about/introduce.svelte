<script lang="ts">
	import PersonalImage from '$lib/assets/personal-image.jpg?w=300&imagetools';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import { SectionTitle } from '$lib/components/ui/section-title';
	import { Picture } from '$lib/components/ui/picture';

	import * as m from '$i18n/messages';

	import TextTypingEffect from '$lib/features/text-typing-effect/text-typing-effect.svelte';
</script>

<Container class="mt-header-space" root="section">
	<ContainerContent>
		<SectionTitle>
			<span class="font-normal">{m.aboutWithContextName()}</span>
			<span><TextTypingEffect texts={[m.myNickName(), m.myName()]} /></span>
		</SectionTitle>
		<div class="flex flex-col gap-x-0 gap-y-6 sm:flex-row sm:gap-x-6 lg:gap-x-16">
			<div class="mask mask-circle h-full max-w-52">
				<Picture meta={PersonalImage} alt={m.personalimage()} />
			</div>
			<div class="prose">
				<p>
					{m.about_person_line_1_1()}
					<kbd class="not-prose kbd kbd-sm tooltip" data-tip={m.about_person_line_1_1_tip_1()}>
						{m.vietnam()}
					</kbd>
					{m.about_person_line_1_2()}.
				</p>
				<p>
					{m.about_person_line_2()}.
				</p>

				<p>
					{m.about_person_line_3_1()}
					<kbd class="not-prose kbd kbd-sm tooltip" data-tip={m.about_person_line_3_tip_1()}
						>2018</kbd
					>{m.about_person_line_3_2()}.
				</p>

				<p>{m.about_person_line_4()}.</p>

				<p>
					{m.about_person_line_5_1()} <b>{m.about_person_line_5_2()}</b>
					{m.at()}
					<a href="https://vhu.edu.vn" rel="noopener noreferrer" target="_blank"
						>{m.Van_Hien_University()}</a
					>
					{m.about_person_line_5_3()} <b>Full-stack Developer</b>
					{m.at()}
					<a
						href="https://cot.ai"
						rel="noopener noreferrer"
						class="tooltip"
						target="_blank"
						data-tip={m.CoTAIFullText()}>CoTAI</a
					>.
				</p>
			</div>
		</div>
	</ContainerContent>
</Container>

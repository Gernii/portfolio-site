<script>
	import { Container, ContainerContent } from '$lib/components/ui/container';
	import SectionTitle from '$lib/components/ui/section-title/section-title.svelte';

	import * as m from '$i18n/messages';

	import SkillCard from './skill-card.svelte';

	import LogosJavascript from '~icons/logos/javascript';
	import LogosCss3 from '~icons/logos/css-3';
	import LogosHtml5 from '~icons/logos/html-5';
	import LogosPython from '~icons/logos/python';
	import LogosTypescriptIcon from '~icons/logos/typescript-icon';
	import LogosSvelteIcon from '~icons/logos/svelte-icon';
	import LogosReact from '~icons/logos/react';
	import LogosQwikIcon from '~icons/logos/qwik-icon';
	import LogosTailwindcssIcon from '~icons/logos/tailwindcss-icon';
	import LogosServerless from '~icons/logos/serverless';
	import LogosAws from '~icons/logos/aws';
	import LogosFigma from '~icons/logos/figma';
	const iconClassName = 'size-full';
</script>

<Container root="section">
	<ContainerContent>
		<SectionTitle>{m.mySkills()}</SectionTitle>

		<div class="space-y-2">
			<h2 class="pt-4 text-xl font-semibold">{m.languages()}</h2>
			<div class="flex flex-row flex-wrap gap-x-6 gap-y-4">
				<SkillCard tooltip="HTML">
					<LogosHtml5 class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="CSS">
					<LogosCss3 class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="TypeScript">
					<LogosTypescriptIcon class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="JavaScript">
					<LogosJavascript class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="Python">
					<LogosPython class={iconClassName} />
				</SkillCard>
			</div>
		</div>

		<div class="space-y-2">
			<h2 class="pt-4 text-xl font-semibold">{m.frameworksAndLibraries()}</h2>
			<div class="flex flex-row flex-wrap gap-x-6 gap-y-4">
				<SkillCard tooltip="React JS">
					<LogosReact class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="React Native" title="React N">
					<LogosReact class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="Svelte">
					<LogosSvelteIcon class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="SvelteKit">
					<LogosSvelteIcon class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="Qwik">
					<LogosQwikIcon class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="TailwindCSS">
					<LogosTailwindcssIcon class={iconClassName} />
				</SkillCard>
				<SkillCard tooltip="Serverless">
					<LogosServerless class={iconClassName} />
				</SkillCard>
			</div>
		</div>

		<div class="space-y-2">
			<h2 class="pt-4 text-xl font-semibold">{m.cloud()}</h2>
			<div class="flex flex-row flex-wrap gap-x-6 gap-y-4">
				<SkillCard title="AWS" tooltip="Amazon Web Services" needBgWhite>
					<LogosAws class={iconClassName} />
				</SkillCard>
			</div>
		</div>

		<div class="space-y-2">
			<h2 class="pt-4 text-xl font-semibold">{m.tools()}</h2>
			<div class="flex flex-row flex-wrap gap-x-6 gap-y-4">
				<SkillCard tooltip="Figma">
					<LogosFigma class={iconClassName} />
				</SkillCard>
			</div>
		</div>
	</ContainerContent>
</Container>

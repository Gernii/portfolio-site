<script>
	import HTMLPNG from '$lib/assets/home-page/skills/html.png?w=100&imagetools';
	import CSSPNG from '$lib/assets/home-page/skills/css.png?w=100&imagetools';
	import TypeScriptPNG from '$lib/assets/home-page/skills/typescipt.png?w=100&imagetools';
	import JavaScriptPNG from '$lib/assets/home-page/skills/javascript.png?w=100&imagetools';
	import PythonPNG from '$lib/assets/home-page/skills/python.png?w=100&imagetools';
	import SQLPNG from '$lib/assets/home-page/skills/sql.png?w=100&imagetools';
	import ReactJSPNG from '$lib/assets/home-page/skills/reactjs.png?w=100&imagetools';
	import SveltePNG from '$lib/assets/home-page/skills/svelte.png?w=100&imagetools';
	import QwikPNG from '$lib/assets/home-page/skills/qwik.png?w=100&imagetools';
	import TailwindCSSPNG from '$lib/assets/home-page/skills/tailwindcss.png?w=100&imagetools';
	import ServerlessPNG from '$lib/assets/home-page/skills/serverless.png?w=100&imagetools';
	import AWSPNG from '$lib/assets/home-page/skills/aws.png?w=100&imagetools';
	import FigmaPNG from '$lib/assets/home-page/skills/figma.png?w=100&imagetools';

	import { Container, ContainerContent } from '$lib/components/ui/container';
	import SectionTitle from '$lib/components/ui/section-title/section-title.svelte';

	import * as m from '$i18n/messages';

	import SkillCard from './skill-card.svelte';
</script>

<Container root="section">
	<ContainerContent>
		<SectionTitle>{m.mySkills()}</SectionTitle>

		<div class="space-y-2">
			<h2 class="pt-4 text-xl font-semibold">{m.languages()}</h2>
			<div class="flex flex-row flex-wrap gap-x-6 gap-y-4">
				<SkillCard meta={HTMLPNG} tooltip="HTML" />
				<SkillCard meta={CSSPNG} tooltip="CSS" />
				<SkillCard meta={TypeScriptPNG} tooltip="TypeScript" />
				<SkillCard meta={JavaScriptPNG} tooltip="JavaScript" />
				<SkillCard meta={PythonPNG} tooltip="Python" />
				<SkillCard meta={SQLPNG} tooltip="SQL" />
			</div>
		</div>

		<div class="space-y-2">
			<h2 class="pt-4 text-xl font-semibold">{m.frameworksAndLibraries()}</h2>
			<div class="flex flex-row flex-wrap gap-x-6 gap-y-4">
				<SkillCard meta={ReactJSPNG} tooltip="React JS" />
				<SkillCard meta={ReactJSPNG} tooltip="React Native" title="React N" />
				<SkillCard meta={SveltePNG} tooltip="Svelte" />
				<SkillCard meta={SveltePNG} tooltip="SvelteKit" />
				<SkillCard meta={QwikPNG} tooltip="Qwik" />
				<SkillCard meta={TailwindCSSPNG} tooltip="TailwindCSS" />
				<SkillCard meta={ServerlessPNG} tooltip="Serverless" />
			</div>
		</div>

		<div class="space-y-2">
			<h2 class="pt-4 text-xl font-semibold">{m.cloud()}</h2>
			<div class="flex flex-row flex-wrap gap-x-6 gap-y-4">
				<SkillCard meta={AWSPNG} title="AWS" tooltip="Amazon Web Services" needBgWhite />
			</div>
		</div>

		<div class="space-y-2">
			<h2 class="pt-4 text-xl font-semibold">{m.tools()}</h2>
			<div class="flex flex-row flex-wrap gap-x-6 gap-y-4">
				<SkillCard meta={FigmaPNG} tooltip="Figma" />
			</div>
		</div>
	</ContainerContent>
</Container>

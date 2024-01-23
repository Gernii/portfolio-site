<script lang="ts">
	import { ContainerContent } from '$lib/components/ui/container';

	import * as m from '$i18n/messages';

	import { TextTypingEffect } from '$lib/features/text-typing-effect';
</script>

<section class="h-dvh overflow-hidden">
	<ContainerContent class="grid h-full content-center">
		<div class="text-shadow-sm w-full shadow-base-content/5">
			<p class="text-base font-semibold sm:text-xl">{m.hi_im()}</p>
			<p class="text-3xl font-bold text-primary sm:text-6xl">
				<TextTypingEffect texts={[m.myNickName(), m.myFullName()]} />
			</p>
			<p class="pt-1 text-lg font-semibold sm:pt-2 sm:text-2xl">
				<TextTypingEffect
					texts={[
						`${m.homepage_hero_subtitle()} Front-end developer`,
						`${m.homepage_hero_subtitle()} Back-end developer`,
						`${m.homepage_hero_subtitle_studying()} Cloud developer (AWS)`
					]}
				/>
			</p>
		</div>
	</ContainerContent>
</section>

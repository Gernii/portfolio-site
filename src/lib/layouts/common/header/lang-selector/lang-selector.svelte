<script lang="ts">
	import * as m from '$i18n/messages';

	import LangSelectorContent from './lang-selector-content.svelte';
	import LangSelectorIcon from './lang-selector-icon.svelte';

	import { currentLang } from '$lib/libs/i18n/routing';
</script>

<div class="dropdown dropdown-end dropdown-bottom">
	<div
		tabIndex={0}
		role="button"
		class="btn btn-square btn-ghost"
		aria-label={m.layout_header_openLanguageMenu()}
	>
		<LangSelectorIcon lang={$currentLang} />
	</div>
	<LangSelectorContent />
</div>

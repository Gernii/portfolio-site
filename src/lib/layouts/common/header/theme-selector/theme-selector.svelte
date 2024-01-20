<script lang="ts">
	import * as m from '$i18n/messages';

	import ThemeSelectorContent from './theme-selector-content.svelte';
	import ThemeSelectorIcon from './theme-selector-icon.svelte';
</script>

<div class="dropdown dropdown-end dropdown-bottom">
	<div
		tabIndex={0}
		role="button"
		class="btn btn-square btn-ghost"
		aria-label={m.layout_header_openThemeMenu()}
	>
		<ThemeSelectorIcon />
	</div>
	<ThemeSelectorContent />
</div>

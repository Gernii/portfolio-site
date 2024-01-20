<script lang="ts">
	import { Navigator } from '../navigator';
</script>

<div class="drawer-side z-50 scroll-pt-20 scroll-smooth">
	<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
	<aside
		class="h-screen w-sidebar py-2 pl-2 shadow-lg shadow-base-content/5 supports-[height:100dvh]:h-[100dvh]"
	>
		<Navigator sidenav={true} />
	</aside>
</div>

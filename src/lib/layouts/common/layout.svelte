<script lang="ts">
	import { Footer } from './footer';
	import { Header, SidenavContent } from './header';
</script>

<div class="drawer bg-base-300">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />

	<main class="drawer-content">
		<Header />
		<slot />
		<Footer />
	</main>

	<SidenavContent />
</div>

<svelte:head>
	<script>
		try {
			var theme = localStorage.getItem('theme');
			if (theme && (theme === 'dark' || theme === 'light')) {
				document.documentElement.setAttribute('data-theme', theme);
			} else if (
				!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			) {
				document.documentElement.setAttribute('data-theme', 'dark');
			}
		} catch (_) {}
	</script>
</svelte:head>

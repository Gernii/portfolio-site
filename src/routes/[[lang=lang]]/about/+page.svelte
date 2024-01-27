<script lang="ts">
	import { SEO } from '$lib/components/ui/seo';

	import { AboutPage } from '$lib/pages/about';

	import * as m from '$i18n/messages';
</script>

<SEO title={m.about()} />

<AboutPage />

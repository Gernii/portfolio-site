<script lang="ts">
	import { page } from '$app/stores';

	import ErrorImage from '$lib/assets/error-image.svg';

	import { pageRoutingHandler } from '$lib/utils/page-routing';

	import * as m from '$i18n/messages';

	import { navigate } from '$lib/libs/i18n/routing';

	const pageRouting = pageRoutingHandler();

	$: isUserError = $page.status >= 400 && $page.status < 500;
</script>

<div class="fixed inset-0 flex flex-col items-center justify-center gap-2">
	<div class="flex h-5/6 w-5/6 flex-col items-center lg:h-3/4 lg:w-3/4 lg:flex-row">
		<div class="w-full sm:w-1/2">
			<img src={ErrorImage} alt={m.error_image()} />
		</div>
		<div class="w-full space-y-6 sm:w-1/2">
			<h1 class="text-6xl font-semibold lg:text-9xl">{$page.status}</h1>
			<h2 class="text-2xl font-semibold lg:text-4xl">
				{isUserError ? m.error404_title() : m.error500_title()}
			</h2>
			<p>
				{isUserError ? m.error404_description() : m.error500_description()}
			</p>

			<div class="space-x-2">
				<a class="btn btn-primary" href={navigate(pageRouting.home)}> {m.home()} </a>
			</div>
		</div>
	</div>
</div>

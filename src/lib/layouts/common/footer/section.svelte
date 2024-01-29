<script lang="ts">
	import { page } from '$app/stores';

	import { PUBLIC_EMAIL, PUBLIC_GITHUB, PUBLIC_LINKEDIN } from '$env/static/public';

	import { Container, ContainerContent } from '$lib/components/ui/container';

	import { pageRoutingHandler } from '$lib/utils/page-routing';

	import * as m from '$i18n/messages';
	import { availableLanguageTags } from '$i18n/runtime';

	import PageNavItem from './page-nav-item.svelte';
	import PageNav from './page-nav.svelte';

	import { navigate } from '$lib/libs/i18n/routing';

	$: console.log($page.url.pathname);

	const pageRouting = pageRoutingHandler();
</script>

<footer class="border-t border-base-content/5 bg-base-200 py-2" id="contact">
	<Container padding="top">
		<ContainerContent class="space-y-10 text-center lg:text-start">
			<div class="flex flex-col-reverse justify-between gap-12 lg:flex-row">
				<div class="flex flex-col gap-10 lg:flex-row">
					<PageNav root="address" title={m.contact()}>
						<p>
							<a href={`mailto:${PUBLIC_EMAIL}`} class="link-hover link">Email</a>
						</p>
						<p>
							<a
								href={PUBLIC_GITHUB}
								class="link-hover link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</a>
						</p>
						<p>
							<a
								href={PUBLIC_LINKEDIN}
								class="link-hover link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Linkedin
							</a>
						</p>
					</PageNav>

					<PageNav root="ul" title={m.pages()}>
						<PageNavItem
							href={pageRouting.home}
							active={availableLanguageTags.some((lang) => $page.url.pathname.endsWith(lang)) ||
								$page.url.pathname.endsWith(pageRouting.home)}
						>
							{m.home()}
						</PageNavItem>
						<PageNavItem
							href={pageRouting.projects}
							active={$page.url.pathname.includes(pageRouting.projects)}
						>
							{m.projects()}
						</PageNavItem>
						<PageNavItem
							href={pageRouting.blogs}
							active={$page.url.pathname.includes(pageRouting.blogs)}
						>
							{m.blogs()}
						</PageNavItem>

						<PageNavItem
							href={pageRouting.about}
							active={$page.url.pathname.includes(pageRouting.about)}
						>
							{m.about()}
						</PageNavItem>
					</PageNav>
				</div>
				<h1 class="text-4xl font-bold">Gernii</h1>
			</div>
			<div class="flex flex-col items-center justify-end gap-y-3 lg:flex-row">
				<!-- ! fix this -->
				<div class="space-y-3">
					<p>
						Copyright {new Date().getFullYear()} Gernii.
					</p>
					<ul class="hidden flex-wrap justify-center gap-x-3 font-semibold lg:justify-end">
						<li>
							<a href={navigate('/')} aria-label={'Sitemap'}>Sitemap</a>
						</li>
						<li>
							<a href={navigate('/')} aria-label="Cookies Policy">Cookies Policy</a>
						</li>
						<li>
							<a href={navigate('/')} aria-label="Privacy Policy">Privacy Policy</a>
						</li>
						<li>
							<a href={navigate('/')} aria-label="Terms of Use">Terms of Use</a>
						</li>
					</ul>
				</div>
			</div>
		</ContainerContent>
	</Container>
</footer>

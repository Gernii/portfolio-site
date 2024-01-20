<script lang="ts">
	import { Container, ContainerContent } from '$lib/components/ui/container';

	import * as m from '$i18n/messages';

	import { navigate } from '$lib/libs/i18n/routing';
</script>

<footer class="border-t border-base-content/5 bg-base-200 py-2" id="contact">
	<Container padding="top">
		<ContainerContent class="space-y-10 text-center lg:text-start">
			<div class="flex flex-col-reverse justify-between gap-12 lg:flex-row">
				<div class="flex flex-col gap-10 lg:flex-row">
					<div class="space-y-5">
						<p class="text-lg font-semibold">{m.contact()}</p>
						<address class="space-y-3 not-italic">
							<p>
								<a href="mailto:anhducngole2001@gmail.com" class="link-hover link">Email</a>
							</p>
							<p>
								<a
									href="https://github.com/Gernii"
									class="link-hover link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</a>
							</p>
							<p>
								<a
									href="https://www.linkedin.com/in/gernii"
									class="link-hover link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Linkedin
								</a>
							</p>
						</address>
					</div>
				</div>
				<h1 class="text-4xl font-bold">Gernii</h1>
			</div>
			<div class="flex flex-col items-center justify-between gap-y-3 lg:flex-row">
				<div class="flex flex-wrap gap-x-4">
					<!-- <a
						href="https://www.facebook.com/cotaivn"
						aria-label={'Facebook'}
						class="btn btn-square"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconFacebook class="size-6" />
					</a>
					<a
						href="https://www.linkedin.com/company/cotai/mycompany"
						aria-label={'Linkedin'}
						class="btn btn-square"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconLinkedin class="size-6" />
					</a>
					<a
						href="https://www.youtube.com/@cotai"
						aria-label={'Youtube'}
						class="btn btn-square"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconYoutube class="size-6" />
					</a> -->
				</div>
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

<script lang="ts">
	import { onMount } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '$lib/styles/global.css';
	import Navigation from '$lib/components/nav/Navigation.svelte';
	import CustomCursor from '$lib/components/ui/CustomCursor.svelte';
	import ScrollProgress from '$lib/components/ui/ScrollProgress.svelte';
	import PageTransition from '$lib/layouts/PageTransition.svelte';
	import { SITE_NAME, SITE_DESCRIPTION } from '$lib/constants';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let gsapReady = false;

	onMount(async () => {
		const { initGSAP } = await import('$lib/gsap/index');
		const { initLenis } = await import('$lib/lenis');
		const { initParallaxElements } = await import('$lib/gsap/parallax');

		initLenis();
		initGSAP();
		initParallaxElements();
		gsapReady = true;
	});

	beforeNavigate(() => {
		if (gsapReady) {
			import('$lib/gsap/index').then(({ cleanupGSAP }) => {
				cleanupGSAP();
			});
		}
	});

	afterNavigate(() => {
		if (gsapReady) {
			requestAnimationFrame(() => {
				import('$lib/gsap/index').then(({ initGSAP }) => {
					initGSAP();
				});
				import('$lib/gsap/parallax').then(({ initParallaxElements }) => {
					initParallaxElements();
				});
			});
		}
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<meta name="description" content={SITE_DESCRIPTION} />
	<meta property="og:title" content={SITE_NAME} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:type" content="website" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<CustomCursor />
<ScrollProgress />
<Navigation />

<div class="page-wrapper bg-paper">
	<main id="main-content">
		<PageTransition>
			{@render children()}
		</PageTransition>
	</main>

	<footer class="site-footer">
		<div class="container text-center">
			<div class="footer__divider" aria-hidden="true">
				<svg viewBox="0 0 300 12" preserveAspectRatio="none">
					<path
						d="M0,6 C40,2 80,10 120,6 S200,2 240,6 S280,10 300,6"
						stroke="var(--color-ink-light)"
						stroke-width="1"
						fill="none"
						stroke-linecap="round"
					/>
				</svg>
			</div>
			<p class="footer__name text-hand">Whitney Yuen</p>
			<p class="footer__copyright">&copy; {new Date().getFullYear()} Whitney Yuen. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	.site-footer {
		padding: var(--space-16) 0 var(--space-8);
		text-align: center;
	}

	.footer__divider {
		max-width: 200px;
		margin: 0 auto var(--space-8);
		opacity: 0.3;
	}

	.footer__divider svg {
		width: 100%;
		height: auto;
	}

	.footer__name {
		font-size: var(--text-3xl);
		margin-bottom: var(--space-3);
		color: var(--color-ink-primary);
	}

	.footer__copyright {
		font-size: var(--text-sm);
		color: var(--color-ink-light);
	}
</style>

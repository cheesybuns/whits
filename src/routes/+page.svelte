<script lang="ts">
	import { categories } from '$lib/categories';
	import CategorySection from '$lib/components/ui/CategorySection.svelte';
	import SectionDivider from '$lib/components/decorative/SectionDivider.svelte';
	import HandDrawnArrow from '$lib/components/decorative/HandDrawnArrow.svelte';
	import InkSplatter from '$lib/components/decorative/InkSplatter.svelte';
</script>

<svelte:head>
	<title>Whitney Yuen | Creative Artist</title>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="hero__inner container">
		<div class="hero__text" data-animate="fade-up">
			<h1 class="hero__name">Whitney Yuen</h1>
			<p class="hero__tagline text-hand">
				artist&ensp;.&ensp;baker&ensp;.&ensp;dreamer&ensp;.&ensp;maker
			</p>
		</div>

		<!-- Decorative sketched elements around hero -->
		<div class="hero__doodle hero__doodle--1" data-parallax="0.3" aria-hidden="true">
			<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="50" cy="50" r="40" stroke="var(--color-ink-light)" stroke-width="1" stroke-dasharray="6 4" opacity="0.3" />
				<circle cx="50" cy="50" r="25" stroke="var(--color-accent-rose)" stroke-width="0.8" opacity="0.25" />
			</svg>
		</div>
		<div class="hero__doodle hero__doodle--2" data-parallax="0.5" aria-hidden="true">
			<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10,40 Q25,10 40,40 T70,40" stroke="var(--color-accent-ochre)" stroke-width="1.5" opacity="0.2" stroke-linecap="round" />
				<path d="M15,55 Q30,25 45,55 T75,55" stroke="var(--color-accent-sage)" stroke-width="1" opacity="0.15" stroke-linecap="round" />
			</svg>
		</div>
		<div class="hero__doodle hero__doodle--3" data-parallax="0.2" aria-hidden="true">
			<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="10" y="10" width="40" height="40" rx="2" stroke="var(--color-ink-light)" stroke-width="1" stroke-dasharray="8 6" opacity="0.2" transform="rotate(12 30 30)" />
			</svg>
		</div>
	</div>

	<div class="hero__scroll-cue" data-animate="fade">
		<span class="text-hand">scroll to explore</span>
		<HandDrawnArrow direction="down" size={32} />
	</div>

	<InkSplatter size={200} top="15%" right="8%" rotation={-15} variant={0} />
	<InkSplatter size={140} bottom="20%" left="5%" rotation={30} variant={1} />
</section>

<!-- Category Sections -->
{#each categories as category, i}
	<SectionDivider variant={i} />
	<CategorySection {category} index={i} />
{/each}

<style>
	.hero {
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		padding: var(--space-20) var(--gutter);
	}

	.hero__inner {
		text-align: center;
		position: relative;
		z-index: var(--z-base);
	}

	.hero__name {
		margin-bottom: var(--space-4);
	}

	.hero__tagline {
		font-size: clamp(var(--text-xl), 3vw, var(--text-3xl));
		color: var(--color-ink-secondary);
		letter-spacing: 0.05em;
	}

	.hero__scroll-cue {
		position: absolute;
		bottom: var(--space-8);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-2);
		color: var(--color-ink-light);
		font-size: var(--text-lg);
	}

	/* Decorative doodles floating around the hero */
	.hero__doodle {
		position: absolute;
		pointer-events: none;
	}

	.hero__doodle--1 {
		width: 120px;
		top: 18%;
		right: 12%;
	}

	.hero__doodle--2 {
		width: 100px;
		bottom: 25%;
		left: 8%;
	}

	.hero__doodle--3 {
		width: 80px;
		top: 30%;
		left: 15%;
	}

	@media (max-width: 768px) {
		.hero__doodle {
			opacity: 0.5;
		}

		.hero__doodle--1 {
			width: 80px;
			right: 5%;
		}

		.hero__doodle--2 {
			width: 70px;
			left: 3%;
		}

		.hero__doodle--3 {
			display: none;
		}
	}
</style>

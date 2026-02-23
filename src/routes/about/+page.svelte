<script lang="ts">
	import BrushStroke from '$lib/components/decorative/BrushStroke.svelte';
</script>

<svelte:head>
	<title>About | Whitney Yuen</title>
</svelte:head>

<section class="about-hero">
	<div class="container container--narrow text-center">
		<h1 class="about__title" data-animate="fade-up">About Whitney</h1>
		<div class="about__stroke" aria-hidden="true">
			<BrushStroke color="var(--color-accent-rose)" width="250px" opacity={0.25} />
		</div>
	</div>
</section>

<section class="about-content">
	<div class="container container--narrow">
		<div class="about__body" data-animate="fade-up">
			<p>
				Whitney Yuen is a multi-disciplinary creative who moves fluidly between digital and
				physical mediums. From tablet to tattoo needle, from canvas to kitchen — every surface
				is an opportunity to create something beautiful.
			</p>
			<p>
				Primarily a digital artist, Whitney brings the same meticulous eye for composition and
				color to tattoo artistry and pastry design. Photography captures the world as she sees
				it. Drawing and painting are where the ideas begin. Music ties it all together.
			</p>
			<p>
				This portfolio is a living sketchbook — flip through the pages, explore the work, and
				see where creativity takes you.
			</p>
		</div>
	</div>
</section>

<style>
	.about-hero {
		padding: var(--space-32) 0 var(--space-8);
	}

	.about__title {
		color: var(--color-accent-rose);
	}

	.about__stroke {
		display: flex;
		justify-content: center;
		margin-top: var(--space-3);
	}

	.about-content {
		padding: var(--space-8) 0 var(--space-24);
	}

	.about__body {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		font-size: var(--text-lg);
		line-height: var(--leading-relaxed);
		color: var(--color-ink-secondary);
	}
</style>

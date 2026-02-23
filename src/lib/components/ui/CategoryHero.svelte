<script lang="ts">
	interface Props {
		title: string;
		accentColor: string;
		tagline?: string;
	}

	let { title, accentColor, tagline = '' }: Props = $props();
</script>

<section class="cat-hero" style="--accent: {accentColor};">
	<div class="container text-center">
		{#if tagline}
			<span class="cat-hero__tagline text-annotation" data-animate="fade">{tagline}</span>
		{/if}
		<h1 class="cat-hero__title" data-animate="fade-up">{title}</h1>
		<div class="cat-hero__line" aria-hidden="true">
			<svg viewBox="0 0 300 16" preserveAspectRatio="none">
				<path
					d="M0,10 C40,4 80,14 120,8 S200,4 240,10 S280,14 300,8"
					stroke="var(--accent)"
					stroke-width="3"
					fill="none"
					stroke-linecap="round"
					data-animate="draw"
				/>
			</svg>
		</div>
	</div>
</section>

<style>
	.cat-hero {
		padding: var(--space-32) 0 var(--space-16);
	}

	.cat-hero__tagline {
		color: var(--accent);
		margin-bottom: var(--space-3);
		display: block;
	}

	.cat-hero__title {
		color: var(--accent);
	}

	.cat-hero__line {
		max-width: 280px;
		margin: var(--space-4) auto 0;
		opacity: 0.45;
	}

	.cat-hero__line svg {
		width: 100%;
		height: auto;
	}
</style>

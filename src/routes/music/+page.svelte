<script lang="ts">
	import CategoryHero from '$lib/components/ui/CategoryHero.svelte';
</script>

<svelte:head>
	<title>Music | Whitney Yuen</title>
</svelte:head>

<CategoryHero title="Music" accentColor="var(--color-cat-music)" tagline="sound & soul" />

<div class="container">
	<section class="music-content" data-animate="fade-up">
		<p class="text-hand music-note">Coming soon — stay tuned.</p>
		<div class="music-placeholder">
			<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<circle cx="40" cy="55" r="12" stroke="var(--color-cat-music)" stroke-width="2" fill="none" opacity="0.4" />
				<path d="M52,55 L52,15 L68,20 L68,25" stroke="var(--color-cat-music)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.4" />
			</svg>
		</div>
	</section>
</div>

<style>
	.music-content {
		text-align: center;
		padding: var(--space-16) 0 var(--space-32);
	}

	.music-note {
		font-size: var(--text-2xl);
		color: var(--color-ink-secondary);
	}

	.music-placeholder {
		margin-top: var(--space-8);
		opacity: 0.5;
	}

	.music-placeholder svg {
		width: 80px;
		height: 80px;
		margin: 0 auto;
	}
</style>

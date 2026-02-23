<script lang="ts">
	interface Props {
		title: string;
		image?: string;
		href?: string;
	}

	let { title, image, href = '#' }: Props = $props();

	// Slightly random tilt for each card
	const tilt = (Math.random() * 3 - 1.5).toFixed(1);
</script>

<a {href} class="card" style="--tilt: {tilt}deg;">
	<div class="card__tape"></div>
	<div class="card__img-wrap">
		{#if image}
			<img src={image} alt={title} loading="lazy" />
		{:else}
			<div class="card__placeholder"></div>
		{/if}
	</div>
	<p class="card__title text-hand">{title}</p>
</a>

<style>
	.card {
		display: block;
		background: white;
		padding: var(--space-2);
		box-shadow: var(--shadow-paper);
		transform: rotate(var(--tilt, 0deg));
		position: relative;
		transition: transform var(--duration-normal) var(--ease-out),
			box-shadow var(--duration-normal) var(--ease-out);
	}

	.card:hover {
		transform: rotate(0deg) translateY(-6px);
		box-shadow: var(--shadow-lifted);
	}

	.card__tape {
		position: absolute;
		width: 60px;
		height: 20px;
		background: rgba(255, 245, 220, 0.55);
		border: 1px solid rgba(200, 180, 140, 0.2);
		top: -10px;
		left: 50%;
		translate: -50% 0;
		transform: rotate(-3deg);
		z-index: 2;
	}

	.card__img-wrap {
		overflow: hidden;
		aspect-ratio: 4 / 3;
	}

	.card__img-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--duration-slow) var(--ease-out);
	}

	.card:hover img {
		transform: scale(1.05);
	}

	.card__placeholder {
		width: 100%;
		height: 100%;
		background: linear-gradient(
			135deg,
			var(--color-bg-secondary) 0%,
			var(--color-bg-accent) 100%
		);
	}

	.card__title {
		margin-top: var(--space-3);
		text-align: center;
		font-size: var(--text-lg);
		color: var(--color-ink-secondary);
	}
</style>

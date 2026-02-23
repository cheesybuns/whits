<script lang="ts">
	import type { Category } from '$lib/categories';
	import InkSplatter from '$lib/components/decorative/InkSplatter.svelte';

	interface Props {
		category: Category;
		index: number;
	}

	let { category, index }: Props = $props();
	const isEven = index % 2 === 0;
</script>

<section
	class="flavor"
	class:bg-paper={isEven}
	class:bg-paper-warm={!isEven}
	style="--accent: {category.accentColor};"
>
	<div class="flavor__inner container" class:reverse={!isEven}>
		<div class="flavor__text" data-animate="fade-up">
			<span class="flavor__tagline text-annotation" style="color: {category.accentColor};">
				{category.tagline}
			</span>
			<h2 class="flavor__title">{category.title}</h2>
			<p class="flavor__desc">{category.description}</p>
			<a href="/{category.slug}" class="flavor__cta">
				Explore {category.title}
				<svg class="flavor__cta-arrow" viewBox="0 0 24 12" fill="none" aria-hidden="true">
					<path d="M0,6 L20,6 M15,1 L21,6 L15,11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>

		<div class="flavor__preview" data-animate="stagger">
			{#each ['-2.5deg', '1.8deg', '-0.8deg'] as tilt, i}
				<div class="preview-card" style="--tilt: {tilt};">
					<div class="preview-card__tape"></div>
					<div class="preview-card__image"></div>
					<p class="preview-card__label text-hand">work {i + 1}</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Decorative splatter -->
	<InkSplatter
		size={150}
		top={isEven ? '10%' : 'auto'}
		bottom={isEven ? 'auto' : '5%'}
		right={isEven ? '5%' : 'auto'}
		left={isEven ? 'auto' : '3%'}
		rotation={index * 45}
		variant={index}
	/>
</section>

<style>
	.flavor {
		padding: var(--space-section) 0;
		position: relative;
		overflow: hidden;
	}

	.flavor__inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-12);
		align-items: center;
	}

	.flavor__inner.reverse {
		direction: rtl;
	}

	.flavor__inner.reverse > :global(*) {
		direction: ltr;
	}

	.flavor__tagline {
		margin-bottom: var(--space-3);
	}

	.flavor__title {
		color: var(--accent);
		margin-bottom: var(--space-4);
	}

	.flavor__desc {
		color: var(--color-ink-secondary);
		line-height: var(--leading-relaxed);
		max-width: 460px;
	}

	.flavor__cta {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		margin-top: var(--space-6);
		font-family: var(--font-hand);
		font-size: var(--text-xl);
		font-weight: 600;
		color: var(--accent);
		transition: gap var(--duration-fast) var(--ease-out);
	}

	.flavor__cta:hover {
		gap: var(--space-4);
	}

	.flavor__cta-arrow {
		width: 24px;
		height: 12px;
		transition: transform var(--duration-fast) var(--ease-out);
	}

	.flavor__cta:hover .flavor__cta-arrow {
		transform: translateX(4px);
	}

	.flavor__preview {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
		position: relative;
	}

	.preview-card {
		background: white;
		padding: var(--space-2);
		box-shadow: var(--shadow-paper);
		transform: rotate(var(--tilt, 0deg));
		position: relative;
		transition: transform var(--duration-normal) var(--ease-out),
			box-shadow var(--duration-normal) var(--ease-out);
	}

	.preview-card:hover {
		transform: rotate(0deg) translateY(-4px);
		box-shadow: var(--shadow-lifted);
	}

	.preview-card__tape {
		position: absolute;
		width: 60px;
		height: 20px;
		background: rgba(255, 245, 220, 0.6);
		border: 1px solid rgba(200, 180, 140, 0.2);
		top: -10px;
		left: 50%;
		translate: -50% 0;
		transform: rotate(-2deg);
		z-index: 2;
	}

	.preview-card__image {
		aspect-ratio: 3 / 4;
		background: linear-gradient(
			135deg,
			var(--color-bg-secondary) 0%,
			var(--color-bg-accent) 100%
		);
	}

	.preview-card__label {
		text-align: center;
		margin-top: var(--space-2);
		font-size: var(--text-sm);
		color: var(--color-ink-light);
	}

	@media (max-width: 768px) {
		.flavor__inner {
			grid-template-columns: 1fr;
			gap: var(--space-8);
		}

		.flavor__inner.reverse {
			direction: ltr;
		}

		.flavor__preview {
			max-width: 400px;
		}
	}
</style>

<script lang="ts">
	interface Props {
		variant?: number;
	}

	let { variant = 0 }: Props = $props();
</script>

<div class="divider" aria-hidden="true">
	{#if variant % 3 === 0}
		<!-- Wavy hand-drawn line -->
		<svg viewBox="0 0 400 20" preserveAspectRatio="none">
			<path
				d="M0,10 C30,4 60,16 100,10 S160,4 200,10 S260,16 300,10 S360,4 400,10"
				stroke="currentColor"
				stroke-width="1.5"
				fill="none"
				stroke-linecap="round"
				data-animate="draw"
			/>
		</svg>
	{:else if variant % 3 === 1}
		<!-- Scattered dots -->
		<svg viewBox="0 0 400 20" preserveAspectRatio="none">
			<circle cx="50" cy="10" r="2" fill="currentColor" opacity="0.5" />
			<circle cx="120" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
			<circle cx="180" cy="12" r="2.5" fill="currentColor" opacity="0.3" />
			<circle cx="240" cy="7" r="1.8" fill="currentColor" opacity="0.5" />
			<circle cx="310" cy="13" r="2" fill="currentColor" opacity="0.35" />
			<circle cx="370" cy="9" r="1.5" fill="currentColor" opacity="0.45" />
		</svg>
	{:else}
		<!-- Dashed sketch line -->
		<svg viewBox="0 0 400 20" preserveAspectRatio="none">
			<path
				d="M0,10 L400,10"
				stroke="currentColor"
				stroke-width="1.5"
				fill="none"
				stroke-dasharray="12 8 6 8"
				stroke-linecap="round"
				data-animate="draw"
			/>
		</svg>
	{/if}
</div>

<style>
	.divider {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		padding: var(--space-2) var(--gutter);
		color: var(--color-ink-light);
		opacity: 0.35;
	}

	.divider svg {
		width: 100%;
		height: auto;
	}
</style>

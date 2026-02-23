<script lang="ts">
	interface Props {
		color?: string;
		width?: string;
		opacity?: number;
	}

	let { color = 'var(--color-ink-primary)', width = '200px', opacity = 0.15 }: Props = $props();
</script>

<span class="brush-stroke" style="width: {width}; --stroke-color: {color}; --stroke-opacity: {opacity};" aria-hidden="true">
	<svg viewBox="0 0 200 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M2,8 C20,4 40,12 70,7 S120,3 150,9 S180,12 198,7"
			stroke="var(--stroke-color)"
			stroke-width="8"
			fill="none"
			stroke-linecap="round"
			opacity="var(--stroke-opacity)"
		/>
	</svg>
</span>

<style>
	.brush-stroke {
		display: block;
		pointer-events: none;
	}

	.brush-stroke svg {
		width: 100%;
		height: auto;
	}
</style>

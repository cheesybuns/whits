<script lang="ts">
	interface Props {
		direction?: 'down' | 'right' | 'left' | 'up';
		size?: number;
	}

	let { direction = 'down', size = 40 }: Props = $props();

	const rotations = {
		down: 0,
		right: -90,
		up: 180,
		left: 90
	};
</script>

<span
	class="hand-arrow"
	style="width: {size}px; height: {size}px; transform: rotate({rotations[direction]}deg);"
	aria-hidden="true"
>
	<svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M20,2 C19,10 21,20 20,35"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			d="M10,28 C14,32 18,36 20,40 C22,36 26,32 30,28"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</span>

<style>
	.hand-arrow {
		display: inline-block;
		color: var(--color-ink-secondary);
		animation: float 3s ease-in-out infinite;
	}
</style>

<script lang="ts">
	interface Props {
		size?: number;
		top?: string;
		left?: string;
		right?: string;
		bottom?: string;
		rotation?: number;
		variant?: number;
	}

	let {
		size = 120,
		top = 'auto',
		left = 'auto',
		right = 'auto',
		bottom = 'auto',
		rotation = 0,
		variant = 0
	}: Props = $props();
</script>

<div
	class="ink-splatter"
	style="width: {size}px; height: {size}px; top: {top}; left: {left}; right: {right}; bottom: {bottom}; transform: rotate({rotation}deg);"
	aria-hidden="true"
>
	{#if variant % 2 === 0}
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M50,15 C60,10 75,20 70,35 S80,50 75,65 S65,85 50,80 S30,75 25,60 S20,35 35,25 Z"
				fill="currentColor"
			/>
			<circle cx="78" cy="30" r="3" fill="currentColor" />
			<circle cx="25" cy="70" r="2" fill="currentColor" />
			<circle cx="70" cy="75" r="2.5" fill="currentColor" />
		</svg>
	{:else}
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M45,20 C55,12 70,18 72,30 S85,45 78,58 S70,80 55,82 S32,78 28,65 S18,42 30,30 Z"
				fill="currentColor"
			/>
			<circle cx="82" cy="42" r="2.5" fill="currentColor" />
			<circle cx="22" cy="55" r="2" fill="currentColor" />
		</svg>
	{/if}
</div>

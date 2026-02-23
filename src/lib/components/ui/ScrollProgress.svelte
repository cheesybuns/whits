<script lang="ts">
	import { onMount } from 'svelte';

	let progress = $state(0);

	onMount(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="scroll-progress" aria-hidden="true">
	<svg viewBox="0 0 1000 6" preserveAspectRatio="none">
		<path
			d="M0,3 C50,1 100,5 200,3 S350,1 500,3 S650,5 800,3 S900,1 1000,3"
			stroke="var(--color-ink-primary)"
			stroke-width="3"
			fill="none"
			stroke-linecap="round"
			stroke-dasharray="1000"
			stroke-dashoffset={1000 - (progress / 100) * 1000}
		/>
	</svg>
</div>

<style>
	.scroll-progress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: calc(var(--z-nav) + 1);
		height: 4px;
		pointer-events: none;
		opacity: 0.4;
	}

	.scroll-progress svg {
		width: 100%;
		height: 100%;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let x = $state(0);
	let y = $state(0);
	let isHovering = $state(false);
	let isVisible = $state(false);
	let isTouch = $state(true);

	onMount(() => {
		isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
		if (isTouch) return;

		const handleMove = (e: MouseEvent) => {
			x = e.clientX;
			y = e.clientY;
			if (!isVisible) isVisible = true;
		};

		const handleOver = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target.closest('a, button, [data-cursor-hover]')) {
				isHovering = true;
			}
		};

		const handleOut = (e: MouseEvent) => {
			const target = e.relatedTarget as HTMLElement | null;
			if (!target?.closest('a, button, [data-cursor-hover]')) {
				isHovering = false;
			}
		};

		const handleLeave = () => {
			isVisible = false;
		};

		document.addEventListener('mousemove', handleMove);
		document.addEventListener('mouseover', handleOver);
		document.addEventListener('mouseout', handleOut);
		document.addEventListener('mouseleave', handleLeave);

		return () => {
			document.removeEventListener('mousemove', handleMove);
			document.removeEventListener('mouseover', handleOver);
			document.removeEventListener('mouseout', handleOut);
			document.removeEventListener('mouseleave', handleLeave);
		};
	});
</script>

{#if browser && !isTouch}
	<div
		class="cursor"
		class:visible={isVisible}
		class:hovering={isHovering}
		style="transform: translate({x}px, {y}px)"
	>
		<!-- Hand-drawn dot / pen tip -->
		<svg viewBox="0 0 28 28" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="14" cy="14" r="4" fill="var(--color-ink-primary)" opacity="0.7" />
			<circle cx="14" cy="14" r="12" stroke="var(--color-ink-primary)" stroke-width="1.5" opacity="0.3"
				stroke-dasharray="4 3" />
		</svg>
	</div>
{/if}

<style>
	:global(body:has(.cursor.visible)) {
		cursor: none;
	}

	:global(body:has(.cursor.visible) a),
	:global(body:has(.cursor.visible) button) {
		cursor: none;
	}

	.cursor {
		position: fixed;
		top: -14px;
		left: -14px;
		pointer-events: none;
		z-index: var(--z-cursor);
		opacity: 0;
		transition: opacity 0.3s;
		mix-blend-mode: exclusion;
	}

	.cursor.visible {
		opacity: 1;
	}

	.cursor.hovering svg {
		transform: scale(1.8);
		transition: transform 0.25s var(--ease-out);
	}

	.cursor svg {
		transition: transform 0.25s var(--ease-out);
	}

	@media (hover: none), (pointer: coarse) {
		.cursor {
			display: none;
		}
	}
</style>

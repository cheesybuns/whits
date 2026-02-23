<script lang="ts">
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

{#key page.url.pathname}
	<div in:fly={{ y: 15, duration: 400, delay: 100 }}>
		{@render children()}
	</div>
{/key}

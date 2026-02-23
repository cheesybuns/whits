<script lang="ts">
	import CategoryHero from '$lib/components/ui/CategoryHero.svelte';
	import GalleryGrid from '$lib/components/gallery/GalleryGrid.svelte';
	import WorkCard from '$lib/components/gallery/WorkCard.svelte';

	const works = [
		{ title: 'Character Study I' },
		{ title: 'Neon Dreams' },
		{ title: 'Digital Flora' },
		{ title: 'Portrait Series' },
		{ title: 'Abstract Motion' },
		{ title: 'Concept Art' },
		{ title: 'Illustration Set' },
		{ title: 'Color Exploration' },
		{ title: 'Digital Sketch' }
	];
</script>

<svelte:head>
	<title>Digital Art | Whitney Yuen</title>
</svelte:head>

<CategoryHero title="Digital Art" accentColor="var(--color-cat-digital)" tagline="pixels & dreams" />

<div class="container">
	<GalleryGrid>
		{#each works as work}
			<WorkCard title={work.title} />
		{/each}
	</GalleryGrid>
</div>

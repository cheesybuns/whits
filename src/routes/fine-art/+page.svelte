<script lang="ts">
	import CategoryHero from '$lib/components/ui/CategoryHero.svelte';
	import GalleryGrid from '$lib/components/gallery/GalleryGrid.svelte';
	import WorkCard from '$lib/components/gallery/WorkCard.svelte';

	const works = [
		{ title: 'Charcoal Study' },
		{ title: 'Oil on Canvas' },
		{ title: 'Watercolor Bloom' },
		{ title: 'Graphite Portraits' },
		{ title: 'Mixed Media' },
		{ title: 'Ink Wash' }
	];
</script>

<svelte:head>
	<title>Fine Art | Whitney Yuen</title>
</svelte:head>

<CategoryHero title="Fine Art" accentColor="var(--color-cat-fineart)" tagline="pencil & paint" />

<div class="container">
	<GalleryGrid>
		{#each works as work}
			<WorkCard title={work.title} />
		{/each}
	</GalleryGrid>
</div>

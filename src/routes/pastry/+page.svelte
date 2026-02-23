<script lang="ts">
	import CategoryHero from '$lib/components/ui/CategoryHero.svelte';
	import GalleryGrid from '$lib/components/gallery/GalleryGrid.svelte';
	import WorkCard from '$lib/components/gallery/WorkCard.svelte';

	const works = [
		{ title: 'Layer Cake' },
		{ title: 'Croissant Series' },
		{ title: 'Decorated Cookies' },
		{ title: 'Wedding Cake' },
		{ title: 'Petit Fours' },
		{ title: 'Bread Basket' }
	];
</script>

<svelte:head>
	<title>Pastry | Whitney Yuen</title>
</svelte:head>

<CategoryHero title="Pastry" accentColor="var(--color-cat-pastry)" tagline="sweet creations" />

<div class="container">
	<GalleryGrid>
		{#each works as work}
			<WorkCard title={work.title} />
		{/each}
	</GalleryGrid>
</div>

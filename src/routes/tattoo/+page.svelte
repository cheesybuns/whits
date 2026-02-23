<script lang="ts">
	import CategoryHero from '$lib/components/ui/CategoryHero.svelte';
	import GalleryGrid from '$lib/components/gallery/GalleryGrid.svelte';
	import WorkCard from '$lib/components/gallery/WorkCard.svelte';

	const works = [
		{ title: 'Floral Sleeve' },
		{ title: 'Geometric Line Work' },
		{ title: 'Custom Script' },
		{ title: 'Blackwork Piece' },
		{ title: 'Botanical Study' },
		{ title: 'Fine Line Portrait' }
	];
</script>

<svelte:head>
	<title>Tattoo | Whitney Yuen</title>
</svelte:head>

<CategoryHero title="Tattoo" accentColor="var(--color-cat-tattoo)" tagline="ink on skin" />

<div class="container">
	<GalleryGrid>
		{#each works as work}
			<WorkCard title={work.title} />
		{/each}
	</GalleryGrid>
</div>

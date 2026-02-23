<script lang="ts">
	import CategoryHero from '$lib/components/ui/CategoryHero.svelte';
	import GalleryGrid from '$lib/components/gallery/GalleryGrid.svelte';
	import WorkCard from '$lib/components/gallery/WorkCard.svelte';

	const works = [
		{ title: 'Golden Hour' },
		{ title: 'Street Life' },
		{ title: 'Portraits' },
		{ title: 'Macro Series' },
		{ title: 'Night Walks' },
		{ title: 'Film Grain' }
	];
</script>

<svelte:head>
	<title>Photography | Whitney Yuen</title>
</svelte:head>

<CategoryHero title="Photography" accentColor="var(--color-cat-photo)" tagline="light & shadow" />

<div class="container">
	<GalleryGrid>
		{#each works as work}
			<WorkCard title={work.title} />
		{/each}
	</GalleryGrid>
</div>

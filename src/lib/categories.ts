export interface Category {
	title: string;
	slug: string;
	description: string;
	accentColor: string;
	tagline: string;
}

export const categories: Category[] = [
	{
		title: 'Digital Art',
		slug: 'digital-art',
		description: 'Illustrations, character designs, and digital paintings that blur the line between imagination and screen.',
		accentColor: 'var(--color-cat-digital)',
		tagline: 'pixels & dreams'
	},
	{
		title: 'Tattoo',
		slug: 'tattoo',
		description: 'Custom tattoo designs and completed works — permanent art etched into skin.',
		accentColor: 'var(--color-cat-tattoo)',
		tagline: 'ink on skin'
	},
	{
		title: 'Pastry',
		slug: 'pastry',
		description: 'Cakes, pastries, and edible art crafted with the same precision as any canvas.',
		accentColor: 'var(--color-cat-pastry)',
		tagline: 'sweet creations'
	},
	{
		title: 'Photography',
		slug: 'photography',
		description: 'Capturing moments, moods, and the beauty hidden in the everyday.',
		accentColor: 'var(--color-cat-photo)',
		tagline: 'light & shadow'
	},
	{
		title: 'Fine Art',
		slug: 'fine-art',
		description: 'Traditional drawings, paintings, and mixed media — where it all started.',
		accentColor: 'var(--color-cat-fineart)',
		tagline: 'pencil & paint'
	},
	{
		title: 'Music',
		slug: 'music',
		description: 'Musical explorations and compositions that soundtrack the creative process.',
		accentColor: 'var(--color-cat-music)',
		tagline: 'sound & soul'
	}
];

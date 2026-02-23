<script lang="ts">
	import BrushStroke from '$lib/components/decorative/BrushStroke.svelte';
</script>

<svelte:head>
	<title>Contact | Whitney Yuen</title>
</svelte:head>

<section class="contact-hero">
	<div class="container container--narrow text-center">
		<h1 class="contact__title" data-animate="fade-up">Get in Touch</h1>
		<div class="contact__stroke" aria-hidden="true">
			<BrushStroke color="var(--color-accent-ochre)" width="220px" opacity={0.25} />
		</div>
	</div>
</section>

<section class="contact-content">
	<div class="container container--narrow">
		<div class="contact__body" data-animate="fade-up">
			<p class="contact__intro">
				Interested in a collaboration, commission, or just want to say hello?
				I'd love to hear from you.
			</p>

			<div class="contact__methods" data-animate="stagger">
				<div class="contact__method">
					<span class="contact__label text-hand">Email</span>
					<a href="mailto:hello@whitneyyuen.com" class="contact__link">hello@whitneyyuen.com</a>
				</div>
				<div class="contact__method">
					<span class="contact__label text-hand">Instagram</span>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="contact__link">@whitneyyuen</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-hero {
		padding: var(--space-32) 0 var(--space-8);
	}

	.contact__title {
		color: var(--color-accent-ochre);
	}

	.contact__stroke {
		display: flex;
		justify-content: center;
		margin-top: var(--space-3);
	}

	.contact-content {
		padding: var(--space-8) 0 var(--space-24);
	}

	.contact__intro {
		font-size: var(--text-lg);
		line-height: var(--leading-relaxed);
		color: var(--color-ink-secondary);
		text-align: center;
		margin-bottom: var(--space-12);
	}

	.contact__methods {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		align-items: center;
	}

	.contact__method {
		text-align: center;
	}

	.contact__label {
		display: block;
		font-size: var(--text-2xl);
		color: var(--color-accent-ochre);
		margin-bottom: var(--space-2);
	}

	.contact__link {
		font-size: var(--text-lg);
		color: var(--color-ink-secondary);
		border-bottom: 1px solid var(--color-ink-light);
		padding-bottom: 2px;
		transition: color var(--duration-fast), border-color var(--duration-fast);
	}

	.contact__link:hover {
		color: var(--color-ink-primary);
		border-color: var(--color-ink-primary);
	}
</style>

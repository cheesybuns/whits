<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from '$lib/constants';
	import { onMount } from 'svelte';

	let isOpen = $state(false);
	let isScrolled = $state(false);
	let isHidden = $state(false);
	let lastScrollY = 0;

	function toggleMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMenu() {
		isOpen = false;
		document.body.style.overflow = '';
	}

	onMount(() => {
		const handleScroll = () => {
			const y = window.scrollY;
			isScrolled = y > 50;
			isHidden = y > lastScrollY && y > 200;
			lastScrollY = y;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Close menu on navigation
	$effect(() => {
		page.url;
		closeMenu();
	});
</script>

<header class="nav" class:scrolled={isScrolled} class:hidden={isHidden}>
	<nav class="nav__inner container" aria-label="Main navigation">
		<a href="/" class="nav__logo text-hand" onclick={closeMenu}>Whitney</a>

		<!-- Desktop links -->
		<ul class="nav__links">
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class="nav__link"
						class:active={page.url.pathname === item.href}
					>
						{item.label}
						<svg class="nav__underline" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true">
							<path d="M0,5 C15,2 30,8 50,4 S85,1 100,5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" />
						</svg>
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile hamburger -->
		<button
			class="nav__hamburger"
			onclick={toggleMenu}
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={isOpen}
		>
			<span class="nav__hamburger-line" class:open={isOpen}></span>
			<span class="nav__hamburger-line" class:open={isOpen}></span>
			<span class="nav__hamburger-line" class:open={isOpen}></span>
		</button>
	</nav>
</header>

<!-- Mobile drawer -->
{#if isOpen}
	<div class="drawer-overlay" onclick={closeMenu} role="presentation"></div>
	<div class="drawer bg-paper-warm" role="dialog" aria-label="Navigation menu">
		<nav>
			<ul class="drawer__links">
				{#each navItems as item, i}
					<li style="animation-delay: {i * 60}ms">
						<a
							href={item.href}
							class="drawer__link text-hand"
							class:active={page.url.pathname === item.href}
							onclick={closeMenu}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-nav);
		transition: transform var(--duration-normal) var(--ease-out),
			background-color var(--duration-normal);
	}

	.nav.scrolled {
		background-color: rgba(245, 240, 232, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.nav.hidden {
		transform: translateY(-100%);
	}

	.nav__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
	}

	.nav__logo {
		font-size: var(--text-3xl);
		font-weight: 700;
		color: var(--color-ink-primary);
		transition: color var(--duration-fast);
		z-index: 1;
	}

	.nav__logo:hover {
		color: var(--color-accent-rose);
	}

	.nav__links {
		display: flex;
		gap: var(--space-6);
	}

	.nav__link {
		position: relative;
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--color-ink-secondary);
		transition: color var(--duration-fast);
		padding: var(--space-2) 0;
	}

	.nav__link:hover {
		color: var(--color-ink-primary);
	}

	.nav__link.active {
		color: var(--color-ink-primary);
	}

	.nav__underline {
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		height: 8px;
		opacity: 0;
		transition: opacity var(--duration-fast);
	}

	.nav__link:hover .nav__underline,
	.nav__link.active .nav__underline {
		opacity: 0.4;
	}

	.nav__link.active .nav__underline {
		opacity: 0.6;
	}

	/* Hamburger */
	.nav__hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		padding: var(--space-2);
		z-index: calc(var(--z-overlay) + 1);
	}

	.nav__hamburger-line {
		display: block;
		width: 28px;
		height: 2px;
		background: var(--color-ink-primary);
		border-radius: 2px;
		transition: transform var(--duration-normal) var(--ease-out),
			opacity var(--duration-fast);
	}

	/* Slightly uneven widths for hand-drawn feel */
	.nav__hamburger-line:nth-child(1) { width: 28px; }
	.nav__hamburger-line:nth-child(2) { width: 24px; }
	.nav__hamburger-line:nth-child(3) { width: 20px; }

	.nav__hamburger-line.open:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
		width: 28px;
	}
	.nav__hamburger-line.open:nth-child(2) {
		opacity: 0;
	}
	.nav__hamburger-line.open:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
		width: 28px;
	}

	/* Drawer */
	.drawer-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: calc(var(--z-overlay) - 1);
	}

	.drawer {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: min(85vw, 400px);
		z-index: var(--z-overlay);
		padding: 100px var(--gutter) var(--space-8);
		overflow-y: auto;
		animation: slideIn var(--duration-normal) var(--ease-out);
	}

	@keyframes slideIn {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}

	.drawer__links {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.drawer__links li {
		opacity: 0;
		animation: fadeInUp var(--duration-normal) var(--ease-out) forwards;
	}

	.drawer__link {
		font-size: var(--text-4xl);
		color: var(--color-ink-secondary);
		display: block;
		padding: var(--space-2) 0;
		transition: color var(--duration-fast), transform var(--duration-fast);
	}

	.drawer__link:hover,
	.drawer__link.active {
		color: var(--color-ink-primary);
		transform: translateX(8px);
	}

	@media (max-width: 900px) {
		.nav__links {
			display: none;
		}
		.nav__hamburger {
			display: flex;
		}
	}
</style>

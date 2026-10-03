<script lang="ts">
	import { navLinks } from '#lib/data/portfolio';

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let active = $state('');

	// Highlight the nav link for the section currently in view.
	$effect(() => {
		const sections = navLinks
			.map((link) => document.querySelector(link.href))
			.filter((el): el is Element => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = `#${entry.target.id}`;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	});

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// Close the mobile menu when a link is chosen.
	function go() {
		menuOpen = false;
	}
</script>

<header class="nav" class:scrolled>
	<div class="container inner">
		<a class="brand" href="#top" onclick={go}>
			<span class="dot"></span>
			<span class="mono">gtan<span class="accent">@</span>web:~$</span>
		</a>

		<nav class="links" class:open={menuOpen} aria-label="Primary">
			{#each navLinks as link (link.href)}
				<a href={link.href} class:active={active === link.href} onclick={go}>{link.label}</a>
			{/each}
			<a class="cta" href="#contact" onclick={go}>Hire me</a>
		</nav>

		<button
			class="burger"
			class:open={menuOpen}
			aria-label="Toggle navigation"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span><span></span>
		</button>
	</div>
</header>

<style>
	.nav {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 50;
		padding-block: 1rem;
		transition:
			background 0.3s ease,
			border-color 0.3s ease,
			padding 0.3s ease;
		border-bottom: 1px solid transparent;
	}

	.nav.scrolled {
		background: rgba(5, 7, 15, 0.72);
		backdrop-filter: blur(14px);
		border-bottom-color: var(--border);
		padding-block: 0.65rem;
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.9rem;
		letter-spacing: -0.01em;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--accent-2);
		box-shadow: 0 0 12px var(--accent-2);
		animation: pulse 2.4s ease-in-out infinite;
	}

	.accent {
		color: var(--accent);
	}

	.links {
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.links a {
		padding: 0.45rem 0.85rem;
		border-radius: 999px;
		font-size: 0.9rem;
		color: var(--text-muted);
		transition:
			color 0.2s ease,
			background 0.2s ease;
	}

	.links a:hover {
		color: var(--text);
		background: rgba(120, 200, 255, 0.08);
	}

	.links a.active {
		color: var(--accent);
	}

	.links .cta {
		color: var(--bg);
		background: linear-gradient(100deg, var(--accent), var(--accent-2));
		font-weight: 600;
		margin-left: 0.5rem;
	}

	.links .cta:hover {
		color: var(--bg);
		filter: brightness(1.08);
		box-shadow: var(--glow);
	}

	.burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: 0;
		padding: 0.5rem;
	}

	.burger span {
		width: 22px;
		height: 2px;
		background: var(--text);
		transition:
			transform 0.25s ease,
			opacity 0.25s ease;
	}

	.burger.open span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.burger.open span:nth-child(2) {
		opacity: 0;
	}
	.burger.open span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}

	@media (max-width: 820px) {
		.burger {
			display: flex;
		}

		.links {
			position: fixed;
			inset: 0 0 auto 0;
			top: 0;
			padding: 5.5rem 1.5rem 2rem;
			flex-direction: column;
			align-items: stretch;
			background: rgba(5, 7, 15, 0.97);
			backdrop-filter: blur(18px);
			border-bottom: 1px solid var(--border);
			transform: translateY(-110%);
			transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
		}

		.links.open {
			transform: translateY(0);
		}

		.links a {
			padding: 0.9rem 1rem;
			font-size: 1.05rem;
		}

		.links .cta {
			margin: 0.5rem 0 0;
			text-align: center;
		}
	}
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		eyebrow?: string;
		title?: string;
		intro?: string;
		children: Snippet;
	}

	let { id, eyebrow, title, intro, children }: Props = $props();

	let root = $state<HTMLElement | null>(null);
	let visible = $state(false);

	$effect(() => {
		const el = root;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<section {id} class="section" class:visible bind:this={root}>
	<div class="container">
		{#if eyebrow || title || intro}
			<header class="head">
				{#if eyebrow}<span class="eyebrow mono">{eyebrow}</span>{/if}
				{#if title}<h2>{title}</h2>{/if}
				{#if intro}<p class="intro">{intro}</p>{/if}
			</header>
		{/if}
		{@render children()}
	</div>
</section>

<style>
	.section {
		position: relative;
		z-index: 1;
		padding: clamp(4rem, 9vw, 7rem) 0;
	}

	.head {
		max-width: 620px;
		margin-bottom: 3rem;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.78rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.9rem;
	}

	.eyebrow::before {
		content: '';
		width: 26px;
		height: 1px;
		background: var(--accent);
		opacity: 0.7;
	}

	h2 {
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		line-height: 1.15;
		letter-spacing: -0.02em;
		font-weight: 700;
	}

	.intro {
		margin-top: 1rem;
		color: var(--text-muted);
		font-size: 1.02rem;
	}

	/* Reveal on scroll */
	.section > .container {
		opacity: 0;
		transform: translateY(28px);
		transition:
			opacity 0.7s ease,
			transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.section.visible > .container {
		opacity: 1;
		transform: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.section > .container {
			opacity: 1;
			transform: none;
		}
	}
</style>

<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();

	// Scroll progress indicator.
	let progress = $state(0);

	$effect(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			progress = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	});
</script>

<svelte:head>
	<title>Gentman Tan — IT Specialist & Network Engineer</title>
	<meta
		name="description"
		content="Portfolio of Gentman Tan, an IT specialist and network engineer in Miami building secure, automated networking, systems and full-stack infrastructure."
	/>
	<meta name="theme-color" content="#05070f" />
	<meta property="og:title" content="Gentman Tan — IT Specialist & Network Engineer" />
	<meta
		property="og:description"
		content="Networking, systems and full-stack tooling. Explore experience, projects and certifications."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gtan.me" />
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
	/>
</svelte:head>

<div class="progress" style="--progress: {progress}%" aria-hidden="true"></div>

{@render children()}
<div class="scanlines" aria-hidden="true"></div>

<style>
	.progress {
		position: fixed;
		top: 0;
		left: 0;
		height: 2px;
		width: var(--progress);
		z-index: 100;
		background: linear-gradient(90deg, var(--accent), var(--accent-2));
		box-shadow: 0 0 12px var(--accent);
		transition: width 0.1s linear;
	}

	.scanlines {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background-image:
			linear-gradient(rgba(120, 200, 255, 0.035) 1px, transparent 1px),
			linear-gradient(90deg, rgba(120, 200, 255, 0.035) 1px, transparent 1px);
		background-size: 48px 48px;
		mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 10%, transparent 80%);
	}
</style>

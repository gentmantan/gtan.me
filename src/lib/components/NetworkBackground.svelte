<script lang="ts">
	/**
	 * Full-screen animated mesh of network nodes and packet links.
	 * Pure canvas keeps the DOM light and the animation smooth.
	 */
	let canvas = $state<HTMLCanvasElement | null>(null);

	$effect(() => {
		const el = canvas;
		if (!el) return;

		const surface: HTMLCanvasElement = el;
		const context = surface.getContext('2d');
		if (!context) return;
		const ctx: CanvasRenderingContext2D = context;

		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		type Node = { x: number; y: number; vx: number; vy: number; r: number };
		let nodes: Node[] = [];
		let width = 0;
		let height = 0;
		let frame = 0;
		let running = true;

		const density = () => Math.min(90, Math.floor((width * height) / 22000));

		function seed() {
			nodes = Array.from({ length: density() }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.28,
				vy: (Math.random() - 0.5) * 0.28,
				r: Math.random() * 1.6 + 0.8
			}));
		}

		function resize() {
			width = window.innerWidth;
			height = window.innerHeight;
			surface.width = width * dpr;
			surface.height = height * dpr;
			surface.style.width = `${width}px`;
			surface.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			seed();
		}

		function draw() {
			ctx.clearRect(0, 0, width, height);

			// Links between nearby nodes.
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const a = nodes[i];
					const b = nodes[j];
					const dist = Math.hypot(a.x - b.x, a.y - b.y);
					if (dist > 140) continue;
					const alpha = (1 - dist / 140) * 0.28;
					ctx.strokeStyle = `rgba(56, 232, 255, ${alpha})`;
					ctx.lineWidth = 0.7;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}

			// Nodes.
			for (const n of nodes) {
				if (!reduceMotion) {
					n.x += n.vx;
					n.y += n.vy;
					if (n.x < 0 || n.x > width) n.vx *= -1;
					if (n.y < 0 || n.y > height) n.vy *= -1;
				}
				ctx.fillStyle = 'rgba(110, 231, 168, 0.85)';
				ctx.beginPath();
				ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		function loop() {
			if (!running) return;
			draw();
			frame = requestAnimationFrame(loop);
		}

		const onVisibility = () => {
			running = !document.hidden;
			if (running) loop();
			else cancelAnimationFrame(frame);
		};

		resize();
		loop();

		window.addEventListener('resize', resize);
		document.addEventListener('visibilitychange', onVisibility);

		return () => {
			running = false;
			cancelAnimationFrame(frame);
			window.removeEventListener('resize', resize);
			document.removeEventListener('visibilitychange', onVisibility);
		};
	});
</script>

<canvas class="network-bg" bind:this={canvas} aria-hidden="true"></canvas>

<style>
	.network-bg {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		opacity: 0.65;
		mask-image: radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 100%);
	}
</style>

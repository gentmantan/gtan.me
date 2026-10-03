<script lang="ts">
	/**
	 * A mock terminal that types out one or more scripts, holding each
	 * finished session for a moment before cycling to the next one.
	 */

	import Icon from '#lib/components/Icon.svelte';

	interface Props {
		/** Each script is a list of lines to type. One or more scripts may be supplied. */
		scripts?: string[][];
		/** Text shown in the title bar. */
		title?: string;
		/** Per-character typing delay in milliseconds. */
		speed?: number;
	}

	const defaultScripts: string[][] = [
		[
			'$ ping -c1 api.parking.fiu.edu',
			'64 bytes from 131.94.16.10: time=0.42 ms',
			'$ terraform apply -auto-approve',
			'Apply complete! 14 added, 0 changed, 0 destroyed',
			'$ kubectl get pods -n parking',
			'50/50 Running  0 CrashLoopBackOff'
		],
		[
			'$ bun run build',
			'vite v8 building client environment...',
			'✓ built in 192ms',
			'$ gh workflow run deploy.yml',
			'✓ deployed to production — 0 errors'
		],
		[
			'$ nix flake check',
			'evaluating flake...',
			'✓ all checks passed',
			'$ nixos-rebuild switch --flake .#workstation',
			'✓ generation 142 activated'
		]
	];

	let { scripts = defaultScripts, title = 'kitty — zsh', speed = 38 }: Props = $props();

	let typed = $state<string[]>([]);
	let current = $state('');

	$effect(() => {
		// Re-run the animation whenever the supplied scripts change.
		const sessions = scripts.length > 0 ? scripts : defaultScripts;

		let index = 0;
		let line = 0;
		let char = 0;
		let timer: ReturnType<typeof setTimeout>;

		function loadScript(next: number) {
			index = next % sessions.length;
			line = 0;
			char = 0;
			typed = [];
			current = '';
		}

		function tick() {
			const script = sessions[index];

			// Script finished: hold the output, then advance to the next one.
			if (line >= script.length) {
				timer = setTimeout(() => {
					loadScript(index + 1);
					tick();
				}, 2600);
				return;
			}

			const text = script[line];
			char += 1;
			current = text.slice(0, char);

			if (char >= text.length) {
				typed = [...typed, text];
				current = '';
				line += 1;
				char = 0;
			}

			timer = setTimeout(tick, char === 0 ? 220 : speed);
		}

		loadScript(0);
		timer = setTimeout(tick, 600);
		return () => clearTimeout(timer);
	});
</script>

<div class="terminal">
	<div class="bar">
		<div class="bar-left">
			<span class="app-icon" aria-hidden="true">
				<Icon name="terminal" size={14} />
			</span>
			<span class="title mono">{title}</span>
		</div>

		<div class="controls" aria-hidden="true">
			<span class="wbtn min">
				<svg viewBox="0 0 12 12"><path d="M3 6h6" /></svg>
			</span>
			<span class="wbtn max">
				<svg viewBox="0 0 12 12"><rect x="3" y="3" width="6" height="6" rx="1" /></svg>
			</span>
			<span class="wbtn close">
				<svg viewBox="0 0 12 12"><path d="M3.5 3.5l5 5M8.5 3.5l-5 5" /></svg>
			</span>
		</div>
	</div>

	<pre class="mono">{#each typed as row, i (i + row)}<span
				class="row"
				class:cmd={row.startsWith('$')}
				>{row}
</span>{/each}<span class="row live" class:cmd={current.startsWith('$')}
			>{current}<span class="caret"></span></span
		></pre>
</div>

<style>
	.terminal {
		background: linear-gradient(160deg, rgba(16, 24, 44, 0.92), rgba(8, 12, 22, 0.96));
		border: 1px solid var(--border-strong);
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow:
			0 24px 60px rgba(0, 0, 0, 0.55),
			0 0 0 1px rgba(56, 232, 255, 0.06) inset;
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.4rem 0.55rem 0.4rem 0.75rem;
		background: linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
		border-bottom: 1px solid var(--border);
	}

	.bar-left {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		min-width: 0;
	}

	.app-icon {
		display: grid;
		place-items: center;
		color: var(--accent);
	}

	.title {
		font-size: 0.74rem;
		color: var(--text-dim);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* KDE Breeze-style window controls */
	.controls {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		flex-shrink: 0;
	}

	.wbtn {
		display: grid;
		place-items: center;
		width: 22px;
		height: 22px;
		border-radius: 6px;
		color: var(--text-dim);
		transition:
			background 0.15s ease,
			color 0.15s ease;
	}

	.wbtn svg {
		width: 12px;
		height: 12px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.4;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.wbtn.min:hover,
	.wbtn.max:hover {
		background: #3daee9;
		color: #06121c;
	}

	.wbtn.close:hover {
		background: #da4453;
		color: #fff;
	}

	pre {
		margin: 0;
		padding: 1.15rem 1.25rem 1.35rem;
		font-size: 0.83rem;
		line-height: 1.85;
		min-height: 220px;
		color: var(--text-muted);
		white-space: pre-wrap;
		word-break: break-word;
	}

	.row {
		display: block;
	}

	/* Commands are accented; their output stays muted. */
	.row.cmd {
		color: var(--accent-2);
	}

	.live {
		color: var(--text-muted);
	}

	.caret {
		display: inline-block;
		width: 8px;
		height: 1.05em;
		margin-left: 2px;
		vertical-align: text-bottom;
		background: var(--accent);
		animation: blink 1s steps(1) infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>

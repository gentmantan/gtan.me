<script lang="ts">
	import Section from '#lib/components/Section.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { profile, socials } from '#lib/data/portfolio';

	let copied = $state(false);
	let resetTimer: ReturnType<typeof setTimeout> | undefined;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(profile.email);
			copied = true;
			clearTimeout(resetTimer);
			resetTimer = setTimeout(() => (copied = false), 2000);
		} catch {
			copied = false;
		}
	}

	$effect(() => () => clearTimeout(resetTimer));
</script>

<Section id="contact" eyebrow="ping" title="Let's build something together" intro="">
	<div class="panel">
		<div class="details">
			<a class="email" href="mailto:{profile.email}">{profile.email}</a>
			<p class="note">
				Prefer a quick intro? Drop a line and I&rsquo;ll reply within a business day.
			</p>

			<ul class="meta">
				<li><Icon name="pin" size={18} /> {profile.location}</li>
				<li><Icon name="pulse" size={18} /> {profile.phone}</li>
			</ul>

			<div class="actions">
				<a class="btn primary" href="mailto:{profile.email}">
					<Icon name="mail" size={18} /> Email me
				</a>
				<button class="btn ghost" onclick={copyEmail}>
					<Icon name={copied ? 'shield' : 'copy'} size={18} />
					{copied ? 'Copied!' : 'Copy address'}
				</button>
			</div>
		</div>

		<ul class="links">
			{#each socials as social (social.label)}
				<li>
					<a href={social.href} target="_blank" rel="noreferrer">
						<span>{social.label}</span>
						<span class="handle mono">{social.handle}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</Section>

<style>
	.panel {
		display: grid;
		grid-template-columns: 1.35fr 1fr;
		gap: clamp(2rem, 5vw, 4rem);
		padding: clamp(1.8rem, 4vw, 3rem);
		border: 1px solid var(--border-strong);
		border-radius: calc(var(--radius) + 6px);
		background:
			radial-gradient(600px circle at 0% 0%, rgba(56, 232, 255, 0.12), transparent 55%),
			linear-gradient(165deg, rgba(16, 24, 44, 0.9), rgba(8, 12, 22, 0.7));
		backdrop-filter: blur(10px);
	}

	.email {
		display: inline-block;
		font-size: clamp(1.3rem, 3.4vw, 2rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		background: linear-gradient(100deg, var(--accent), var(--accent-2));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		word-break: break-word;
	}

	.note {
		margin-top: 0.8rem;
		color: var(--text-muted);
		max-width: 42ch;
	}

	.meta {
		list-style: none;
		margin: 1.6rem 0 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.6rem;
		font-size: 0.9rem;
		color: var(--text-muted);
	}

	.meta li {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.meta :global(svg) {
		color: var(--accent);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		margin-top: 2rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.4rem;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.95rem;
		border: 1px solid transparent;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
	}

	.btn.primary {
		color: var(--bg);
		background: linear-gradient(100deg, var(--accent), var(--accent-2));
	}

	.btn.primary:hover {
		transform: translateY(-2px);
		box-shadow: var(--glow);
	}

	.btn.ghost {
		border-color: var(--border-strong);
		background: rgba(255, 255, 255, 0.02);
	}

	.btn.ghost:hover {
		background: rgba(120, 200, 255, 0.08);
		transform: translateY(-2px);
	}

	.links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		align-content: center;
		gap: 0.6rem;
	}

	.links a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 0.95rem 1.1rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		background: rgba(255, 255, 255, 0.02);
		transition:
			border-color 0.2s ease,
			background 0.2s ease,
			transform 0.2s ease;
	}

	.links a:hover {
		border-color: var(--border-strong);
		background: rgba(56, 232, 255, 0.06);
		transform: translateX(4px);
	}

	.links span:first-child {
		font-weight: 600;
		font-size: 0.92rem;
	}

	.handle {
		font-size: 0.76rem;
		color: var(--text-dim);
	}

	@media (max-width: 820px) {
		.panel {
			grid-template-columns: 1fr;
		}
	}
</style>

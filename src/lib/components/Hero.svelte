<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Terminal from '#lib/components/Terminal.svelte';
	import { profile, socials } from '#lib/data/portfolio';

	const socialIcon: Record<string, string> = {
		GitHub: 'github',
		LinkedIn: 'linkedin',
		Email: 'mail'
	};
</script>

<section class="hero" id="top">
	<div class="container grid">
		<div class="intro">
			<span class="badge mono">
				<span class="ping"></span>
				{profile.availability}
			</span>

			<h1>
				{profile.name}
				<span class="role gradient-text">{profile.role}</span>
			</h1>

			<p class="lede">{profile.tagline}</p>

			<div class="actions">
				<a class="btn primary" href="#projects">
					View my work <Icon name="arrow" size={18} />
				</a>
				<a class="btn ghost" href={profile.resumeUrl}>
					<Icon name="download" size={18} /> Download CV
				</a>
			</div>

			<ul class="socials">
				{#each socials as social (social.label)}
					<li>
						<a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
							<Icon name={socialIcon[social.label] ?? 'globe'} size={18} />
							<span class="mono">{social.handle}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="visual">
			<Terminal />
			<div class="float-chip one mono">
				<Icon name="shield" size={16} /> CompTIA CIOS
			</div>
			<div class="float-chip two mono">
				<Icon name="pulse" size={16} /> CCNA in progress
			</div>
		</div>
	</div>

	<ul class="stats container">
		{#each profile.stats as stat (stat.label)}
			<li>
				<span class="value gradient-text">{stat.value}</span>
				<span class="label">{stat.label}</span>
			</li>
		{/each}
	</ul>
</section>

<style>
	.hero {
		position: relative;
		z-index: 1;
		padding: clamp(7rem, 14vw, 10rem) 0 3rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: clamp(2rem, 6vw, 4.5rem);
		align-items: center;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		font-size: 0.76rem;
		padding: 0.4rem 0.85rem;
		border: 1px solid var(--border-strong);
		border-radius: 999px;
		color: var(--text-muted);
		background: rgba(16, 24, 44, 0.5);
	}

	.ping {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent-2);
		box-shadow: 0 0 0 0 rgba(110, 231, 168, 0.6);
		animation: ripple 2.2s infinite;
	}

	h1 {
		margin-top: 1.5rem;
		font-size: clamp(2.4rem, 6vw, 4rem);
		line-height: 1.04;
		letter-spacing: -0.03em;
		font-weight: 800;
	}

	.role {
		display: block;
		font-size: clamp(1.3rem, 3vw, 1.9rem);
		font-weight: 600;
		margin-top: 0.6rem;
		letter-spacing: -0.01em;
	}

	.lede {
		margin-top: 1.4rem;
		max-width: 36ch;
		font-size: 1.08rem;
		color: var(--text-muted);
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
		color: var(--text);
		background: rgba(255, 255, 255, 0.02);
	}

	.btn.ghost:hover {
		background: rgba(120, 200, 255, 0.08);
		transform: translateY(-2px);
	}

	.socials {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.4rem;
		list-style: none;
		margin: 2.2rem 0 0;
		padding: 0;
	}

	.socials a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.84rem;
		color: var(--text-dim);
		transition: color 0.2s ease;
	}

	.socials a:hover {
		color: var(--accent);
	}

	.visual {
		position: relative;
	}

	.float-chip {
		position: absolute;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.72rem;
		padding: 0.45rem 0.75rem;
		border-radius: 999px;
		background: var(--surface-strong);
		border: 1px solid var(--border-strong);
		color: var(--accent);
		backdrop-filter: blur(6px);
		animation: float 5s ease-in-out infinite;
	}

	.float-chip.one {
		top: -1rem;
		right: 1.2rem;
	}

	.float-chip.two {
		bottom: -1rem;
		left: -1rem;
		animation-delay: -2.5s;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		list-style: none;
		margin-top: clamp(3rem, 7vw, 5rem);
		padding-top: 2.5rem;
		border-top: 1px solid var(--border);
	}

	.stats li {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.value {
		font-size: clamp(1.5rem, 3.4vw, 2.2rem);
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.label {
		font-size: 0.82rem;
		color: var(--text-dim);
	}

	@keyframes ripple {
		70% {
			box-shadow: 0 0 0 9px rgba(110, 231, 168, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(110, 231, 168, 0);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.visual {
			order: 2;
			max-width: 520px;
		}

		.stats {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}
</style>

<script lang="ts">
	import Section from '#lib/components/Section.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { certifications } from '#lib/data/portfolio';
</script>

<Section
	id="certifications"
	eyebrow="credentials"
	title="Certified, and always learning"
	intro="Verifiable knowledge through industry standard certification"
>
	<div class="grid">
		{#each certifications as cert (cert.name)}
			<svelte:element
				this={cert.link ? 'a' : 'article'}
				class="cert"
				class:linked={cert.link}
				href={cert.link}
				target={cert.link ? '_blank' : undefined}
				rel={cert.link ? 'noreferrer' : undefined}
				aria-label={cert.link
					? `Verify ${cert.name} badge on Credly (opens in a new tab)`
					: undefined}
			>
				<div class="badge">
					<Icon name="shield" size={22} />
				</div>
				<div class="info">
					<h3>{cert.name}</h3>
					<p class="issuer mono">{cert.issuer} · {cert.year}</p>
				</div>
				{#if cert.link}
					<span class="ext" aria-hidden="true">
						<Icon name="arrow" size={16} />
					</span>
				{/if}
			</svelte:element>
		{/each}
	</div>
</Section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	.cert {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.2rem 1.4rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);
		backdrop-filter: blur(8px);
		transition:
			border-color 0.25s ease,
			transform 0.25s ease;
	}

	.cert:hover {
		border-color: var(--border-strong);
		transform: translateY(-3px);
	}

	.badge {
		display: grid;
		place-items: center;
		width: 46px;
		height: 46px;
		flex-shrink: 0;
		border-radius: 12px;
		color: var(--accent);
		background: rgba(56, 232, 255, 0.08);
		border: 1px solid var(--border);
	}

	.info {
		flex: 1;
	}

	h3 {
		font-size: 0.98rem;
		line-height: 1.35;
	}

	.issuer {
		margin-top: 0.2rem;
		font-size: 0.76rem;
		color: var(--text-dim);
	}

	.ext {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		color: var(--text-dim);
		transition:
			color 0.25s ease,
			transform 0.25s ease;
	}

	.cert.linked:hover .ext {
		color: var(--accent);
		transform: translateX(4px);
	}

	.cert.linked:hover {
		box-shadow: 0 0 0 1px rgba(56, 232, 255, 0.15) inset;
	}

	@media (max-width: 700px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>

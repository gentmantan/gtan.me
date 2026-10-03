<script lang="ts">
	import Section from '#lib/components/Section.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { projects } from '#lib/data/portfolio';

	// Move the card's radial spotlight to follow the pointer.
	function spotlight(event: MouseEvent) {
		const card = event.currentTarget as HTMLElement;
		const rect = card.getBoundingClientRect();
		card.style.setProperty('--x', `${event.clientX - rect.left}px`);
		card.style.setProperty('--y', `${event.clientY - rect.top}px`);
	}
</script>

<Section
	id="projects"
	eyebrow="open source"
	title="Things I've built"
	intro="Sharing the tools that get the job done."
>
	<div class="grid">
		{#each projects as project (project.name)}
			<a class="card" href={project.link} target="_blank" rel="noreferrer" onmousemove={spotlight}>
				<div class="card-top">
					<span class="metric">
						<span class="metric-value gradient-text">{project.metric.value}</span>
						<span class="metric-label mono">{project.metric.label}</span>
					</span>
					<Icon name="arrow" size={20} />
				</div>

				<h3 class="mono">{project.name}</h3>
				<p class="tagline">{project.tagline}</p>
				<p class="desc">{project.description}</p>

				<ul class="tags">
					{#each project.tags as tag (tag)}
						<li class="mono">{tag}</li>
					{/each}
				</ul>
			</a>
		{/each}
	</div>
</Section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 1.6rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: linear-gradient(165deg, rgba(16, 24, 44, 0.8), rgba(8, 12, 22, 0.5));
		backdrop-filter: blur(8px);
		overflow: hidden;
		transition:
			transform 0.3s ease,
			border-color 0.3s ease;
	}

	.card::after {
		content: '';
		position: absolute;
		inset: -1px;
		border-radius: inherit;
		background: radial-gradient(
			340px circle at var(--x, 50%) var(--y, 0%),
			rgba(56, 232, 255, 0.12),
			transparent 60%
		);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}

	.card:hover {
		transform: translateY(-6px);
		border-color: var(--border-strong);
	}

	.card:hover::after {
		opacity: 1;
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.2rem;
	}

	.card-top :global(svg) {
		color: var(--text-dim);
		transition:
			color 0.25s ease,
			transform 0.25s ease;
	}

	.card:hover .card-top :global(svg) {
		color: var(--accent);
		transform: translateX(4px);
	}

	.metric {
		display: flex;
		flex-direction: column;
	}

	.metric-value {
		font-size: 1.6rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1;
	}

	.metric-label {
		margin-top: 0.35rem;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--text-dim);
	}

	h3 {
		font-size: 1.15rem;
		color: var(--accent);
	}

	.tagline {
		margin-top: 0.25rem;
		font-size: 0.9rem;
		color: var(--text);
		font-weight: 600;
	}

	.desc {
		margin-top: 0.8rem;
		font-size: 0.9rem;
		color: var(--text-muted);
		flex: 1;
	}

	.tags {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin: 1.4rem 0 0;
		padding: 0;
	}

	.tags li {
		font-size: 0.7rem;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		color: var(--text-dim);
	}

	@media (max-width: 940px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>

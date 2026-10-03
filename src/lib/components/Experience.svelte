<script lang="ts">
	import Section from '#lib/components/Section.svelte';
	import { experience } from '#lib/data/portfolio';
</script>

<Section
	id="experience"
	eyebrow="route table"
	title="Where I've kept the lights on"
	intro="From self-employed consulting to campus-scale infrastructure."
>
	<ol class="timeline">
		{#each experience as job (job.company)}
			<li class="item">
				<span class="marker" aria-hidden="true"></span>
				<article class="card">
					<div class="top">
						<div>
							<h3>{job.role}</h3>
							<p class="company">{job.company}</p>
						</div>
						<div class="meta mono">
							<span>{job.period}</span>
							<span>{job.location}</span>
						</div>
					</div>

					<ul class="highlights">
						{#each job.highlights as point (point)}
							<li>{point}</li>
						{/each}
					</ul>

					{#if job.clients?.length}
						<div class="clients">
							<span class="clients-label mono">Clients</span>
							{#each job.clients as client (client.name)}
								<div class="client">
									<h4>{client.name}</h4>
									<ul class="highlights nested">
										{#each client.highlights as point (point)}
											<li>{point}</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					{/if}

					<ul class="tags">
						{#each job.stack as tech (tech)}
							<li class="mono">{tech}</li>
						{/each}
					</ul>
				</article>
			</li>
		{/each}
	</ol>
</Section>

<style>
	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
		position: relative;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 9px;
		top: 6px;
		bottom: 6px;
		width: 2px;
		background: linear-gradient(to bottom, var(--accent), rgba(56, 232, 255, 0.05));
	}

	.item {
		position: relative;
		padding-left: 2.6rem;
		padding-bottom: 1.4rem;
	}

	.item:last-child {
		padding-bottom: 0;
	}

	.marker {
		position: absolute;
		left: 0;
		top: 6px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 2px solid var(--accent);
		background: var(--bg);
		box-shadow: 0 0 0 4px rgba(56, 232, 255, 0.1);
	}

	.card {
		padding: 1.5rem 1.6rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);
		backdrop-filter: blur(8px);
		transition:
			border-color 0.25s ease,
			transform 0.25s ease;
	}

	.card:hover {
		border-color: var(--border-strong);
		transform: translateX(4px);
	}

	.top {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	h3 {
		font-size: 1.12rem;
		letter-spacing: -0.01em;
	}

	.company {
		margin-top: 0.2rem;
		color: var(--accent-2);
		font-size: 0.9rem;
	}

	.meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.15rem;
		font-size: 0.74rem;
		color: var(--text-dim);
		white-space: nowrap;
	}

	.highlights {
		list-style: none;
		margin: 1rem 0;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}

	.highlights li {
		position: relative;
		padding-left: 1.1rem;
		font-size: 0.92rem;
		color: var(--text-muted);
	}

	.highlights li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.62em;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--accent);
	}

	.clients {
		margin: 1.25rem 0 1.1rem;
		padding: 1rem 1.1rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		background: rgba(120, 200, 255, 0.03);
	}

	.clients-label {
		display: block;
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.85rem;
	}

	.client + .client {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border);
	}

	.client h4 {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text);
	}

	.highlights.nested {
		margin: 0.65rem 0 0;
	}

	.tags {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin: 0;
		padding: 0;
	}

	.tags li {
		font-size: 0.72rem;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		color: var(--text-dim);
		background: rgba(120, 200, 255, 0.04);
	}

	@media (max-width: 640px) {
		.meta {
			align-items: flex-start;
		}
	}
</style>

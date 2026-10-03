<script lang="ts">
	import Section from '#lib/components/Section.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { skillGroups } from '#lib/data/portfolio';

	let root = $state<HTMLElement | null>(null);
	let inView = $state(false);

	$effect(() => {
		const el = root;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					inView = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<Section
	id="skills"
	eyebrow="toolbox"
	title="The stack I reach for"
	intro="Deep in the packet path, comfortable in the pipeline."
>
	<div class="groups" bind:this={root} class:inView>
		{#each skillGroups as group (group.title)}
			<article class="card">
				<h3>{group.title}</h3>
				<p class="blurb">{group.blurb}</p>

				<ul class="skills">
					{#each group.skills as skill (skill.name)}
						<li>
							<div class="row">
								<span class="name">
									<Icon name={skill.icon} size={16} />
									{skill.name}
								</span>
								<span class="mono level">{skill.level}%</span>
							</div>
							<div class="track">
								<span class="fill" style="--level: {skill.level}%"></span>
							</div>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</Section>

<style>
	.groups {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	.card {
		padding: 1.6rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: linear-gradient(165deg, rgba(16, 24, 44, 0.75), rgba(8, 12, 22, 0.55));
		backdrop-filter: blur(8px);
		transition:
			border-color 0.3s ease,
			transform 0.3s ease;
	}

	.card:hover {
		border-color: var(--border-strong);
		transform: translateY(-4px);
	}

	h3 {
		font-size: 1.15rem;
		letter-spacing: -0.01em;
	}

	.blurb {
		margin-top: 0.4rem;
		font-size: 0.86rem;
		color: var(--text-dim);
		min-height: 2.6em;
	}

	.skills {
		list-style: none;
		margin: 1.4rem 0 0;
		padding: 0;
		display: grid;
		gap: 1.05rem;
	}

	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.45rem;
	}

	.name {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.88rem;
		color: var(--text);
	}

	.name :global(svg) {
		color: var(--accent);
	}

	.level {
		font-size: 0.74rem;
		color: var(--text-dim);
	}

	.track {
		height: 6px;
		border-radius: 999px;
		background: rgba(120, 200, 255, 0.1);
		overflow: hidden;
	}

	.fill {
		display: block;
		height: 100%;
		width: 0;
		border-radius: inherit;
		background: linear-gradient(90deg, var(--accent), var(--accent-2));
		box-shadow: 0 0 12px rgba(56, 232, 255, 0.4);
		transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.inView .fill {
		width: var(--level);
	}

	@media (max-width: 940px) {
		.groups {
			grid-template-columns: 1fr;
		}

		.blurb {
			min-height: 0;
		}
	}
</style>

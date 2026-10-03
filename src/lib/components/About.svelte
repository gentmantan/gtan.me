<script lang="ts">
	import Section from '#lib/components/Section.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { profile } from '#lib/data/portfolio';

	const portrait = '/me.jpg';

	const facts = [
		{ icon: 'pin', label: 'Based in', value: profile.location },
		{ icon: 'pulse', label: 'Focus', value: 'Networking, systems & full-stack tooling' },
		{
			icon: 'shield',
			label: 'Credentials',
			value: 'CompTIA A+ · Network+ · Security+ · CCNA in progress'
		}
	];

	const principles = [
		'Greater safety, performance and efficiency- in that order.',
		'If it is not automated and observable, it is not done.',
		'Config belongs in version control, not in a console.'
	];
</script>

<Section id="about" eyebrow="whoami" title="Your friendly I.T. specialist.">
	<div class="about">
		<div class="profile">
			<div class="avatar">
				<img src={portrait} alt="Portrait of {profile.name}" width="800" height="800" />
			</div>
			<div class="id">
				<h3>{profile.name}</h3>
				<p class="role mono">{profile.role}</p>
				<p class="meta mono">
					<Icon name="pin" size={14} />
					{profile.location}
					<span class="sep">·</span>
					{profile.website}
				</p>
			</div>
		</div>

		<div class="story">
			<p>
				I&rsquo;m {profile.name}, your friendly I.T. specialist with {profile.yearsExperience} of experience
				planning, installing and configuring computer and networking systems. Years of consulting taught
				me to be <span class="hl">fluent across the whole I.T. stack</span>, and comfortable moving
				between networking, systems and software; whatever the problem demands.
			</p>
			<p>
				My computer science degree gives me a deeper grasp of the data structures and algorithms
				underpinning the software I deploy, and an appetite for continual learning. Whether it is
				Cisco VRF segmentation, NixOS reproducibility or a SvelteKit + PostGIS app on Kubernetes, I
				care about the whole lifecycle: build it safely, automate it, then prove it works.
			</p>

			<ul class="principles">
				{#each principles as principle (principle)}
					<li>
						<Icon name="spark" size={16} />
						<span>{principle}</span>
					</li>
				{/each}
			</ul>
		</div>

		<aside class="facts">
			{#each facts as fact (fact.label)}
				<div class="fact">
					<Icon name={fact.icon} size={20} />
					<div>
						<span class="fact-label mono">{fact.label}</span>
						<span class="fact-value">{fact.value}</span>
					</div>
				</div>
			{/each}
		</aside>
	</div>
</Section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		column-gap: clamp(2rem, 5vw, 4rem);
		row-gap: 2.5rem;
		align-items: start;
	}

	.profile {
		grid-column: 1 / -1;
		display: flex;
		align-items: center;
		gap: 1.6rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--border);
	}

	.avatar {
		position: relative;
		flex-shrink: 0;
		width: 118px;
		height: 118px;
		padding: 3px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--accent), var(--accent-2));
		box-shadow: 0 0 34px rgba(56, 232, 255, 0.22);
	}

	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		background: var(--bg);
	}

	.avatar::after {
		content: '';
		position: absolute;
		right: 6px;
		bottom: 8px;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--accent-2);
		border: 3px solid var(--bg);
		box-shadow: 0 0 12px var(--accent-2);
	}

	.id h3 {
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		letter-spacing: -0.02em;
	}

	.id .role {
		margin-top: 0.25rem;
		font-size: 0.9rem;
		color: var(--accent);
	}

	.id .meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin-top: 0.6rem;
		font-size: 0.78rem;
		color: var(--text-dim);
	}

	.meta :global(svg) {
		color: var(--accent);
	}

	.sep {
		color: var(--border-strong);
	}

	.story p {
		color: var(--text-muted);
		font-size: 1.05rem;
		margin-bottom: 1.2rem;
	}

	.hl {
		color: var(--text);
		font-weight: 600;
		background: linear-gradient(transparent 62%, rgba(56, 232, 255, 0.22) 62%);
	}

	.principles {
		list-style: none;
		margin: 1.8rem 0 0;
		padding: 0;
		display: grid;
		gap: 0.85rem;
	}

	.principles li {
		display: flex;
		gap: 0.7rem;
		align-items: flex-start;
		font-size: 0.94rem;
		color: var(--text-muted);
	}

	.principles :global(svg) {
		color: var(--accent-2);
		margin-top: 3px;
		flex-shrink: 0;
	}

	.facts {
		display: grid;
		gap: 1rem;
		padding: 1.6rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);
		backdrop-filter: blur(8px);
	}

	.fact {
		display: flex;
		gap: 0.85rem;
		align-items: flex-start;
	}

	.fact :global(svg) {
		color: var(--accent);
		flex-shrink: 0;
		margin-top: 3px;
	}

	.fact-label {
		display: block;
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-dim);
	}

	.fact-value {
		display: block;
		font-size: 0.95rem;
		color: var(--text);
		margin-top: 0.15rem;
	}

	@media (max-width: 820px) {
		.about {
			grid-template-columns: 1fr;
		}

		.profile {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.1rem;
		}

		.avatar {
			width: 96px;
			height: 96px;
		}
	}
</style>

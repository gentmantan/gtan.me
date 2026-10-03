<script lang="ts">
	import { profile } from '#lib/data/portfolio';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container inner">
		<span class="mono">© {year} {profile.name}</span>
		<a class="mono muted" href="https://{profile.website}" target="_blank" rel="noreferrer">
			{profile.website} · built with svelte 5
		</a>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		z-index: 1;
		padding: 2rem 0 3rem;
		border-top: 1px solid var(--border);
	}

	.inner {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: 0.8rem;
		color: var(--text-muted);
	}

	.muted {
		color: var(--text-dim);
		transition: color 0.2s ease;
	}

	.muted:hover {
		color: var(--accent);
	}
</style>

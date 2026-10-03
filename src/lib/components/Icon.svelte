<script lang="ts">
	interface Props {
		name: string;
		size?: number;
	}

	let { name, size = 24 }: Props = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.7"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'route'}
		<circle cx="6" cy="18" r="3" /><circle cx="18" cy="6" r="3" /><path
			d="M9 18h5a4 4 0 0 0 0-8H8a4 4 0 0 1 0-8"
			transform="translate(1.5 4)"
		/>
	{:else if name === 'switch'}
		<rect x="2" y="7" width="20" height="10" rx="2" /><path
			d="M6 11h.01M10 11h.01M14 11h.01M18 11h.01M6 14h12"
		/>
	{:else if name === 'wan'}
		<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
	{:else if name === 'globe'}
		<circle cx="12" cy="12" r="9" /><path
			d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
		/>
	{:else if name === 'gear'}
		<circle cx="12" cy="12" r="3" /><path
			d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 2.6 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9.5 4a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21.4 11a2 2 0 1 1 0 4Z"
		/>
	{:else if name === 'code'}
		<path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
	{:else if name === 'stack'}
		<path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />
	{:else if name === 'cloud'}
		<path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.5A4 4 0 0 0 6.5 19h11Z" />
	{:else if name === 'shield'}
		<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" />
	{:else if name === 'pulse'}
		<path d="M3 12h4l3-8 4 16 3-8h4" />
	{:else if name === 'chart'}
		<path d="M3 3v18h18M7 15l4-5 4 3 5-7" />
	{:else if name === 'book'}
		<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22V4.5Z" /><path
			d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
		/>
	{:else if name === 'github'}
		<path
			d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
		/>
	{:else if name === 'linkedin'}
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle
			cx="4"
			cy="4"
			r="2"
		/>
	{:else if name === 'mail'}
		<rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" />
	{:else if name === 'pin'}
		<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
	{:else if name === 'download'}
		<path d="M12 3v12m0 0 5-5m-5 5-5-5M4 21h16" />
	{:else if name === 'arrow'}
		<path d="M5 12h14m0 0-6-6m6 6-6 6" />
	{:else if name === 'server'}
		<rect x="3" y="4" width="18" height="7" rx="2" /><rect
			x="3"
			y="13"
			width="18"
			height="7"
			rx="2"
		/><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" />
	{:else if name === 'terminal'}
		<rect x="2" y="4" width="20" height="16" rx="2" /><path d="m6 9 3 3-3 3M13 15h5" />
	{:else if name === 'camera'}
		<path
			d="M3 7h3l2-3h8l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
		/><circle cx="12" cy="13" r="3.5" />
	{:else if name === 'wifi'}
		<path d="M2 8.8a16 16 0 0 1 20 0M5 12.4a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0" /><circle
			cx="12"
			cy="19.5"
			r="0.6"
			fill="currentColor"
		/>
	{:else if name === 'copy'}
		<rect x="9" y="9" width="12" height="12" rx="2" /><path
			d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
		/>
	{:else if name === 'spark'}
		<path d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z" />
	{:else}
		<circle cx="12" cy="12" r="9" />
	{/if}
</svg>

<style>
	svg {
		display: block;
	}
</style>

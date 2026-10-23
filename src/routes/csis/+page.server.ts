import { redirect } from '@sveltejs/kit';

const TARGET = 'https://www.credly.com/badges/bc225801-8f68-42ba-9ba4-ba1c8a3a61c0/public_url';

export function load() {
	redirect(302, TARGET, { external: true });
}

<script lang="ts">
	import NetworkBackground from '#lib/components/NetworkBackground.svelte';
	import Nav from '#lib/components/Nav.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import About from '#lib/components/About.svelte';
	import Skills from '#lib/components/Skills.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Certifications from '#lib/components/Certifications.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Footer from '#lib/components/Footer.svelte';
</script>

<NetworkBackground />
<Nav />

<main>
	<Hero />
	<About />
	<Skills />
	<Experience />
	<Projects />
	<Certifications />
	<Contact />
</main>

<Footer />

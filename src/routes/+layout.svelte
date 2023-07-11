<script>
	import '../app.postcss';
	import './globals.css';
	import Footer from './Footer.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<!-- <Header /> -->

<main>
	<slot />
</main>

<Footer />

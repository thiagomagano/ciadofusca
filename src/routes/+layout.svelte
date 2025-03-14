<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import Footer from '$lib/components/Footer.svelte';

	import { fly } from 'svelte/transition';

	export let data;
</script>

<main>
	{#key data.url}
		<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
			<slot />
		</div>
	{/key}
</main>

<Footer />

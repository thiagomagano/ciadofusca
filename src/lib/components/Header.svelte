<script>
	import Navbar from '$lib/components/Menu/Navbar.svelte';
	import Sidebar from '$lib/components/Menu/Sidebar.svelte';

	export let styles;
	let open = false;
</script>

<header class:styles={styles ? `${styles?.bgColor} ${styles?.fontColor}` : ''}>
	<Sidebar bind:open />
	<Navbar bind:sidebar={open} {styles} />
</header>

<style>
	header {
		padding-block: 0.5rem;
		width: 100%;
		padding-inline: var(--spacing-inline);
	}
</style>

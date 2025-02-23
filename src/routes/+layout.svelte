<script lang="ts">
	import '../app.css';
	import Background from '$lib/components/background';
	import Menu from '$lib/components/Menu.svelte';
	import Title from '$lib/components/Title.svelte';

	let { children } = $props();
</script>

{@render children()}
<Title />
<Menu />
<Background />

<script lang="ts">
	import '../app.css';
	import Background from './Background.svelte';

	let { children } = $props();
</script>

{@render children()}
<Background />

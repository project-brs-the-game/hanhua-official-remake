<script lang="ts">
	import '../app.css';
	import Background from '$lib/components/background';

	let { children } = $props();
</script>

{@render children()}
<Background />

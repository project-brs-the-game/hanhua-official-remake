<script lang="ts">
	import { ContentArea } from '$lib/components/content';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<ContentArea>
	{@render children?.()}
</ContentArea>

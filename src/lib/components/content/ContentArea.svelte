<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div
	class={'cut fixed top-24 right-16 bottom-40 left-128 z-10 overflow-auto bg-linear-to-b from-[#43505e]/80 to-[#212222]/90'}
>
	{@render children?.()}
</div>

<style>
	.cut {
		clip-path: polygon(3rem 0, 100% 0, 100% 100%, 0 100%, 0 3rem);
	}
</style>

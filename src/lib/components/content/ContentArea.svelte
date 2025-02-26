<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div
	class={[
		'cut fixed top-24 right-16 bottom-40 left-104 lg:left-128 z-10 overflow-auto scroll-smooth bg-linear-to-b from-[#43505e] to-[#222222]  pt-6 pr-8 pb-8 pl-12 opacity-90',
		'scrollbar-active:scrollbar-thumb-[#adb8bb] scrollbar-hover:scrollbar-thumb-[#adb8bb]/80 scrollbar-thumb-[#adb8bb]/40 scrollbar-track-[#212222]/40 scrollbar-thin scrollbar-corner-transparent'
	]}
>
	<article
		class={[
			'prose font-pixel prose-invert min-w-full text-white',
			'prose-p:text-base',
			'prose-blockquote:border-l-white prose-blockquote:border-y prose-blockquote:border-r prose-blockquote:pr-4 prose-blockquote:border-y-white/50 prose-blockquote:border-r-white/50 prose-blockquote:font-extralight prose-blockquote:not-italic',
			'prose-table:[&_tr]:border-white/50 prose-table:[&_thead]:border-white/50',
			'prose-li:[&::marker]:text-white',
      'prose-hr:border-white'
		]}
	>
		{@render children?.()}
	</article>
</div>

<style>
	.cut {
		clip-path: polygon(3rem 0, 100% 0, 100% 100%, 0 100%, 0 3rem);
	}
</style>

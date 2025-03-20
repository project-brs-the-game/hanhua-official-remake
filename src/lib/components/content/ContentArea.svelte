<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div
	class={[
		'top-36 bottom-20 left-64 right-8',
		'xl:top-24 xl:right-16 xl:left-104 2xl:left-128 xl:bottom-40',
		'fixed z-10 overflow-auto scroll-smooth bg-linear-to-b from-[#43505e] to-[#222222] pt-6 pr-8 pb-8  pl-12 opacity-90',
		'scrollbar-active:scrollbar-thumb-[#adb8bb] scrollbar-hover:scrollbar-thumb-[#adb8bb]/80 scrollbar-thumb-[#adb8bb]/40 scrollbar-track-[#212222]/40 scrollbar-thin scrollbar-corner-transparent',
		'xl:[clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)]'
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

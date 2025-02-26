<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.data.title} | 黑岩射手The Game 非官方汉化网站</title>
</svelte:head>

<div class="fixed top-2 left-56 lg:left-72 flex items-center gap-x-2 select-none">
	<div class="mt-1 flex size-8 items-center justify-center border-4 text-[#333333]">
		<div class="absolute h-1 w-6 rotate-45 bg-[#333333]"></div>
		<div class="absolute h-1 w-6 -rotate-45 bg-[#333333]"></div>
	</div>
	<h1 class="font-pixel text-4xl leading-9 font-bold text-[#333333]">{page.data.title}</h1>
</div>

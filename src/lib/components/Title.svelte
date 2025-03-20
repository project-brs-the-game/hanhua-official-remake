<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.data.title} | 黑岩射手The Game 非官方汉化网站</title>
</svelte:head>

<div class="fixed top-24 left-76 flex items-center gap-x-2 select-none xl:top-2 xl:left-56 2xl:left-72">
	<div class="mt-1 hidden size-8 items-center justify-center border-4 text-[#333333] xl:flex">
		<div class="absolute h-1 w-6 rotate-45 bg-[#333333]"></div>
		<div class="absolute h-1 w-6 -rotate-45 bg-[#333333]"></div>
	</div>
	<h1 class="font-pixel text-4xl leading-9 font-bold text-black xl:text-[#333333]">{page.data.title}</h1>
</div>

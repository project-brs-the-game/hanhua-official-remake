<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.data.title} | 黑岩射手The Game 非官方汉化网站</title>
</svelte:head>

<div class="fixed top-2 left-72 flex items-center gap-x-2">
	<div class="mt-1 flex size-8 items-center justify-center border-4 text-[#333333]">
    <div class="h-1 w-6 bg-[#333333] rotate-45 absolute"></div>
    <div class="h-1 w-6 bg-[#333333] -rotate-45 absolute"></div>
  </div>
	<h1 class="text-4xl leading-9 font-bold text-[#333333] font-pixel">{page.data.title}</h1>
</div>

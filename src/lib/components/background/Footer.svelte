<div class="hidden xl:block">
	<div class="fixed bottom-[2rem] left-[1.69rem] -z-7 w-[2.75rem] rotate-45 border-2 bg-[#070707]"></div>
	<div class="fixed inset-x-0 bottom-4 -z-6 h-22 pr-5 pl-8">
		<div id="footer" class="background relative h-full w-full border-4 border-[#070707]"></div>
	</div>
</div>

<div class="block xl:hidden">
	<div class="fixed bottom-[1.48rem] left-[1.9rem] -z-7 w-[1.4rem] rotate-45 border-2 bg-[#070707]"></div>
	<div class="fixed inset-x-0 bottom-4 -z-6 h-12 px-8">
		<div id="footer-mobile" class="background relative h-full w-full border-3 border-[#070707]"></div>
	</div>
</div>

<style>
	.background {
		--size: 6px;
		--bg: #0a070540;
		--fg: #0a0705;

		--edge-size: 0.5em;
		background-image: repeating-conic-gradient(var(--fg) 0% 25%, var(--bg) 0% 50%);
		background-size: var(--size) var(--size);
		background-color: var(--bg);
		background-position:
			0 0,
			calc(var(--size) / 2) calc(var(--size) / 2);
	}

	#footer {
		clip-path: polygon(100% 0, 100% 100%, 2rem 100%, 0 3.5rem, 0 0);
	}

	#footer-mobile {
		clip-path: polygon(100% 0, 100% 100%, 1rem 100%, 0 2rem, 0 0);
	}
</style>

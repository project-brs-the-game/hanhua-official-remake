<div class="fixed inset-0 -z-7 pt-13 pr-5 pb-29 pl-96">
	<div class="relative h-full w-full border-4 border-[#656565]/85">
		<div class="absolute inset-y-0 -top-1 -bottom-1 -left-3 w-3 bg-[#0c0905]"></div>
		<div class="absolute inset-y-0 -top-1 -bottom-1 -left-5 w-1 bg-[#0c0905]"></div>
	</div>
</div>

<div class="fixed bottom-[2rem] left-[1.69rem] -z-7 w-[2.75rem] rotate-45 border-2 bg-[#070707]"></div>
<div class="fixed inset-x-0 bottom-4 -z-7 h-22 pr-5 pl-8">
	<div id="footer" class="relative h-full w-full border-4 border-[#070707]"></div>
</div>

<div></div>

<div class="fixed inset-0 -z-8 h-screen w-screen">
	<!-- top left -->
	<div class="absolute top-16 left-8 h-2 w-20 bg-[#2e3636]"></div>
	<div class="absolute top-16 left-8 h-20 w-2 bg-[#2e3636]"></div>
	<!-- top right -->
	<div class="absolute top-16 right-8 h-2 w-20 bg-[#2e3636]"></div>
	<div class="absolute top-16 right-8 h-20 w-2 bg-[#2e3636]"></div>
	<!-- bottom left -->
	<div class="absolute bottom-32 left-8 h-2 w-20 bg-[#2e3636]"></div>
	<div class="absolute bottom-32 left-8 h-20 w-2 bg-[#2e3636]"></div>
	<!-- bottom right -->
	<div class="absolute right-8 bottom-32 h-2 w-20 bg-[#2e3636]"></div>
	<div class="absolute right-8 bottom-32 h-20 w-2 bg-[#2e3636]"></div>
</div>

<div
	class="fixed inset-0 -z-9 h-screen w-screen bg-linear-to-br from-[#5693ac]/80 via-white/0 to-[#575c46]/90"
>
	<!-- Gradient -->
</div>
<div id="background" class="fixed inset-0 -z-10 h-screen w-screen">
	<!-- Transparent Grid Background -->
</div>

<style>
	#background {
		--size: 4rem;
		margin: 0;
		height: 100vh;
		background-color: #ffffff;
		background-image:
			linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
			linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
			linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
		background-size: var(--size) var(--size);
		background-position:
			0 0,
			0 calc(var(--size) / 2),
			calc(var(--size) / 2) calc(var(--size) / -2),
			calc(var(--size) / -2) 0px;
	}

	#footer {
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
		clip-path: polygon(100% 0, 100% 100%, 2rem 100%, 0 3.5rem, 0 0);
	}
</style>

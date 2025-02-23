<div id="graidient-grid" class="fixed -z-8 h-screen w-screen border-[#070707] opacity-25">
	<!-- 虚化叠加格子  -->
</div>

<div
	class="fixed inset-0 -z-9 h-screen w-screen bg-linear-to-br from-[#5594a6]/80 from-10% via-gray-500/25 via-40% to-[#2b3419]/90 to-90%"
>
	<!-- 颜色渐变叠加 -->
</div>
<div id="background" class="fixed inset-0 -z-10">
	<!-- 背景灰白棋盘格子 -->
</div>

<style>
	@keyframes slide {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-50%, 0, 0);
		}
	}

	#background {
		--size: 4rem;

		animation: slide 450s linear infinite;
		height: 100vh;
		width: calc(var(--size) * 500);
		background-color: #ffffff;
		background-image:
			linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
		background-size: var(--size) var(--size);
		background-repeat: repeat;
		background-position:
			0 0,
			0 calc(var(--size) / 2),
			calc(var(--size) / 2) calc(var(--size) / -2),
			calc(var(--size) / -2) 0px;
	}

	#graidient-grid {
		--size: 0.5rem;
		--bg: #0a070540;
		--fg: #0a0705;
		--edge-size: 0.5em;

		background-image: repeating-conic-gradient(var(--fg) 0% 25%, var(--bg) 0% 50%);
		background-size: var(--size) var(--size);
		background-color: var(--bg);
		background-position:
			0 0,
			calc(var(--size) / 2) calc(var(--size) / 2);

		mask-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0) 40%,
			rgba(0, 0, 0, 0) 60%,
			rgba(0, 0, 0, 1) 100%
		);
	}
</style>

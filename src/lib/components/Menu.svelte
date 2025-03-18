<script lang="ts">
	import { page } from '$app/state';
	import { ITEMS } from '$lib/const/menu-items';

	let footnote = $state('');
</script>

<div class="left fixed inset-y-0 left-10 select-none">
	<div class="relative flex h-full items-center">
		<div class="w-44 bg-white/40 px-2 py-3 2xl:w-58">
			<div id="border"></div>
			<div class="space-y-1 py-2 2xl:space-y-2">
				{#each ITEMS as { label, href, description }}
					{@const current = href === page.url.pathname}
					<div class="flex h-7.5 items-center 2xl:h-10">
						<a
							{href}
							class={[
								'min-w-47 items-center self-stretch rounded-l-sm pr-8 pl-1 text-right font-[Megaton] text-[1.2rem] hover:bg-black hover:text-[#0000fc] 2xl:min-w-61 2xl:text-[1.6rem]',
								current && 'bg-black text-[#0000fc]'
							]}
							onmouseenter={() => {
								footnote = description;
							}}
							onmouseleave={() => {
								footnote = '';
							}}
						>
							{label}
						</a>
						<!-- 右剪头 -->
						<div
							data-current={current}
							class="flex w-16 2xl:w-22 shrink-0 self-stretch opacity-0 *:h-full *:shrink-0 *:bg-black data-[current=true]:opacity-100"
						>
							<div class="w-6 2xl:w-8"></div>
							<div class="arrow w-3.75 2xl:w-5"></div>
							<div class="angle w-7.5 2xl:w-10 -translate-x-2.25 2xl:-translate-x-3"></div>
							<div class="angle w-7.5 2xl:w-10 -translate-x-6.75 2xl:-translate-x-9"></div>
						</div>
						<!-- 星星 和 齿轮动画 -->
						<div
							data-current={current}
							class="flex size-9 items-center justify-center rounded-full border-3 opacity-0 data-[current=true]:opacity-100 2xl:size-12 2xl:border-4"
						>
              <!-- 星星 -->
							<svg class="-mt-1 min-w-10 2xl:min-w-14" width="800px" height="800px" viewBox="0 0 32 32">
								<path
									d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"
								/>
							</svg>
              <!-- 内圈 -->
							<svg
								class="motion-preset-spin motion-duration-4800 absolute -z-5 size-18 2xl:size-24"
								width="538"
								height="538"
								viewBox="0 0 538 538"
							>
								<path
									fill-rule="evenodd"
									fill="#69696980"
									d="M517.759,244C506.026,125.838,412.023,31.885,293.839,20.227L293.826,0.147C423.068,11.932,525.971,114.782,537.837,244H517.759ZM20.241,294c11.733,118.162,105.736,212.115,223.92,223.773l0.013,20.08C114.932,526.068,12.029,423.218.163,294H20.241ZM469.2,450.157L455,436.024a249.313,249.313,0,0,0,57.773-111.387l19.622,3.9A269.282,269.282,0,0,1,469.2,450.157Zm-17.62,17.735a268.96,268.96,0,0,1-157.407,69.93l-0.013-20.077A249.037,249.037,0,0,0,437.4,453.772ZM243.839,20.255A249.031,249.031,0,0,0,101.127,83.749L86.938,69.625A268.952,268.952,0,0,1,243.826.178ZM83.467,101.445a249.353,249.353,0,0,0-58.032,110.96L5.81,208.5A269.313,269.313,0,0,1,69.274,87.316ZM2.884,223.213l19.627,3.9Q21.1,235.471,20.241,244H0.163Q1.128,233.485,2.884,223.213Zm532.392,90.606-19.627-3.9c0.864-5.253,1.578-10.557,2.11-15.915h20.078Q536.918,304.02,535.276,313.819Z"
								/>
							</svg>
              <!-- 外圈 -->
							<svg
								class="-motion-rotate-loop-[1turn]/reset motion-ease-linear motion-duration-4800 absolute -z-5 size-36 2xl:size-48"
								width="934"
								height="934"
								viewBox="0 0 934 934"
							>
								<path
									fill-rule="evenodd"
									fill="#69696980"
									d="M927,467a464.915,464.915,0,0,1-2.714,50h10.065a467.745,467.745,0,0,1-101.48,245l-7.113-7.11a462.713,462.713,0,0,1-70.694,70.729l7.114,7.11A467.764,467.764,0,0,1,517.3,934.317l-0.006-10.065a461.865,461.865,0,0,1-100,.067l0.006,10.066a467.742,467.742,0,0,1-245.06-101.326l7.1-7.118a462.7,462.7,0,0,1-70.773-70.648l-7.106,7.118A467.761,467.761,0,0,1-.351,517H9.714a461.9,461.9,0,0,1,0-100H-0.351a467.747,467.747,0,0,1,101.48-244.995l7.113,7.11a462.713,462.713,0,0,1,70.694-70.729l-7.114-7.11A467.757,467.757,0,0,1,416.7-.317l0.006,10.065a461.92,461.92,0,0,1,100-.067L516.7-.385a467.749,467.749,0,0,1,245.06,101.326l-7.1,7.118a462.7,462.7,0,0,1,70.773,70.648l7.106-7.118A467.762,467.762,0,0,1,934.351,417H924.286A464.915,464.915,0,0,1,927,467ZM747.6,115.13l-0.046.046A447.813,447.813,0,0,0,516.715,19.747V19.37a451.14,451.14,0,0,0-100-.032v0.474A447.816,447.816,0,0,0,186.05,115.5l-0.426-.426A452.667,452.667,0,0,0,114.93,185.8l0.426,0.425A447.821,447.821,0,0,0,19.779,417H19.305a451.17,451.17,0,0,0,.1,100h0.377a447.826,447.826,0,0,0,95.9,231.174l-0.046.046c82.477,102.638,209.026,168.354,350.943,168.354,248.529,0,450-201.471,450-450C916.574,324.37,850.594,197.6,747.6,115.13Z"
								/>
							</svg>
						</div>
					</div>
				{/each}
			</div>
			<div id="border"></div>
		</div>
	</div>
</div>

<div class="font-pixel fixed right-10 bottom-8 text-6xl text-[#aaaaaa] select-none">{footnote}</div>

<style>
	#border {
		--size: 0.25rem;
		--color: black;

		height: calc(var(--size) / 2);
		margin: 0;
		background-color: transparent;
		background-image:
			linear-gradient(45deg, var(--color) 25%, transparent 25%),
			linear-gradient(-45deg, var(--color) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, var(--color) 75%),
			linear-gradient(-45deg, transparent 75%, var(--color) 75%);
		background-size: var(--size) var(--size);
		background-position:
			0 0,
			0 calc(var(--size) / 2),
			calc(var(--size) / 2) calc(var(--size) / -2),
			calc(var(--size) / -2) 0px;
	}

	.arrow {
		clip-path: polygon(100% 50%, 0 0, 0 100%);
	}

	.angle {
		clip-path: polygon(0 0, 50% 50%, 0 100%, 20% 100%, 70% 50%, 20% 0);
	}
</style>

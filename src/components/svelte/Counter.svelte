<script lang="ts">
	let count = $state(0);
</script>

<div class="rounded-lg border border-orange-500 bg-orange-500/10 p-6">
	<div class="mb-4 flex items-center gap-2">
		<span class="rounded bg-orange-500 px-2 py-1 text-xs font-bold text-white">Svelte</span>
		<span class="text-slate-400">Runes ($state)</span>
	</div>
	<p class="mb-4 text-4xl font-bold text-orange-400">{count}</p>
	<div class="flex gap-2">
		<button
			onclick={() => count--}
			class="rounded bg-orange-600 px-4 py-2 font-medium text-white hover:bg-orange-700"
		>
			-1
		</button>
		<button
			onclick={() => count++}
			class="rounded bg-orange-600 px-4 py-2 font-medium text-white hover:bg-orange-700"
		>
			+1
		</button>
		<button
			onclick={() => count = 0}
			class="rounded border border-orange-500 px-4 py-2 font-medium text-orange-400 hover:bg-orange-500/20"
		>
			Reset
		</button>
	</div>
</div>

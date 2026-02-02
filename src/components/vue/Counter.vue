<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
	<div class="rounded-lg border border-green-500 bg-green-500/10 p-6">
		<div class="mb-4 flex items-center gap-2">
			<span class="rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">Vue</span>
			<span class="text-slate-400">Composition API</span>
		</div>
		<p class="mb-4 text-4xl font-bold text-green-400">{{ count }}</p>
		<div class="flex gap-2">
			<button
				@click="count--"
				class="rounded bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
			>
				-1
			</button>
			<button
				@click="count++"
				class="rounded bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
			>
				+1
			</button>
			<button
				@click="count = 0"
				class="rounded border border-green-500 px-4 py-2 font-medium text-green-400 hover:bg-green-500/20"
			>
				Reset
			</button>
		</div>
	</div>
</template>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="setCount()">count is {{ count }}</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const setCount = () => {
	count.value++
}
</script>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>

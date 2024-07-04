<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive<{
  count: number
}>({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <h3>{{ state.count }}</h3>
  <button @click="increment">Increment</button>
</template>

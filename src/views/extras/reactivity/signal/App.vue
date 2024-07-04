<script setup lang="ts">
import { createSignal } from './solid-signal'

const [count, setCount] = createSignal(0)
</script>

<template>
  <h1>{{ count() }}</h1>
  <button @click="setCount((value) => value + 1)">increment</button>
</template>

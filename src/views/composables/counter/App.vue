<script lang="ts" setup>
import { useCounter } from './counter'
const { count, increment } = useCounter()
</script>

<template>
  <p>{{ count }}</p>
  <button @click="increment">Add</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <p>Current component: A</p>
  <span class="label">count: {{ count }}</span>
  <button @click="count++">+</button>
</template>

<style scoped>
.label {
  margin-right: 0.5em;
}
</style>

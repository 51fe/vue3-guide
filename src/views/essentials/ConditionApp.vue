<script lang="ts" setup>
import { ref } from 'vue'
const awesome = ref<boolean>(false)
const ok = ref(false)
</script>

<template>
  <button @click="awesome = !awesome">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>

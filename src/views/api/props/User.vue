<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    userName: string
    age: number
  }>(),
  {
    userName: ''
  }
)

const count = ref(0)
</script>

<template>
  <h1>Name: {{ userName }}</h1>
  <h1>Age: {{ age }}</h1>
  <div class="card">
    <button
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<script lang="ts" setup>
defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (e: 'enlarge-text'): void
}>()
</script>
<template>
  <h4>{{ title }}</h4>
  <button @click="emit('enlarge-text')">Enlarge text</button>
</template>

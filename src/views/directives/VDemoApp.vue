<script setup lang="ts">
import type { DirectiveBinding } from 'vue'

const vDemo = (el: HTMLElement, binding: DirectiveBinding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  const { color, text } = binding.value
  el.style.color = color
  el.innerText = text
}
</script>

<template>
  <div v-demo="{ color: 'red', text: 'hello!' }">Hello</div>
</template>

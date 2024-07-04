<script setup lang="ts">
import { ref, type DirectiveBinding } from 'vue'

const vColor = (el: HTMLElement, binding: DirectiveBinding) => {
  // 这会在 `mounted` 和 `updated` 时都调用
  el.style.color = binding.value
}

const color = ref('red')
</script>

<template>
  <p v-color="color">Hello</p>
  <p v-color="'#008080'">Hello</p>
</template>

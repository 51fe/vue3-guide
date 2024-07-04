<script lang="ts">
import { onMounted, ref } from 'vue'

export default {
  setup() {
    const input = ref<HTMLInputElement | null>(null)
    onMounted(() => {
      input.value?.focus()
    })
    return {
      input
    }
  }
}
</script>
<template>
  <input ref="input" />
</template>

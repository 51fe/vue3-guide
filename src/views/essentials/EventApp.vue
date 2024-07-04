<script lang="ts" setup>
import { ref } from 'vue'

const message = ref('')
function submit(event: KeyboardEvent) {
  event.preventDefault()
  message.value = (event.currentTarget as HTMLInputElement).value
}
</script>

<template>
  <input
    :value="message"
    @keyup.enter="submit"
  />
  <p>message: {{ message }}</p>
</template>

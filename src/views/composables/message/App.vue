<script lang="ts" setup>
import { useMessage } from './message'
const { message, updateMessage } = useMessage('Hello')
</script>

<template>
  <button
    class="btn"
    @click="updateMessage('world')"
  >
    Change
  </button>
  <div>{{ message }}</div>
</template>

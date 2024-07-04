<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.getElementById('result')!.innerHTML = 'the component is now mounted.'
})
</script>

<template>
  <div id="result"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const x = ref(0)
function onMousemove(e: MouseEvent) {
  x.value = e.clientX
}
</script>

<template>
  <div
    :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
    class="movearea"
    @mousemove="onMousemove"
  >
    <p>Move your mouse across this div...</p>
    <p>x: {{ x }}</p>
  </div>
</template>

<style scoped>
.movearea {
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s background-color ease;
}
</style>

<script setup lang="ts">
import { computed, onRenderTracked, onRenderTriggered, ref } from 'vue'

const count = ref(0)

function update() {
  count.value++
}

onRenderTracked((event) => {
  console.log(event)
})

onRenderTriggered((event) => {
  console.log(event)
})

const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // 当 count.value 被追踪为依赖时触发
    console.log(e)
  },
  onTrigger(e) {
    // 当 count.value 被更改时触发
    console.log(e)
  }
})

// 访问 plusOne，会触发 onTrack
console.log(plusOne.value)

// 更改 count.value，应该会触发 onTrigger
</script>
<template>
  <h3>onTrack && onTrigger</h3>
  <button @click="update">Trigger</button>
</template>

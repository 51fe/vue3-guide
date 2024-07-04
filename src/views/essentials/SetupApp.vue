<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      state,
      increment
    }
  }
}
</script>

<template>
  <h3>{{ state.count }}</h3>
  <button @click="increment">Increment</button>
</template>

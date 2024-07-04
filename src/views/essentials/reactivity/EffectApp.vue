<script lang="ts" setup>
import { effect, reactive } from 'vue'

const state = reactive({
  count: 0
})
effect(() => {
  console.log(state.count) // 当 count 发生改变时，这里会被触发
})
</script>
<template>
  <p>State count：{{ state.count }}</p>
  <button @click="state.count++">Increment</button>
</template>

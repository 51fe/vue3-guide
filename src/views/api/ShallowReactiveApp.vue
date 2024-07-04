<script lang="ts" setup>
import { shallowReactive, isReactive } from 'vue'

const state = shallowReactive({
  count: 1,
  nested: {
    number: 1
  }
})

// 改变 state 本身的性质是响应式的
console.log(state.count++)

// ...但是不转换嵌套对象
console.log(isReactive(state.nested)) // false
state.nested.number++
state.nested.number++
state.nested.number++
console.log(state.nested.number++) // 非响应式
</script>

<template>
  <p>{{ state.count }}</p>
  <button
    @click="
      () => {
        state.count++
      }
    "
  >
    Update
  </button>
  <p>{{ state.nested.number }}</p>
  <button
    @click="
      () => {
        state.nested.number++
      }
    "
  >
    Update nested
  </button>
</template>

<script lang="ts" setup>
import { reactive, toRef } from 'vue'

const state = reactive({
  count: 1,
  number: 1
})

const countRef = toRef(state, 'count')

countRef.value++

console.log(state.count) // 2

state.count++

console.log(countRef.value) // 3
</script>

<template>
  <p>{{ countRef }}</p>
</template>

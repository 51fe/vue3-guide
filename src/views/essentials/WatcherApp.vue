<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue'

const x = ref(0)
const y = ref(0)

watchEffect(() => {}, {
  flush: 'post'
})

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

type TODO = {
  userId: number
  id: number
  title: string
  completed?: boolean
}

const todoId = ref(1)
const data = ref<TODO>()
const unwatch = watchEffect(
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data.value = await response.json()
  },
  {
    flush: 'post'
  }
)
unwatch()
</script>

<template>
  <p>{{ data }}</p>
</template>

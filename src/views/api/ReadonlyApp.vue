<script lang="ts" setup>
import { reactive, readonly, watchEffect } from 'vue'

const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // 用于响应性追踪
  console.log(copy.count)
})

// 变更 original 会触发依赖于副本的侦听器
original.count++

// 变更副本将失败并导致警告
// copy.count++ // 警告!
</script>

<template>
  {{ original }}
</template>

<script lang="ts" setup>
import { shallowRef, watchEffect, triggerRef } from 'vue'

const shallow = shallowRef({
  greet: 'Hello, world'
})

// 第一次运行时记录一次 "Hello, world"
watchEffect(() => {
  console.log(shallow.value.greet)
})

// 这不会触发作用 (effect)，因为 ref 是浅层的
shallow.value.greet = 'Hello, universe'

// 记录 "Hello, universe"
triggerRef(shallow)
</script>

<template>
  <p>{{ shallow }}</p>
</template>

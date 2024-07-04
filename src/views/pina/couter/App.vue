<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
const counterStore = useCounterStore()
const userStore = useUserStore()
counterStore.count++
// 自动补全！ ✨
counterStore.$patch({ count: counterStore.count + 1 })
// 或使用 action 代替
counterStore.increment()
</script>

<template>
  <!-- 直接从 store 中访问 state -->
  <p>Current Count: {{ counterStore.count }}</p>
  <p>Double Count: {{ counterStore.doubleCount }}</p>
  <p><button @click="() => counterStore.increment()">Increase</button></p>
  <p>Full name: {{ userStore.fullName }}</p>
</template>

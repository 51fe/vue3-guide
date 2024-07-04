<script setup lang="ts">
import { onActivated, onDeactivated, shallowRef } from 'vue'
import CompA from './CompA.vue'
import CompB from './CompB.vue'

const current = shallowRef(CompA)

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})
</script>

<template>
  <div class="demo">
    <label
      ><input
        v-model="current"
        type="radio"
        :value="CompA"
      />
      A</label
    >
    <label
      ><input
        v-model="current"
        type="radio"
        :value="CompB"
      />
      B</label
    >
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>

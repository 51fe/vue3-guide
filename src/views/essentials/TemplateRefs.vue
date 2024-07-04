<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import ChildComp from './ChildComp.vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref<HTMLInputElement>()
const list = ref([1, 2, 3, 4, 5])

const itemRefs = ref([])

const child = ref()

onMounted(() => {
  input.value?.focus()
  console.log(itemRefs.value)
  console.log(child.value)
})
</script>
<template>
  <input ref="input" />
  <hr />
  <ul>
    <li
      v-for="item of list"
      ref="itemRefs"
      :key="item"
    >
      {{ item }}
    </li>
  </ul>
  <hr />
  <ChildComp ref="child" />
</template>

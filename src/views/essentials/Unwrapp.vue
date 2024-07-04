<script lang="ts" setup>
import { reactive, ref } from 'vue'
// 仅当 ref 是模板渲染上下文的顶层属性时才适用自动“解包”
const count = ref<number>(0)
const object = { foo: ref(10) }
const state = reactive({ count: ref(0) })
state.count = 100

// 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，
// ref 不会进行解包。
const books = [ref('Vue 3 Guide')]
// 这里需要 .value
console.log(books[0].value)

const map = new Map([['count', ref(0)]])
// 这里需要 .value
console.log(map.get('count')?.value)

function increment() {
  count.value++
  object.foo.value++
  state.count++
}
</script>

<template>
  <p>
    {{ count }}
  </p>
  <p>
    {{ object.foo }}
  </p>
  <p>
    {{ state.count }}
  </p>
  <button @click="increment">Add</button>
</template>

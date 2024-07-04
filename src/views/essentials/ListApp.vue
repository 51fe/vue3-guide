<script lang="ts" setup>
import { ref, computed, reactive } from 'vue'

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0).sort((a, b) => a - b)
})
</script>
<template>
  <p>{{ numbers.toString() }}</p>
  <hr />
  <ul>
    <li
      v-for="n in evenNumbers"
      :key="n"
    >
      {{ n }}
    </li>
  </ul>
  <hr />
  <ul>
    <li
      v-for="(value, key) in myObject"
      :key="key"
    >
      {{ key }}: {{ value }}
    </li>
  </ul>

  <hr />
  <span
    v-for="n in 10"
    :key="n"
    >{{ n }}</span
  >
</template>

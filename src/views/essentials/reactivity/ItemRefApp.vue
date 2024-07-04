<script setup lang="ts">
import { onMounted, ref } from 'vue'

const list = ref([1, 2, 3, 4, 5, 6, 7])

const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <ul>
    <li
      v-for="item in list"
      :key="item"
      ref="itemRefs"
    >
      {{ item }}
    </li>
  </ul>
</template>

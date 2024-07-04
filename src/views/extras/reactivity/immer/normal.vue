<script lang="ts" setup>
import { ref } from 'vue'

const tasks = ref<Task[]>([
  {
    id: 1,
    title: 'Learn Vue',
    done: true
  },
  {
    id: 2,
    title: 'Use Vue with Immer',
    done: false
  }
])

function toggleItem(index: number) {
  const todo = tasks.value[index]
  todo.done = !todo.done
}
</script>

<template>
  <ul>
    <li
      v-for="({ title, done }, index) in tasks"
      :key="index"
      :class="{ done }"
      @click="toggleItem(index)"
    >
      {{ title }}
    </li>
  </ul>
  {{ tasks }}
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

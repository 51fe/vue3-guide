<script lang="ts" setup>
import { ref } from 'vue'
import Todolist from './Todolist.vue'

const todos = ref<Todo[]>([
  {
    id: 1,
    text: 'read',
    completed: true
  },
  {
    id: 2,
    text: 'write',
    completed: false
  },
  {
    id: 3,
    text: 'speak',
    completed: true
  }
])
</script>
<template>
  <Todolist :todos="todos">
    <template #todo="{ todo }">
      <span v-if="todo.completed">✓</span>
      {{ todo.text }}
    </template>
  </Todolist>
</template>

<script lang="ts" setup>
import { useImmer } from './immer'

const tasks: Task[] = [
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
]

const [items, setItems] = useImmer(tasks)

function toggleItem(index: number) {
  setItems((draft) => {
    const todo = draft[index]
    todo.done = !todo.done
  })
}
</script>

<template>
  <ul>
    <li
      v-for="({ title, done }, index) in items"
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

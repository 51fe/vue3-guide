<template>
  <div>
    <button
      data-cy="decrement"
      @click="decrement"
    >
      -
    </button>
    <span data-cy="counter">{{ count }}</span>
    <button
      data-cy="increment"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  count?: number
}>()

const emit = defineEmits<{
  change: [count: number]
}>()

const count = ref(props.count || 0)

const increment = () => {
  count.value++
  emit('change', count.value)
}

const decrement = () => {
  count.value--
  emit('change', count.value)
}
</script>

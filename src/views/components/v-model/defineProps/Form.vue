<template>
  <form>
    <div class="form-item">
      <label for="name">Name</label>
      <input
        id="name"
        :value="modelValue"
        @input="changeValue($event)"
      />
    </div>
    <div class="form-item">
      <label for="percent">Percent</label>
      <input
        id="percent"
        v-model="current"
        type="number"
        :min="0"
        :max="100"
        :step="1"
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  percent: number
  modelModifiers?: {
    capitalize: boolean
  }
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:percent', value: number): void
}>()

const changeValue = (event: Event) => {
  let value = (event.target as HTMLInputElement).value
  if (props.modelModifiers?.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}

const current = computed({
  get() {
    return Math.round(props.percent * 100)
  },
  set(value: number) {
    emit('update:percent', value / 100)
  }
})
</script>

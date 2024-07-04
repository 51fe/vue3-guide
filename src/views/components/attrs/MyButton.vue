<script lang="ts" setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
console.log(attrs)

defineOptions({
  name: 'MyButton',
  inheritAttrs: false
})
</script>
<template>
  <div class="btn-wrapper">
    <button
      class="btn"
      v-bind="$attrs"
      @click="() => console.log('from child')"
    >
      click me
    </button>
  </div>
  <p>Fallthrough attribute: {{ $attrs }}</p>
</template>

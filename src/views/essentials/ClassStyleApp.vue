<script lang="ts" setup>
import { reactive, ref } from 'vue'

const isActive = ref(true)
const hasError = ref(false)
const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})

function check() {
  isActive.value = !isActive.value
  hasError.value = !hasError.value
}
</script>
<template>
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  >
    has a error
  </div>
  <div :style="styleObject">styleObject</div>
  <p>
    <button @click="check">Toggle</button>
  </p>
</template>
<style>
.static {
  font-size: 1rem;
}
.active {
  text-decoration: line-through;
}
.text-danger {
  color: #900;
}
</style>

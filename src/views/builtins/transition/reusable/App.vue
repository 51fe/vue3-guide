<script lang="ts" setup>
import { ref } from 'vue'
import ReusableTransition from './ReusableTransition.vue'

const show = ref(false)
</script>
<template>
  <p>
    <ReusableTransition>
      <div v-if="show">Hello</div>
    </ReusableTransition>
  </p>
  <button @click="show = !show">Toggle</button>
</template>

<script lang="ts" setup>
import { store } from './store'
</script>

<template>
  <div>
    <button @click="store.increment()">From A: {{ store.count }}</button>
  </div>
</template>

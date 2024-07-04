<script lang="ts" setup>
import MouseTracker from './MouseTracker.vue'
</script>
<template>
  <MouseTracker v-slot="{ x, y }">Mouse is at: {{ x }}, {{ y }}</MouseTracker>
</template>

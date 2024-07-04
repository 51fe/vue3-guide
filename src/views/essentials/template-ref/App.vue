<script lang="ts" setup>
import CompRef from './CompRef.vue'
import ScriptRef from './ScriptRef.vue'
import SetUpRef from './SetUpRef.vue'
</script>
<template>
  <section>
    <CompRef />
    <ScriptRef />
    <SetUpRef />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}
</style>

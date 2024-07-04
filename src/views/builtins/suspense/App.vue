<script lang="ts" setup>
import AsyncComp from './AsyncComp.vue'
</script>
<template>
  <Suspense>
    <template #default>
      <AsyncComp />
    </template>
    <template #fallback>
      <h1>loading...</h1>
    </template>
  </Suspense>
</template>

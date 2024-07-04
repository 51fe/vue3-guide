<script lang="ts" setup>
import BaseLayout from './BaseLayout.vue'
</script>
<template>
  <BaseLayout>
    <template #header="headerProps">
      <h1>{{ headerProps.title }}</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>
</template>

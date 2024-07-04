<script setup lang="ts">
import { useRouter } from 'vue-router'

const items = useRouter()
  .getRoutes()
  .filter((item) => item.path.match(/\//g)?.length === 1)
</script>

<template>
  <nav>
    <RouterLink
      v-for="(item, index) in items"
      :key="index"
      :to="item.path"
      >{{ item.name }}</RouterLink
    >
  </nav>
  <RouterView />
</template>

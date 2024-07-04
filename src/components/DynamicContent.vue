<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, type RouteRecordRaw } from 'vue-router'

const route = useRoute().matched[0]
const items = ref<RouteRecordRaw[]>(route.children)

const formatMeneName = (item: RouteRecordRaw) => {
  const index = String(item.name).indexOf('-')
  return String(item.name).substring(index + 1)
}
</script>

<template>
  <section class="container">
    <aside class="side-bar">
      <RouterLink
        v-for="item in items"
        :key="item.name"
        :to="item.path.toLowerCase()"
        >{{ formatMeneName(item).toLowerCase() }}
      </RouterLink>
    </aside>
    <main class="main-view">
      <RouterView />
    </main>
  </section>
</template>

<style>
.container {
  position: relative;
}

.side-bar {
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 1rem;
  height: calc(100vh - 60px);
}

.side-bar a {
  font-size: 18px;
  display: inline-block;
  padding: 0 4px;
}

.main-view {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 260px;
  right: 0;
  border-left: 2px solid var(--color-border);
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

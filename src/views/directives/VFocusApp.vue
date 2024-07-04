<script setup lang="ts">
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus()
}
</script>

<template>
  <input v-focus />
</template>

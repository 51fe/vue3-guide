<script lang="ts" setup>
import { provide, ref } from 'vue'

import THEME from './key'

import ThemeDemo from './ThemeDemo.vue'

const theme = ref('light')

function updateTheme() {
  theme.value = 'dark'
}

provide(THEME, {
  theme,
  updateTheme
})
</script>
<template>
  <ThemeDemo />
</template>

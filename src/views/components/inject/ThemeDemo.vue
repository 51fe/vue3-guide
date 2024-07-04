<script setup lang="ts">
import { inject } from 'vue'
import THEME from './key'

const { theme, updateTheme } = inject(THEME)!
</script>

<template>
  <p>{{ theme }}</p>
  <button @click="updateTheme">{{ theme }}</button>
</template>

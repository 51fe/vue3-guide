<script lang="ts" setup>
import { ref } from 'vue'
import CapitalizeInput from './CapitalizeInput.vue'

const firstName = ref('John')
</script>
<template>
  <CapitalizeInput v-model.capitalize="firstName" />
  <p>{{ firstName }}</p>
</template>

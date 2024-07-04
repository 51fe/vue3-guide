<script lang="ts" setup>
import { ref } from 'vue'
import MultipleBindings from './MultipleBindings.vue'

const firstName = ref('John')
const lastName = ref('Doe')
</script>
<template>
  <MultipleBindings
    v-model:first-name="firstName"
    v-model:last-name="lastName"
  />
  <p>{{ firstName }} {{ lastName }}</p>
</template>

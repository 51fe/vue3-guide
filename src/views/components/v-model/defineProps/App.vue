<script lang="ts" setup>
import { ref } from 'vue'
import Form from './Form.vue'

const name = ref('Someone')
const percent = ref(0.24)
</script>
<template>
  <Form
    v-model.capitalize="name"
    v-model:percent.number="percent"
  />
  <div class="wrapper">
    <div>Name: {{ name }}</div>
    <div>Percent: {{ percent }}</div>
  </div>
</template>

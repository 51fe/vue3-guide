<script lang="ts" setup>
import { reactive } from 'vue'
const employee = reactive({
  name: 'Peter',
  contact: {
    mobile: 13512345678,
    address: 'shenzhen'
  }
})
</script>
<template>
  <p>mobile：{{ employee.contact.mobile }}</p>
  <button @click="employee.contact.mobile = 16812345678">Change</button>
</template>

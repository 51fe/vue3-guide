<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(100)
const object = { id: ref(1) }
</script>
<template>
  <p>count：{{ count }}</p>
  <p>object.id：{{ object.id }}</p>
  <!-- <p>object.id + 1：{{ object.id + 1 }}</p> -->
  <p>object.id.value + 1：{{ object.id.value + 1 }}</p>
</template>

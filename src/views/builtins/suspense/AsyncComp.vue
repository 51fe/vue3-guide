<script lang="ts" setup>
import { ref } from 'vue'

let res = ref(await fetch('https://jsonplaceholder.typicode.com/todos'))
const result = await res.value.json()
</script>
<template>
  {{ result[0] }}
</template>

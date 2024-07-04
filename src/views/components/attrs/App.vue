<script setup lang="ts">
import MyButton from './MyButton.vue'
</script>

<template>
  <MyButton
    class="large"
    @click="() => console.log('from parent')"
  />
</template>

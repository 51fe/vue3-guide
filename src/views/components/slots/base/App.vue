<script lang="ts" setup>
import { ref } from 'vue'
import FancyButton from './FancyButton.vue'

const message = ref('click me')
</script>
<template>
  <p>{{ message }}</p>
  <p>
    <FancyButton @click="() => (message = 'Changed')">{{ message }}</FancyButton>
  </p>
  <p>
    <FancyButton />
  </p>
  <p>
    <FancyButton v-slot="slotProps">
      <span :style="{ fontSize: slotProps.size }">Add</span>
    </FancyButton>
  </p>
</template>

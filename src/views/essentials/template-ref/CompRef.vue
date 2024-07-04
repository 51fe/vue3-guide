<script setup lang="ts">
import { ref } from 'vue'
import MyModal from './MyModal.vue'
import type Modal from './MyModal.vue'

const modal = ref<InstanceType<typeof Modal> | null>(null)

const openModal = () => {
  modal.value?.open()
}
</script>
<template>
  <MyModal ref="modal" />
  <button @click="openModal">Open</button>
</template>

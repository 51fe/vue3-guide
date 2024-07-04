<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
const userStore = useUserStore()
const { user } = userStore
</script>
<template>
  <p>Current Count: {{ counter.count }}</p>
  <form>
    <div class="form-item">
      <label for="firtName">Firt name:</label>
      <input
        id="firstName"
        v-model="user.firstName"
      />
    </div>
    <div class="form-item">
      <label for="lastName">Last name: </label>
      <input
        id="lastName"
        v-model="user.lastName"
      />
    </div>
    <div class="form-item">
      <button type="submit">Submit</button>
    </div>
  </form>
  <p>Full name: {{ userStore.fullName }}</p>
</template>

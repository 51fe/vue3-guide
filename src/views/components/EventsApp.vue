<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const emit = defineEmits({
  // 没有校验
  click: null,

  // 校验 submit 事件
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.warn('Invalid submit event payload!')
      return false
    }
  }
})

function submitForm(email: string, password: string) {
  emit('submit', { email, password })
}
</script>

<template>
  <form @submit.prevent="submitForm(email, password)">
    <div>
      <label for="email">Email: </label>
      <input
        id="email"
        v-model="email"
      />
    </div>
    <div>
      <label for="password">password: </label>
      <input
        id="password"
        v-model="password"
      />
    </div>
    <div><button type="submit">submit</button></div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}
</style>

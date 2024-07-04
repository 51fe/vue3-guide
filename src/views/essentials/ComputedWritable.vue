<script setup lang="ts">
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed<string>({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    ;[firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<template>
  <div>
    <input v-model="firstName" />
  </div>
  <div>
    <input v-model="lastName" />
  </div>
  <p>{{ fullName }}</p>
</template>

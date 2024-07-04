import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useUserStore = defineStore('counter', () => {
  const user = reactive({
    firstName: 'Jim',
    lastName: 'Li'
  })
  const fullName = computed(() => user.lastName + ' ' + user.firstName)

  return { user, fullName }
})

import { ref } from 'vue'
export function useMessage(initValue: string) {
  const message = ref(initValue)
  function updateMessage(value: string) {
    message.value = value
  }

  return {
    message,
    updateMessage
  }
}

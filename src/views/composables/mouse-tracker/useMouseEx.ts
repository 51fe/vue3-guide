import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouseEx() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', (evt) => {
    const event = evt as MouseEvent
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}

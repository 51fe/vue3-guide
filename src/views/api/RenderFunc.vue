<script lang="ts">
import { ref, computed, watchEffect, h } from 'vue'

export default {
  name: 'RenderFunc',
  setup() {
    let x = ref(0)
    setTimeout(() => {
      x.value += 100
    }, 1000)
    const y = computed(() => {
      return x.value + 100
    })
    watchEffect(() => {
      console.log(x.value)
    })
    return () => {
      // warn
      const n = x.value
      return h('div', [h('h1', 'X: ' + n), h('h1', 'Y: ' + y.value)])
    }
  }
}
</script>

import { defineComponent } from 'vue'
import SimpleCounter from './SimpleCounter'

export default defineComponent({
  name: 'JSXDemo',
  setup() {
    const msg = 'hello'
    return () => <SimpleCounter message={msg} />
  }
})

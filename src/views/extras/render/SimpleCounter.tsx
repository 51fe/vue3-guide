import { defineComponent, ref, watch, watchEffect } from 'vue'

export default defineComponent({
  name: 'SimpleCounter',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  setup(props, { expose }) {
    const count = ref(0)
    watchEffect(() => {
      console.log(count.value)
    })

    watch(count, (val) => {
      console.log(val)
    })
    expose({
      count
    })
    return () => (
      <>
        <h3>{props.message}</h3>
        <input v-model={count.value} />
        <p>{count.value}</p>
        <button onClick={() => count.value++}>Add</button>
      </>
    )
  }
})

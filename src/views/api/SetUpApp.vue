<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { expose, attrs }) {
    console.log(props.title)
    console.log(attrs)
    const count = ref(0)
    const increment = () => ++count.value
    expose({
      increment
    })
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count
    }
    // return () => h('div', count.value)
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <p>{{ title }}</p>
  <p>{{ count }}</p>
  <button @click="count++">Add</button>
</template>

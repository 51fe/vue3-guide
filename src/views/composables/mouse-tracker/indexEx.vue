<script lang="ts">
import { useMouseEx } from './useMouseEx'

export default {
  setup() {
    const { x, y } = useMouseEx()
    return { x, y }
  },
  mounted() {
    // setup() 暴露的属性可以在通过 `this` 访问到
    console.log(this.x)
  }
  // ...其他选项
}
</script>
<template>Mouse position is at: {{ x }}, {{ y }}</template>

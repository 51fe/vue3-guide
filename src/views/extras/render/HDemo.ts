import { defineComponent, h, createTextVNode } from 'vue'

export default defineComponent({
  name: 'HDemo',
  render() {
    return h('div', { class: 'demo' }, [
      h('img', { src: '/favicon.ico', alt: 'logo' }),
      createTextVNode('Hello')
    ])
  }
})

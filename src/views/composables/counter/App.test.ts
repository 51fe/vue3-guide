import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.find('p').text()).toBe('0')
  })
  it('increments the count to 1 on clickthe button once', async () => {
    const wrapper = mount(App)
    await wrapper.get('button').trigger('click')
    expect(wrapper.get('p').text()).toBe('1')
  })
})

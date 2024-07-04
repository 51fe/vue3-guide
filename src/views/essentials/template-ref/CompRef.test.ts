import { expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CompRef from './CompRef.vue'
import type Modal from './MyModal.vue'

test('CompRef', async () => {
  const wrapper = mount(CompRef)
  const open = vi.fn()
  const m = wrapper.vm.$refs.modal as InstanceType<typeof Modal>
  m.open = open
  // link where parent method calls this.$refs.childComponent.someMethod
  await wrapper.find('button').trigger('click')
  expect(open).toHaveBeenCalled()
})

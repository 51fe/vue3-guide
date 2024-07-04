import { expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import Modal from './Modal.vue'

test('Modal is hidden by default', () => {
  const { queryByRole } = render(Modal)
  expect(queryByRole('dialog')).not.toBeInTheDocument()
})

test('emits close event', async () => {
  const { getByText, queryByRole, emitted } = render(Modal, {
    props: {
      show: true
    }
  })
  expect(queryByRole('dialog')).toBeInTheDocument()
  await fireEvent.click(getByText('OK'))
  expect(emitted('close')).toHaveLength(1)
})

import { expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import ModalButton from './App.vue'

test('Teleport', async () => {
  const { queryByRole, getByText, getByRole } = render(ModalButton)

  expect(queryByRole('dialog')).not.toBeInTheDocument()

  // Open the modal
  await fireEvent.click(getByText('Show Modal'))

  const modal = getByRole('dialog')

  expect(modal).toBeInTheDocument()
  // expect(modal).toBe('BODY')

  // Close the modal
  await fireEvent.click(getByText('OK'))

  expect(queryByRole('dialog')).not.toBeInTheDocument()
})

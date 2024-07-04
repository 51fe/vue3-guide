import { expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'
import Component from './SetupScript.vue'

const { getByRole } = render(Component)
const countElement = getByRole('heading', { level: 3 })

test('renders a count of 0', () => {
  expect(countElement).toHaveTextContent('0')
})

test('renders a count of 1 after clicking the increment button', async () => {
  const incrementButton = getByRole('button', { name: 'Increment' })
  await fireEvent.click(incrementButton)
  expect(countElement).toHaveTextContent('1')
})

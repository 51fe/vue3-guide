import { expect, test } from 'vitest'
import { useMessage } from './message'

test('useMessage', () => {
  const { message, updateMessage } = useMessage('hello')
  expect(message.value).toBe('hello')

  updateMessage('world')

  expect(message.value).toBe('world')
})

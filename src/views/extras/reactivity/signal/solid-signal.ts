import { shallowRef, triggerRef } from 'vue'

export function createSignal<T>(value: T, options?: { equals: boolean }) {
  const ref = shallowRef(value)
  const get = () => ref.value
  const set = (func?: (param: T) => T) => {
    ref.value = typeof func === 'function' ? func(ref.value) : func
    if (options?.equals === false) triggerRef(ref)
  }
  return [get, set]
}

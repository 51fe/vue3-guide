import produce, { type Draft } from 'immer'
import { shallowRef } from 'vue'

/**
 * Returns a stateful value as a shallow ref, and recipe function is free to mutate the stateful value however it wants.
 * <p> It will be made deeply reactive, and is typically used for performance optimizations of large data.</p>
 * @param base - the initial state
 */

export function useImmer<T>(base: T) {
  const state = shallowRef(base)

  const setState = (recipe: (draft: Draft<T>) => void | Draft<T>): void => {
    state.value = produce(state.value, recipe)
  }

  return [state, setState] as const
}

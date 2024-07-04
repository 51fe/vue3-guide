// counter.ts
import { shallowRef, type ShallowRef } from 'vue'

/**
 * Hello
 */

interface Counter {
  /**
   * 计数器变量
   */
  count: ShallowRef<number>
  /**
   * 计数器增量回调
   */
  increment: () => number
}

export function useCounter(): Counter {
  const count = shallowRef(0)

  const increment = () => count.value++

  return {
    count,
    increment
  }
}

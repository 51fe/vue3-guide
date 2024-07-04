import type { InjectionKey, Ref } from 'vue'

const THEME = Symbol() as InjectionKey<{ theme: Ref<string>; updateTheme: () => void }>

export default THEME

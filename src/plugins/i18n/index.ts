import type { App } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}

export default {
  install: (app: App<Element>, options: any) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key: string) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce<any>((accu, k) => {
        if (accu) {
          return accu[k]
        }
      }, options)
    }
    app.provide('I18N', options)
  }
}

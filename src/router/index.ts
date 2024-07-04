import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const modulesFiles = import.meta.glob('../views/**/*App.vue')

const map = new Map()
for (const module in modulesFiles) {
  const matched = module.match(/(?<=\.\.\/views\/)(.+)(?=App\.vue)/g)
  const paths = matched?.[0].replace(/\/$/, '').split('/')
  const path = paths?.[0] as string
  if (paths?.length === 1) {
    routes.push({
      path: '/' + path,
      name: path,
      component: modulesFiles[module],
      children: []
    })
  } else {
    map.set(paths, modulesFiles[module])
  }
}

map.forEach((value, key) => {
  routes.forEach((item) => {
    if (item.path.substring(1) === key[0]) {
      item.children?.push({
        path: '/' + key.join('/'),
        name: key.join('-'),
        component: value
      })
    }
  })
})
console.log(import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

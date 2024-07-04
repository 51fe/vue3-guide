<script setup lang="ts">
import { shuffle as _shuffle } from 'lodash-es'
import { ref } from 'vue'

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}

function reset() {
  items.value = getInitialItems()
}

function shuffle() {
  items.value = _shuffle(items.value)
}

function remove(item: number) {
  const i = items.value.indexOf(item)
  if (i > -1) {
    items.value.splice(i, 1)
  }
}
</script>

<template>
  <button @click="insert">insert at random index</button>
  <button @click="reset">reset</button>
  <button @click="shuffle">shuffle</button>

  <TransitionGroup
    tag="ul"
    name="fade"
    class="container"
  >
    <div
      v-for="item in items"
      :key="item"
      class="item"
    >
      {{ item }}
      <button
        class="remove"
        @click="remove(item)"
      >
        x
      </button>
    </div>
  </TransitionGroup>
</template>

<style scoped>
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  padding: 8px 4px;
  margin: 4px;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  box-sizing: border-box;
}

.remove {
  position: absolute;
  right: 10px;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>

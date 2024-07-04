<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

const show = ref(true)

function onBeforeEnter(el: gsap.TweenTarget) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}

function onEnter(el: gsap.TweenTarget, done: gsap.Callback) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
}

function onLeave(el: gsap.TweenTarget, done: gsap.Callback) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
}
</script>

<template>
  <button @click="show = !show">Toggle</button>

  <Transition
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <div
      v-if="show"
      class="gsap-box"
    ></div>
  </Transition>
</template>

<style>
.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>

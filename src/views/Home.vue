<script setup lang="ts"></script>

<template>
  <article>
    <h1 class="title">Examples for Vue3 guide doc</h1>
    <section class="links">
      <a
        href="https://router.vuejs.org"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="75%"
          height="75%"
        />
      </a>
      <a
        href="https://pinia.vuejs.org"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="pina logo"
          class="logo"
          src="@/assets/pina.svg"
          width="75%"
          height="75%"
        />
      </a>
      <a
        href="https://www.typescriptlang.org"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="typescript logo"
          class="logo"
          src="@/assets/typescript.svg"
          width="75%"
          height="75%"
        />
      </a>

      <a
        href="https://vitejs.dev"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="vite logo"
          class="logo"
          src="@/assets/vite.svg"
          width="75%"
          height="75%"
        />
      </a>
      <a
        href="https://vitest.dev"
        target="_blank"
        rel="noopener"
      >
        <img
          alt="vitest logo"
          class="logo"
          src="@/assets/vitest.svg"
          width="75%"
          height="75%"
        />
      </a>
    </section>
  </article>
</template>

<style scoped>
article {
  padding: 2rem;
}

.title {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
}

.links {
  margin-top: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

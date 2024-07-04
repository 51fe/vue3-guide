<script lang="ts" setup></script>
<template>
  <div class="container">
    <header>
      <slot
        name="header"
        title="Here might be a page title"
      ></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlogPost from './BlogPost.vue'
import ButtonCounter from './SetupScript.vue'

interface POST {
  id: number
  title: string
}

const postFontSize = ref(1)

const posts = ref<POST[]>([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 1"
    />
  </div>
</template>

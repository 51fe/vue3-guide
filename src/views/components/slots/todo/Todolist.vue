<script lang="ts" setup>
withDefaults(
  defineProps<{
    todos: Todo[]
  }>(),
  {
    todos: () => []
  }
)
</script>
<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
    >
      <!--
    我们为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
    -->
      <slot
        name="todo"
        :todo="todo"
      >
        <!-- 后备内容 -->
        {{ todo.text }}
      </slot>
    </li>
  </ul>
</template>

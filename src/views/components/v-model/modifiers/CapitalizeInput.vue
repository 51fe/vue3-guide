<script setup lang="ts">
const [model, modifiers] = defineModel<string, 'trim' | 'capitalize'>({
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})

console.log(modifiers) // { capitalize: true }
</script>

<template>
  <form>
    <div class="form-item">
      <label for="firstname">First name</label>
      <input
        id="firstname"
        v-model="model"
        type="text"
        name="firstname"
      />
    </div>
  </form>
</template>

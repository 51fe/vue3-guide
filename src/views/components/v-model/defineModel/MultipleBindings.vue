<script setup lang="ts">
const firstName = defineModel<string>('firstName', { required: true })
const lastName = defineModel<string>('lastName', { default: 'Someone' })
</script>

<template>
  <form>
    <div class="form-item">
      <label for="firstName">First name</label>
      <input
        id="firstName"
        v-model="firstName"
        type="text"
        name="firstName"
        placeholder="First Name"
      />
    </div>
    <div class="form-item">
      <label for="lastName">Last name</label>
      <input
        id="lastName"
        v-model="lastName"
        type="text"
        name="lastName"
        placeholder="Last Name"
      />
    </div>
  </form>
</template>

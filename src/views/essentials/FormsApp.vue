<script lang="ts" setup>
import { ref } from 'vue'

const message = ref('')
const checkedNames = ref([])
const selected = ref('')
const toggle = ref(false)
</script>

<template>
  <p>Message is: {{ message }}</p>
  <input
    v-model.lazy="message"
    placeholder="edit me"
  />
  <p>-------------------------------</p>
  <p>Checked names: {{ checkedNames }}</p>
  <input
    id="jack"
    v-model="checkedNames"
    type="checkbox"
    value="Jack"
  />
  <label for="jack">Jack</label>

  <input
    id="john"
    v-model="checkedNames"
    type="checkbox"
    value="John"
  />
  <label for="john">John</label>

  <input
    id="mike"
    v-model="checkedNames"
    type="checkbox"
    value="Mike"
  />
  <label for="mike">Mike</label>

  <hr />
  <p>Selected: {{ selected }}</p>

  <select v-model="selected">
    <option
      disabled
      value=""
    >
      Please select one
    </option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
    <option>D</option>
  </select>
  <p>-------------------------------</p>
  <input
    id="married"
    v-model="toggle"
    type="checkbox"
    true-value="已婚"
    false-value="未婚"
  />
  <label for="married">{{ toggle || '未婚' }}</label>
</template>

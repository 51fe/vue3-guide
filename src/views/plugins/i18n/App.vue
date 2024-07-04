<script lang="ts" setup>
import { inject } from 'vue'

const i18n = inject('I18N')

console.log(i18n)
</script>
<template>
  <h1>{{ $translate('greetings.hello') }}</h1>
</template>

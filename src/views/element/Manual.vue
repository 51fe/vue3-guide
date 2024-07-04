<template>
  <div class="container">
    <h1>Custom theme example (on demand)</h1>
    <el-button
      type="primary"
      @click="onClick"
      >Default</el-button
    >
    <el-radio label="1">One</el-radio>
    <el-checkbox :checked="true">Sure</el-checkbox>
  </div>
</template>

<script setup lang="ts">
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-message.css'

import { ElButton, ElMessage } from 'element-plus'

function onClick() {
  ElMessage.success('验证码区分大小写，有效期5分钟')
}
</script>

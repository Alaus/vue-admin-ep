<script setup lang="ts">
// TypeScript 使用 SCSS 全局变量
import variables from '@/styles/variables.module.scss'

import { useCounterStore } from '@/store/counter'

import { useUserStoreHook } from '@/store/modules/user'

const counterStore = useCounterStore()

console.log(variables.bgColor)

defineProps<{ msg: string }>()

const count = ref(0)

const userStore = useUserStoreHook()

function onLogin() {
  let params = {
    username: 'admin',
    password: '123456'
  }
  const res = userStore.login(params)
  console.log('res', res)
}
</script>

<template>
  <div class="box" />

  <div style="width: 300px; word-wrap: break-word; text-align: left">token: {{ userStore.token }}</div>

  <el-card class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]">
    <template #header> 子组件 HelloWorld.vue</template>
    <el-form>
      <el-form-item label="数字："> {{ counterStore.count }}</el-form-item>
      <el-form-item label="加倍："> {{ counterStore.double }}</el-form-item>
    </el-form>
  </el-card>

  <div>
    <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
    <el-button type="info"><i-ep-InfoFilled />Info</el-button>
    <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
    <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
    <el-button type="info"><svg-icon icon-class="guitar" />SVG 本地图标</el-button>
    <el-button type="success" icon="el-icon-user" @click="onLogin">登录</el-button>
  </div>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
.box {
  width: 100px;
  height: 100px;
  background-color: $bg-color;
}
</style>
@/api/auth/login

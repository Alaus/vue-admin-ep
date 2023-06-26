<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()

const numPlus = ref(0)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <h1 class="text-3xl">vue-admin-ep-父组件</h1>
    <el-button type="primary" @click="counterStore.increment(3)" style="margin-right: 20px">count+3</el-button>
    <el-input-number v-model="numPlus" @change="counterStore.increment(numPlus)"></el-input-number>
  </div>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

// src/store/counter.ts
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // ref变量 → state 属性
  const count = ref(0);
  // computed计算属性 → getters
  const double = computed(() => {
    return count.value * 2;
  });
  // function函数 → actions
  function increment(x: number = 1) {
    count.value += x;
  }

  return { count, double, increment };
});


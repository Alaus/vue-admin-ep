import { defineStore } from "pinia";

// src/store/modules/user.ts
import { loginApi } from '@/api/auth';
import { LoginData } from '@/api/auth/types';

const token = ref<string>('');

/**
 * 登录调用
 *
 * @param {LoginData}
 * @returns
 */
 function login(loginData: LoginData) {
  return new Promise<void>((resolve, reject) => {
    loginApi(loginData)
      .then(response => {
        const { tokenType, accessToken } = response.data;
        token.value = tokenType + ' ' + accessToken; // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
}
/**
 * 登出
 */
function logout() {
  token.value = '';
}

export const useUserStoreHook = defineStore("user", () => {
  return {
    token,
    login,
    logout
  };
});
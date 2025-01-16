<template>
  <div>
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

async function handleLogin() {
  await authStore.fetchUserInfo();
  router.push({ name: "home" });
}
</script>

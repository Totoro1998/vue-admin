<template>
  <div class="global-menu">
    <h1>GlobalMenu</h1>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();
const menus = computed(() => authStore.menus);
console.log("menus", menus.value);
</script>

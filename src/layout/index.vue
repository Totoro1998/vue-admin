<template>
  <div class="main">
    <GlobalSider />
    <div class="main-content">
      <GlobalHeader />
      <GlobalContent />
    </div>
  </div>
</template>

<script setup>
import GlobalSider from "./_components/GlobalSider.vue";
import GlobalHeader from "./_components/GlobalHeader.vue";
import GlobalContent from "./_components/GlobalContent.vue";
</script>

<style scoped>
.main {
  @apply flex h-full min-h-full;
}

.main-content {
  @apply flex-1 flex flex-col;
  overflow: hidden;
}
</style>

<script setup lang="ts">
import ErrorMessage from '@/components/ErrorMessage.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center px-4">
    <ErrorMessage :status-code="404" />
    <img width="656" height="590" src="/rick-and-morty-404.png">
  </div>
</template>

<style scoped></style>

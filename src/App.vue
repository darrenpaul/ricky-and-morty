<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/navigation/Navbar.vue'
import { useEpisodeStore } from '@/stores/episodes'

useEpisodeStore()
</script>

<template>
  <main class="bg-base dark:bg-base-dark min-h-screen">
    <div class="mx-auto max-w-7xl pb-8">
      <Navbar class="mb-8" />

      <div class="pt-24 lg:pt-36">
        <RouterView />
      </div>

      <Footer class="mt-8" />
    </div>
  </main>
</template>

<style></style>

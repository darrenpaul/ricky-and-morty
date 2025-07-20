<script setup lang="ts">
import Attributions from '@/components/Attributions.vue'
import Container from '@/components/Container.vue'
</script>

<template>
  <main class="w-full max-w-7xl px-4">
    <div class="flex flex-col items-center gap-8 lg:flex-row">
      <div class="grid max-w-[80ch] gap-4">
        <Container>
          <h1 class="mb-4 text-4xl dark:text-white">
            Welcome to the Rick and Morty Character Database, or whatever.
          </h1>
          <h2 class="mb-2 dark:text-white/70">
            Yeah, that's right. You’ve stumbled into the interdimensional archive of all the
            weirdos, aliens, clones, and god-knows-what-else we’ve run into across the multiverse.
          </h2>

          <p class="mb-2 dark:text-white/70">
            Wanna know what dimension Birdperson’s from? Curious how many times Jerry’s embarrassed
            himself? It’s all here. Species, backstories, episodes—everything.
          </p>

          <p class="dark:text-white/70">
            So quit wasting time and start clicking, before the Council of Ricks decides to wipe
            this thing from existence. Again.
          </p>
        </Container>

        <Attributions class="hidden lg:block" />
      </div>

      <img width="893" height="999" src="/rick-and-morty.png">

      <Attributions class="block lg:hidden" />
    </div>
  </main>
</template>

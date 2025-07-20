<script setup lang="ts">
import Container from '@/components/Container.vue'
import TextItem from '@/components/elements/TextItem.vue'
</script>

<template>
  <div class="w-fit">
    <Container>
      <TextItem value="Attributions" class="mb-4" />

      <div class="flex flex-col gap-1 dark:text-blue-300">
        <a class="font-space-mono underline" href="https://rickandmortyapi.com/" target="_blank"
          >Rick and Morty API</a
        >
        <a
          class="font-space-mono underline"
          href="https://www.pngegg.com/en/png-fyncn"
          target="_blank"
          >Png Egg</a
        >
        <a class="font-space-mono underline" href="https://heroicons.com/outline" target="_blank"
          >Heroicons</a
        >
      </div>
    </Container>
  </div>
</template>

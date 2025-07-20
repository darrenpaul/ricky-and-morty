<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Dialog = defineAsyncComponent(() => import('@/components/Dialog.vue'))
const CharacterFilters = defineAsyncComponent(
  () => import('@/components/characters/CharacterFilters.vue'),
)
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Dialog label="Filters" class="block lg:hidden">
        <CharacterFilters />
      </Dialog>

      <slot />

      <div class="md:col-span-2 lg:col-span-3 xl:col-span-4">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

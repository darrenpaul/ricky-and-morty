<script setup lang="ts">
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div
    id="card"
    class="shadow-hard bg-secondary shadow-brand-secondary-5 dark:bg-secondary-dark flex w-full flex-col rounded-2xl border-2 border-neutral-950 p-3"
  >
    <div v-if="slots.image" class="mb-4 overflow-hidden rounded-xs border-2">
      <slot name="image" />
    </div>

    <div class="mb-4 truncate px-2 text-center text-lg font-bold dark:text-white/90">
      <slot name="heading" />
    </div>

    <slot name="body" />
  </div>
</template>

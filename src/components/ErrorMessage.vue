<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  statusCode: number
}>()

const message = computed(() => {
  if (props.statusCode === 404) {
    return 'Are you kidding me with this? This is... burp ...this is not how it works.'
  }

  return 'What in the ever-loving, burp, hell is this now?'
})
</script>

<template>
  <div class="mx-auto flex max-w-[80ch] flex-col items-center justify-center p-4">
    <p class="font-space-mono text-9xl dark:text-red-400">
      {{ props.statusCode }}
    </p>

    <p class="text-2xl dark:text-white">
      {{ message }}
    </p>
  </div>
</template>

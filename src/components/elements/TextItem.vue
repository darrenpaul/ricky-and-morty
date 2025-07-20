<script setup lang="ts">
const props = defineProps<{
  label?: string
  value: string
}>()
</script>

<template>
  <div>
    <p v-if="label" class="font-space-mono dark:text-white/50">{{ props.label }}:</p>
    <p class="text-xl md:text-3xl dark:text-white">
      {{ props.value }}
    </p>
  </div>
</template>

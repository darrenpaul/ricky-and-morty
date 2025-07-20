<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import { BadgeVariant } from '@/constants/badge-class'

const props = withDefaults(
  defineProps<{
    /**
     * Type of the button
     */
    variant?: BadgeVariant
  }>(),
  { variant: BadgeVariant.PRIMARY },
)

const classes = computed(() => {
  const attributes: string[] = ['rounded-full px-1.5 py-0.5 text-xs font-thin']

  attributes.push(props.variant)

  return twMerge(...attributes)
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

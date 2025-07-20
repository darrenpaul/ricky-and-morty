<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import { badgeBase, BadgeVariant } from '@/constants/badge-class'

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
  const attributes: string[] = [badgeBase]

  attributes.push(props.variant)

  return twMerge(...attributes)
})
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>

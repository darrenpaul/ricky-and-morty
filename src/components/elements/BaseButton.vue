<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import { buttonBase, ButtonSize, ButtonVariant } from '@/constants/button-class'

const props = withDefaults(
  defineProps<{
    /**
     * size of the button
     */
    size?: ButtonSize
    /**
     * Type of the button
     */
    variant?: ButtonVariant
    /** Disabled state of the button */
    disabled?: boolean
  }>(),
  { variant: ButtonVariant.PRIMARY, size: ButtonSize.MEDIUM, disabled: false },
)

const emit = defineEmits<{
  (event: 'click'): void
}>()

const classes = computed(() => {
  const attributes: string[] = [buttonBase]

  attributes.push(props.variant)
  attributes.push(props.size)

  if (props.disabled) {
    attributes.push('text-neutral-300/30 border-transparent cursor-default hover:bg-transparent')
  }

  return twMerge(...attributes)
})

function onClick() {
  emit('click')
}
</script>

<template>
  <button type="button" :class="classes" :disabled="props.disabled" @click="onClick">
    <slot name="icon-start" />
    <slot />
    <slot name="icon-end" />
  </button>
</template>

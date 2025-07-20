<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { useDark, useToggle } from '@vueuse/core'
import BaseButton from '@/components/elements/BaseButton.vue'
import { ButtonSize, ButtonVariant } from '@/constants/button-class'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <BaseButton :size="ButtonSize.SQUARE" :variant="ButtonVariant.GHOST" @click="toggleDark">
    <Transition name="slide-up">
      <SunIcon v-if="isDark" class="fill-yellow-300" />
      <MoonIcon v-else class="fill-blue-100" />
    </Transition>
  </BaseButton>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

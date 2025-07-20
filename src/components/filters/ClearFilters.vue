<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/elements/BaseButton.vue'
import { useSearchFilters } from '@/composables/search-filters'
import { ButtonSize, ButtonVariant } from '@/constants/button-class'

const { clearFilters } = useSearchFilters()
</script>

<template>
  <BaseButton :size="ButtonSize.SQUARE" :variant="ButtonVariant.DANGER" @click="clearFilters">
    <TrashIcon class="stroke-white" />
  </BaseButton>
</template>

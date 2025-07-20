<script setup lang="ts">
import type PageMetadata from '@/types/page-metadata'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/16/solid'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseButton from '@/components/elements/BaseButton.vue'
import { ButtonSize, ButtonVariant } from '@/constants/button-class'
import numberArray from '@/utils/number-array'

const props = defineProps<{ pageMetadata: PageMetadata }>()
const route = useRoute()
const router = useRouter()

const currentPage = computed(() => {
  const page = route.query?.page as string

  if (page) {
    return Number.parseInt(page)
  }

  return 1
})

const hasPreviousPage = computed(() => {
  if (currentPage.value > 1) {
    return true
  }

  return false
})

const hasNextPage = computed(() => {
  if (currentPage.value < props.pageMetadata.pages) {
    return true
  }

  return false
})

const pages = computed(() => {
  const nextPageNumbers = numberArray({
    start: currentPage.value,
    stop: Math.min(currentPage.value + 1, props.pageMetadata.pages),
  })
  const previousPageNumbers = numberArray({
    start: Math.min(Math.max(currentPage.value - 1, 1), props.pageMetadata.pages),
    stop: Math.min(Math.max(currentPage.value + 1, 1), props.pageMetadata.pages),
  })

  return [
    ...new Set([
      1,
      ...previousPageNumbers,
      currentPage.value,
      ...nextPageNumbers,
      props.pageMetadata.pages,
    ]),
  ]
})

function onPrevious() {
  applyPageFilter(currentPage.value - 1)
}

function onNext() {
  applyPageFilter(currentPage.value + 1)
}

function onPageNumber(page: number) {
  applyPageFilter(page)
}

function applyPageFilter(pageNumber: number) {
  const newPageNumber = pageNumber === 1 ? undefined : pageNumber

  router.push({ query: { ...route.query, page: newPageNumber } })
}
</script>

<template>
  <div
    class="bg-secondary dark:bg-secondary-dark shadow-hard flex justify-between rounded-2xl border-2 border-neutral-950 px-4 py-2"
  >
    <BaseButton
      :disabled="!hasPreviousPage"
      :variant="ButtonVariant.GHOST"
      :size="ButtonSize.SQUARE"
      @click="onPrevious"
    >
      <ChevronLeftIcon :class="!hasPreviousPage && 'fill-neutral-300'" />
    </BaseButton>

    <div class="hidden gap-2 md:flex">
      <BaseButton
        v-for="page in pages"
        :key="page"
        :size="ButtonSize.SQUARE"
        :variant="ButtonVariant.GHOST"
        :label="page.toString()"
        :disabled="page === currentPage"
        @click="() => onPageNumber(page)"
      >
        {{ page }}
      </BaseButton>
    </div>

    <BaseButton
      :disabled="!hasNextPage"
      :variant="ButtonVariant.GHOST"
      :size="ButtonSize.SQUARE"
      @click="onNext"
    >
      <ChevronRightIcon :class="!hasNextPage && 'fill-neutral-300'" />
    </BaseButton>
  </div>
</template>

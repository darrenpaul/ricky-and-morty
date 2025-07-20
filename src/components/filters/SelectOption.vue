<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BaseSelect from '@/components/elements/BaseSelect.vue'
import { useSearchFilters } from '@/composables/search-filters'

const props = defineProps<{ queryKey: string, label: string, options: string[] }>()
const route = useRoute()

const { applyFilter } = useSearchFilters()

const selected = ref<string | undefined>((route.query[props.queryKey] as string) || 'All')

watch(
  () => route.query[props.queryKey],
  () => {
    selected.value = route.query[props.queryKey] as string
  },
)

watch(selected, () => handleApplyFilter())

function handleApplyFilter() {
  if (selected.value?.toLowerCase() === 'all') {
    selected.value = undefined
  }

  applyFilter(props.queryKey, selected.value)
}
</script>

<template>
  <BaseSelect v-model="selected" class="w-full" :label="props.label" :options="props.options" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BaseInput from '@/components/elements/BaseInput.vue'
import { useSearchFilters } from '@/composables/search-filters'

const props = defineProps<{ queryKey: string; label: string; suggestions?: string[] }>()

const route = useRoute()
const { applyFilter } = useSearchFilters()

const searchedText = ref<string>(route.query[props.queryKey] as string)

watch(
  () => route.query[props.queryKey],
  () => {
    searchedText.value = route.query[props.queryKey] as string
  },
)

function handleApplyFilter() {
  applyFilter(props.queryKey, searchedText.value)
}
</script>

<template>
  <div class="w-full">
    <BaseInput
      :id="props.queryKey"
      v-model="searchedText"
      :label="props.label"
      :placeholder="`Search by ${props.label}`"
      :list="`${props.queryKey}-options`"
      @keypress.enter="handleApplyFilter"
      @blur="handleApplyFilter"
    />

    <datalist v-if="props.suggestions" :id="`${props.queryKey}-options`">
      <option v-for="suggestion in props.suggestions" :key="suggestion" :value="suggestion" />
    </datalist>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import {
  characterGenderSuggestions,
  characterNameSuggestions,
  characterSpeciesSuggestions,
  characterStatusSuggestions,
} from '@/constants/filters'

const ClearFilters = defineAsyncComponent(() => import('@/components/filters/ClearFilters.vue'))
const SelectOption = defineAsyncComponent(() => import('@/components/filters/SelectOption.vue'))
const TextSearch = defineAsyncComponent(() => import('@/components/filters/TextSearch.vue'))
</script>

<template>
  <div class="mb-8 flex flex-col items-end gap-3 lg:flex-row">
    <TextSearch query-key="name" label="Character Name" :suggestions="characterNameSuggestions" />
    <TextSearch query-key="species" label="Species" :suggestions="characterSpeciesSuggestions" />

    <SelectOption label="Gender" query-key="gender" :options="characterGenderSuggestions" />
    <SelectOption label="Status" query-key="status" :options="characterStatusSuggestions" />

    <ClearFilters />
  </div>
</template>

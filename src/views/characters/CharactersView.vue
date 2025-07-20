<script setup lang="ts">
import type Character from '@/types/character'
import type PageMetadata from '@/types/page-metadata'
import { defineAsyncComponent, onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CharacterList from '@/components/characters/CharacterList.vue'
import CharacterListItem from '@/components/characters/CharacterListItem.vue'
import CharacterSkeletonLoader from '@/components/characters/CharacterSkeletonLoader.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { useApi } from '@/composables/api'
import { useSearchParamString } from '@/composables/search-param-string'
import numberArray from '@/utils/number-array'

const CharacterFilters = defineAsyncComponent(
  () => import('@/components/characters/CharacterFilters.vue'),
)
const PaginationFilter = defineAsyncComponent(
  () => import('@/components/filters/PaginationFilter.vue'),
)

const api = useApi()
const route = useRoute()

const characters = ref<Character[]>([])
const pageMetadata = ref<PageMetadata | null>()
const searchParamString = useSearchParamString()
const responseStatusCode = ref()

watch(
  () => route.query,
  () => {
    handleFetchData()
  },
)

async function handleFetchData() {
  api.getCharacters(searchParamString.queryString.value).then(({ results, info, statusCode }) => {
    characters.value = results
    pageMetadata.value = info
    responseStatusCode.value = statusCode
  })
}

onBeforeMount(() => {
  handleFetchData()
})
</script>

<template>
  <div class="px-4">
    <div class="hidden lg:block">
      <CharacterFilters />
    </div>

    <CharacterList :characters="characters">
      <template v-if="api.fetching.characters === true && characters.length === 0">
        <CharacterSkeletonLoader
          v-for="index in numberArray({ start: 0, stop: 19 })"
          :key="index"
        />
      </template>

      <CharacterListItem
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />

      <template #action>
        <PaginationFilter v-if="pageMetadata" :page-metadata="pageMetadata" />
      </template>
    </CharacterList>

    <template v-if="responseStatusCode !== 200">
      <ErrorMessage v-if="responseStatusCode" :status-code="responseStatusCode" />
    </template>
  </div>
</template>

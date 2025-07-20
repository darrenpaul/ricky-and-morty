<script setup lang="ts">
import { computed } from 'vue'
import Container from '@/components/Container.vue'
import TextItem from '@/components/elements/TextItem.vue'
import { useEpisodeStore } from '@/stores/episodes'

const props = defineProps<{
  episodes: string[]
}>()

const episodeStore = useEpisodeStore()

const episodeIds = computed(() =>
  props.episodes.map((urlPath) => {
    const urlPathPieces = urlPath.split('/')

    return Number.parseInt(urlPathPieces[urlPathPieces.length - 1])
  }),
)

const episodes = computed(() => {
  return episodeStore.getEpisodesByIds(episodeIds.value)
})
</script>

<template>
  <Container>
    <TextItem class="mb-8" label="" value="Episodes" />

    <div class="flex flex-col gap-4">
      <div
        v-for="episode in episodes"
        :key="episode?.id"
        class="mb-8 flex flex-col items-start justify-between gap-2 lg:flex-row lg:gap-4"
      >
        <TextItem :label="episode.episode" :value="episode.name" />
        <TextItem
          class="shrink-0 text-left lg:text-right"
          label="Air Date"
          :value="episode.air_date"
        />
      </div>
    </div>
  </Container>
</template>

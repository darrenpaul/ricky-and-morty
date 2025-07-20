import type Episode from '@/types/episode'
import { defineStore } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/composables/api'
import numberArray from '@/utils/number-array'

export const useEpisodeStore = defineStore('episodes', () => {
  const api = useApi()
  const router = useRouter()
  const episodes = ref<Episode[]>([])

  onBeforeMount(() => {
    if (episodes.value.length > 0) {
      return
    }

    api.getEpisodes().then(({ info, results }) => {
      episodes.value = [...results]

      if (!info) {
        router.replace({ name: 'NotFound' })
        return
      }

      numberArray({ start: 2, stop: info.pages }).forEach((pageNumber) => {
        api.getEpisodes(`page=${pageNumber}`).then(({ results }) => {
          episodes.value = [...episodes.value, ...results]
        })
      })
    })
  })

  function getEpisodesByIds(episodeIds: number[]) {
    const matched: Episode[] = []

    episodeIds.forEach((episodeId) => {
      const episode = getEpisodeById(episodeId)

      if (episode) {
        matched.push(episode)
      }
    })

    return matched
  }

  function getEpisodeById(episodeId: number) {
    return episodes.value.find(({ id }) => id === episodeId)
  }

  return { episodes, getEpisodeById, getEpisodesByIds }
})

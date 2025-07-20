import type Character from '@/types/character'
import type Episode from '@/types/episode'
import type PageMetadata from '@/types/page-metadata'
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'
import { RICK_AND_MORTY_BASE_API } from '@/constants/api'

export function useApi() {
  const fetching = ref({
    characters: false,
    episodes: false,
  })

  async function getCharacters(queryString?: string) {
    const url = `${RICK_AND_MORTY_BASE_API}/character/?${queryString}`

    fetching.value.characters = true

    const { data, error, statusCode, isFetching } = await useFetch<string>(url, {
      method: 'GET',
    })

    fetching.value.characters = isFetching.value

    if (data.value) {
      const { info, results }: { info: PageMetadata; results: Character[] } = JSON.parse(data.value)

      return { info, results, error: error.value, statusCode: statusCode.value }
    }

    return {
      info: null,
      results: [],
      error: error.value,
      statusCode: statusCode.value,
    }
  }

  async function getCharacterById(id: number) {
    const url = `${RICK_AND_MORTY_BASE_API}/character/${id}`

    const { data, error, statusCode } = await useFetch<string>(url, {
      method: 'GET',
    })

    if (data.value) {
      const result: Character = JSON.parse(data.value)

      if (result) {
        return {
          result,
          error,
          statusCode: statusCode.value,
        }
      }
    }

    return {
      result: null,
      error,
      statusCode: statusCode.value,
    }
  }

  async function getEpisodes(queryString?: string) {
    const url = `${RICK_AND_MORTY_BASE_API}/episode/?${queryString}`

    fetching.value.episodes = true

    const { data, error, statusCode, isFetching } = await useFetch<string>(url, {
      method: 'GET',
    })

    fetching.value.episodes = isFetching.value

    if (data.value) {
      const { info, results }: { info: PageMetadata; results: Episode[] } = JSON.parse(data.value)

      return { info, results, error: error.value, statusCode: statusCode.value }
    }

    return {
      info: null,
      results: [],
      error: error.value,
      statusCode: statusCode.value,
    }
  }

  return { getCharacters, getCharacterById, getEpisodes, fetching: fetching.value }
}

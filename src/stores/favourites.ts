import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useFavouritesStore = defineStore('favourites', () => {
  const localStorageKey = 'favorites'

  const characters = ref<number[]>([])

  onMounted(() => {
    const localStorageData = localStorage.getItem(localStorageKey)

    if (localStorageData) {
      const jsonData = JSON.parse(localStorageData)

      if (jsonData.characters) {
        characters.value = jsonData.characters
      }
    }
  })

  function saveToStorage() {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify({
        characters: characters.value,
      }),
    )
  }

  function addFavouriteCharacter(id: number) {
    characters.value = [...new Set([...characters.value, id])]

    saveToStorage()
  }

  function removeFavouriteCharacter(id: number) {
    characters.value = characters.value.filter((characterId: number) => characterId !== id)

    saveToStorage()
  }

  return {
    characters,
    addFavouriteCharacter,
    removeFavouriteCharacter,
  }
})

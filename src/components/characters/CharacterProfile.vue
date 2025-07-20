<script setup lang="ts">
import type Character from '@/types/character'
import { computed, defineAsyncComponent } from 'vue'
import { ButtonSize, ButtonVariant } from '@/constants/button-class'
import { useFavouritesStore } from '@/stores/favourites'

const props = defineProps<{ character: Character }>()
const HeartIcon = defineAsyncComponent(() => import('@heroicons/vue/24/solid/HeartIcon.js'))
const Container = defineAsyncComponent(() => import('@/components/Container.vue'))
const BaseButton = defineAsyncComponent(() => import('@/components/elements/BaseButton.vue'))
const TextItem = defineAsyncComponent(() => import('@/components/elements/TextItem.vue'))

const favouritesStore = useFavouritesStore()

const isFavourite = computed(() => {
  if (props.character && favouritesStore.characters.includes(props.character.id)) {
    return true
  }

  return false
})

function onFavourite() {
  if (!props.character) {
    return
  }

  if (isFavourite.value) {
    favouritesStore.removeFavouriteCharacter(props.character.id)
  } else {
    favouritesStore.addFavouriteCharacter(props.character.id)
  }
}
</script>

<template>
  <Container>
    <div class="flex flex-col gap-2 md:gap-8 lg:flex-row">
      <div class="flex shrink-0 flex-col gap-2">
        <div class="h-fit w-fit shrink-0 rounded-xs border-2 border-neutral-950">
          <img :src="props.character.image" width="300" height="300" class="h-full w-full" />
        </div>

        <BaseButton :variant="ButtonVariant.GHOST" :size="ButtonSize.SQUARE" @click="onFavourite">
          <HeartIcon
            :class="isFavourite ? 'fill-red-500 stroke-red-500' : 'fill-red-200 stroke-red-200'"
          />
        </BaseButton>
      </div>

      <div class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        <TextItem label="ID number" :value="props.character.id.toString()" />
        <TextItem label="Episode Count" :value="props.character.episode.length.toString()" />
        <TextItem
          label="Full name"
          :value="props.character.name"
          class="col-span-1 md:col-span-3"
        />
        <TextItem label="Species" :value="props.character.species" />
        <TextItem label="Gender" :value="props.character.gender" />
        <TextItem label="Status" :value="props.character.status" />
        <TextItem
          label="Origin"
          :value="props.character.origin.name"
          class="col-span-1 md:col-span-3"
        />
        <TextItem
          label="Location"
          :value="props.character.location.name"
          class="col-span-1 md:col-span-3"
        />
      </div>
    </div>
  </Container>
</template>

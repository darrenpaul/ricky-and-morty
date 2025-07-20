<script setup lang="ts">
import type Character from '@/types/character'
import { computed, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import Card from '@/components/Card.vue'
import { useSearchFilters } from '@/composables/search-filters'
import { BadgeVariant } from '@/constants/badge-class'
import { ButtonSize, ButtonVariant } from '@/constants/button-class'
import { useFavouritesStore } from '@/stores/favourites'

const props = defineProps<{ character: Character }>()

const EyeIcon = defineAsyncComponent(() => import('@heroicons/vue/24/solid/EyeIcon.js'))
const HeartIcon = defineAsyncComponent(() => import('@heroicons/vue/24/solid/HeartIcon.js'))
const Badge = defineAsyncComponent(() => import('@/components/elements/Badge.vue'))
const BaseButton = defineAsyncComponent(() => import('@/components/elements/BaseButton.vue'))
const QuestionMarkIcon = defineAsyncComponent(
  () => import('@/components/icons/QuestionMarkIcon.vue'),
)
const SkullIcon = defineAsyncComponent(() => import('@/components/icons/SkullIcon.vue'))

const router = useRouter()
const favouritesStore = useFavouritesStore()
const { applyFilter } = useSearchFilters()

const isFavourite = computed(() => {
  if (favouritesStore.characters.includes(props.character.id)) {
    return true
  }

  return false
})

function onInspectClicked() {
  router.push(`/characters/${props.character.id}`)
}

function handleApplyFilter(queryKey: string, searchedText: string) {
  applyFilter(queryKey, searchedText)
}

function onFavourite() {
  if (isFavourite.value) {
    favouritesStore.removeFavouriteCharacter(props.character.id)
  }
  else {
    favouritesStore.addFavouriteCharacter(props.character.id)
  }
}
</script>

<template>
  <Card>
    <template #image>
      <div
        v-if="props.character.status.toLowerCase() === 'dead'"
        class="absolute m-2 rounded-full bg-neutral-950 p-2 opacity-75"
      >
        <SkullIcon class="fill-neutral-100" />
      </div>

      <div
        v-if="props.character.status.toLowerCase() === 'unknown'"
        class="absolute m-2 rounded-full bg-neutral-100 p-2 opacity-75"
      >
        <QuestionMarkIcon class="fill-neutral-950" />
      </div>
      <img
        :src="props.character.image"
        loading="lazy"
        width="300"
        height="300"
        class="aspect-square w-full object-cover"
      >
    </template>

    <template #heading>
      <div class="flex items-center gap-2">
        <BaseButton :variant="ButtonVariant.GHOST" :size="ButtonSize.SQUARE" @click="onFavourite">
          <HeartIcon
            :class="isFavourite ? 'fill-red-500 stroke-red-500' : 'fill-red-200 stroke-red-200'"
          />
        </BaseButton>

        <div>
          <BaseButton
            :variant="ButtonVariant.GHOST"
            class="p-0!"
            @click="() => handleApplyFilter('name', props.character.name)"
          >
            <p class="mb-1 truncate text-left text-xl font-bold">
              {{ props.character.name }}
            </p>
          </BaseButton>

          <div class="flex gap-2">
            <BaseButton
              :variant="ButtonVariant.GHOST"
              class="p-0!"
              @click="() => handleApplyFilter('species', props.character.species)"
            >
              <Badge :variant="BadgeVariant.SECONDARY">
                <p>{{ props.character.species }}</p>
              </Badge>
            </BaseButton>

            <BaseButton
              :variant="ButtonVariant.GHOST"
              class="p-0!"
              @click="() => handleApplyFilter('gender', props.character.gender)"
            >
              <Badge :variant="BadgeVariant.PRIMARY">
                <p>{{ props.character.gender }}</p>
              </Badge>
            </BaseButton>
          </div>
        </div>
      </div>
    </template>

    <template #body>
      <div class="flex items-center justify-between gap-2">
        <BaseButton class="w-full" @click="onInspectClicked">
          <template #icon-start>
            <EyeIcon class="h-6" />
          </template>
          View
        </BaseButton>
      </div>
    </template>
  </Card>
</template>

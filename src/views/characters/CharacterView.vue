<script setup lang="ts">
import type Character from '@/types/character'
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/solid'
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CharacterEpisodeList from '@/components/characters/CharacterEpisodeList.vue'
import CharacterProfile from '@/components/characters/CharacterProfile.vue'
import BaseButton from '@/components/elements/BaseButton.vue'
import { useApi } from '@/composables/api'
import { ButtonVariant } from '@/constants/button-class'

const api = useApi()
const route = useRoute()
const router = useRouter()

const character = ref<Character>()

watch(
  () => route.query,
  () => {
    handleFetchData()
  },
)

function onGoBack() {
  router.back()
}

async function handleFetchData() {
  const routeParamId = route.params.id
  if (routeParamId) {
    api.getCharacterById(Number.parseInt(routeParamId as string)).then(({ result }) => {
      if (result) {
        character.value = result
      } else {
        router.replace({ name: 'NotFound' })
      }
    })
  }
}

onBeforeMount(() => {
  handleFetchData()
})
</script>

<template>
  <div class="px-4">
    <template v-if="character">
      <div class="flex flex-col gap-8">
        <BaseButton :variant="ButtonVariant.GHOST" @click="onGoBack">
          <template #icon-start>
            <ArrowUturnLeftIcon class="w-6 shrink-0 text-sm" />
          </template>
          <span class="shrink-0"> Go back? </span>
        </BaseButton>

        <CharacterProfile :character="character" />
        <CharacterEpisodeList :episodes="character.episode" />
      </div>
    </template>
  </div>
</template>

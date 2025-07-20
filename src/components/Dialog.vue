<script setup lang="ts">
import { ref, watch } from 'vue'
import Container from '@/components/Container.vue'
import BaseButton from '@/components/elements/BaseButton.vue'

const props = defineProps<{
  label: string
}>()

const dialog = ref<HTMLDialogElement>()
const isOpen = ref<boolean>(false)

watch(isOpen, () => {
  if (dialog.value) {
    if (isOpen.value) {
      dialog.value.showModal()
      document.body.classList.add('overflow-y-hidden')
    }
    else {
      dialog.value.close()
      document.body.classList.remove('overflow-y-hidden')
    }
  }
})

function onToggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <BaseButton @click="onToggle">
      {{ props.label }}
    </BaseButton>

    <dialog ref="dialog" :open="isOpen" class="fixed mx-auto my-auto bg-transparent p-4">
      <Container>
        <slot />

        <BaseButton @click="onToggle">
          Close
        </BaseButton>
      </Container>
    </dialog>
  </div>
</template>

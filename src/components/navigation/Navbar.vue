<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import Container from '@/components/Container.vue'
import BaseButton from '@/components/elements/BaseButton.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { ButtonSize, ButtonVariant } from '@/constants/button-class'

const router = useRouter()

const routes = router.getRoutes()

const pageRoutes = [
  routes.find(({ name }) => name === 'home'),
  routes.find(({ name }) => name === 'characters'),
  routes.find(({ name }) => name === 'about'),
]

const isMenuOpen = ref<boolean>(false)

watch(isMenuOpen, () => {
  if (isMenuOpen.value) {
    document.body.classList.add('overflow-y-hidden')
  } else {
    document.body.classList.remove('overflow-y-hidden')
  }
})

function onMenuToggle() {
  isMenuOpen.value = !isMenuOpen.value
}

function onCloseMenu() {
  isMenuOpen.value = false
}

router.beforeEach(() => {
  onCloseMenu()
})
</script>

<template>
  <header
    class="fixed top-0 z-40 flex w-full max-w-7xl grid-cols-3 items-center justify-between p-4 lg:grid"
  >
    <div>
      <img
        class="h-16 md:h-24"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1600px-Rick_and_Morty.svg.png"
      />
    </div>

    <div class="block lg:hidden">
      <BaseButton :size="ButtonSize.SQUARE" :variant="ButtonVariant.GHOST">
        <MenuIcon class="dark:fill-primary fill-white" @click="onMenuToggle" />
      </BaseButton>

      <Transition :duration="550" name="nested">
        <nav
          v-if="isMenuOpen"
          class="absolute top-0 left-0 z-50 flex h-dvh w-screen flex-col items-center justify-between bg-white p-4 lg:hidden dark:bg-black"
        >
          <ThemeSwitch />
          <div class="flex flex-col items-center gap-8">
            <template v-for="pageRoute in pageRoutes">
              <RouterLink
                v-if="pageRoute"
                :key="pageRoute.name"
                :to="pageRoute.path"
                class="font-press-start-2p dark:text-primary/50 text-2xl text-black/50 uppercase"
                active-class="text-black! dark:text-primary!"
              >
                {{ pageRoute?.name }}
              </RouterLink>
            </template>
          </div>
          <BaseButton @click="onCloseMenu"> Close </BaseButton>
        </nav>
      </Transition>
    </div>

    <nav class="hidden lg:block lg:place-self-center lg:self-end">
      <Container>
        <div class="flex flex-row items-center gap-4">
          <template v-for="pageRoute in pageRoutes">
            <RouterLink
              v-if="pageRoute"
              :key="pageRoute.name"
              :to="pageRoute.path"
              class="font-press-start-2p dark:text-primary/50 text-black/50 uppercase"
              active-class="text-black! dark:text-primary!"
            >
              {{ pageRoute?.name }}
            </RouterLink>
          </template>
        </div>
      </Container>
    </nav>

    <div class="hidden place-self-end self-end lg:block">
      <ThemeSwitch />
    </div>
  </header>
</template>

<style lang="css" scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0.15s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>

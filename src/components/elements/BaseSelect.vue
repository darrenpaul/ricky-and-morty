<script setup lang="ts">
interface Props {
  id?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'number'
  options: string[]
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  label: undefined,
  placeholder: 'Search by...',
})

const value = defineModel<string>()
</script>

<template>
  <div class="flex flex-col">
    <label
      v-if="props.label"
      class="font-space-mono pb-1 pl-1 text-xs dark:text-white/50"
      :for="props.id"
      >{{ props.label }}</label
    >
    <select
      v-model="value"
      class="shadow-hard h-12 rounded-lg border-2 border-neutral-950 bg-white p-2 dark:bg-white/20 dark:text-white"
    >
      <option disabled value="">
        {{ props.placeholder }}
      </option>

      <option
        v-for="option in props.options"
        :key="option"
        :value="option"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

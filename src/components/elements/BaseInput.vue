<script setup lang="ts">
interface Props {
  id?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'number'
  list?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  label: undefined,
  placeholder: 'Search by...',
  type: 'text',
  list: undefined,
})

const emits = defineEmits(['blur'])

const value = defineModel<string | undefined>({
  required: true,
})
</script>

<template>
  <div class="flex flex-col">
    <label
      v-if="props.label"
      :for="props.id"
      class="font-space-mono pb-1 pl-1 text-xs dark:text-white/50"
      >{{ props.label }}</label
    >
    <input
      :id="props.id"
      v-model="value"
      :type="props.type"
      :placeholder="props.placeholder"
      :list="props.list"
      class="font-display shadow-hard h-12 rounded-lg border-2 border-neutral-950 bg-white p-2 dark:bg-white/20 dark:text-white"
      @blur="() => emits('blur')"
    />
  </div>
</template>

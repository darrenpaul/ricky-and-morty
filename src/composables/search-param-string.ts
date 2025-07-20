import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useSearchParamString() {
  const route = useRoute()

  const queryString = computed(() =>
    new URLSearchParams(route.query as Record<string, string>).toString(),
  )

  return { queryString }
}

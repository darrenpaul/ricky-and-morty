import { useRoute, useRouter } from 'vue-router'

export function useSearchFilters() {
  const route = useRoute()
  const router = useRouter()

  function applyFilter(key: string, value: string | number | undefined) {
    const newQuery = { ...route.query, [key]: value }

    delete newQuery.page

    if (!value) {
      delete newQuery[key]
    }

    router.push({
      query: newQuery,
    })
  }

  function clearFilters() {
    router.push({
      query: undefined,
    })
  }

  return { applyFilter, clearFilters }
}

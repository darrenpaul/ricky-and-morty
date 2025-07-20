import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useRoute, useRouter } from 'vue-router'
import { useSearchFilters } from '../../composables/search-filters'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(),
}))

describe('useSearchFilters', () => {
  let mockRoute: RouteLocationNormalizedLoaded
  let mockRouter: Router

  const mockedUseRoute = useRoute as vi.Mock
  const mockedUseRouter = useRouter as vi.Mock

  beforeEach(() => {
    vi.clearAllMocks()

    mockRoute = {
      path: '/',
      name: 'home',
      hash: '',
      matched: [],
      meta: {},
      params: {},
      query: {},
      fullPath: '/',
      redirectedFrom: undefined,
    }

    mockRouter = {
      push: vi.fn(),
    } as unknown as Router

    mockedUseRoute.mockReturnValue(mockRoute)
    mockedUseRouter.mockReturnValue(mockRouter)
  })

  it('should apply a new filter correctly', () => {
    const { applyFilter } = useSearchFilters()

    applyFilter('name', 'John')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith({
      query: { name: 'John' },
    })
  })

  it('should remove the "page" query parameter when applying a filter', () => {
    mockRoute.query = { name: 'John', page: '2' }
    mockedUseRoute.mockReturnValue(mockRoute)

    const { applyFilter } = useSearchFilters()

    applyFilter('gender', 'Male')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith({
      query: { gender: 'Male', name: 'John' },
    })
  })
})

import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useRoute, useRouter } from 'vue-router'
import { useSearchParamString } from '../../composables/search-param-string'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(),
}))

describe('useSearchParamString', () => {
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

  it('should return a query string of current search params', () => {
    const { queryString } = useSearchParamString()

    mockRoute.query = { name: 'John' }
    mockedUseRoute.mockReturnValue(mockRoute)

    expect(queryString.value).toEqual('name=John')
  })
})

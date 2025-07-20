import { describe, expect, it } from 'vitest'
import numberArray from '@/utils/number-array.ts'

describe('numberArray', () => {
  it('create array with range from start to stop', () => {
    expect(numberArray({ start: 1, stop: 3 })).toEqual([1, 2, 3])
  })
  it('create array with range from start to stop and stepped by 2', () => {
    expect(numberArray({ start: 0, stop: 6, step: 2 })).toEqual([0, 2, 4, 6])
  })
})

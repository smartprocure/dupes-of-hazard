import { describe, expect, test } from '@jest/globals'

import { getDupes } from './index'

describe('getDupes', () => {
  test('array of strings', () => {
    const arr = ['foo', 'bar', 'foo', 'baz', 'bar']
    expect(getDupes(arr)).toEqual(new Set(['foo', 'bar']))
  })
  test('array of arrays', () => {
    const arr = [['id'], ['foo'], ['id'], ['bar']]
    expect(getDupes(arr)).toEqual(new Set([['id']]))
  })
  test('array of objects', () => {
    const arr = [
      { id: 123, type: 'foo' },
      { id: 456 },
      { type: 'foo', id: 123 },
      { id: 789 },
      { id: 123 },
      { id: 789 },
    ]
    expect(getDupes(arr)).toEqual(
      new Set([{ id: 123, type: 'foo' }, { id: 789 }])
    )
  })
})

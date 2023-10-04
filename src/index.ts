import stringify from 'json-stable-stringify'

/**
 * Get a list of duplicate values from an array.
 */
export function getDupes<T>(arr: T[]) {
  const counts = new Map<string, number>()
  const dupes = new Set<T>()
  for (const item of arr) {
    const stringifiedItem = stringify(item)
    const currentCount = counts.get(stringifiedItem)
    const newCount = currentCount ? currentCount + 1 : 1
    counts.set(stringifiedItem, newCount)
    if (newCount === 2) {
      dupes.add(item)
    }
  }
  return dupes
}

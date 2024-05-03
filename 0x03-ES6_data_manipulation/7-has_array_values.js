function hasValuesFromArray<T>(set: Set<T>, array: T[]): boolean {
  return array.every(element => set.has(element));
}

export default hasValuesFromArray;

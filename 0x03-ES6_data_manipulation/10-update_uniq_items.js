function updateUniqueItems(map: Map<string, number>): void {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}

export default updateUniqueItems;

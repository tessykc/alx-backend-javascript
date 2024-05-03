const weakMap = new WeakMap<object, number>();

function queryAPI(endpoint: { protocol: string; name: string }): void {
  let count = weakMap.get(endpoint) || 0;
  count++;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };

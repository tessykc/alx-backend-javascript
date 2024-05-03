function cleanSet(set: Set<string>, startString: string): string {
  if (startString === '') return '';

  let result = '';
  set.forEach(value => {
    if (value.startsWith(startString)) {
      result += value.slice(startString.length) + '-';
    }
  });

  // Remove the trailing dash if present
  return result.endsWith('-') ? result.slice(0, -1) : result;
}

export default cleanSet;

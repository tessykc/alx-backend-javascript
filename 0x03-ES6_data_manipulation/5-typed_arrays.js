function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;

  return buffer;
}

// Example usage:
try {
  const resultBuffer = createInt8TypedArray(10, 2, 89);
    console.log(resultBuffer);
} catch (error) {
    console.error(error.message);
}
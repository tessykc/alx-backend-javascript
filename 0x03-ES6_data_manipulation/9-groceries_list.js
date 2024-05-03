function groceriesList(): Map<string, number> {
  const groceries = new Map<string, number>();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}

export default groceriesList;

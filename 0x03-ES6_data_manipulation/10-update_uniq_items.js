/**
 * Changes the quantity of unique grocery items to 100.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 */
export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw Error('Cannot process');
  }

  groceries.forEach((val, key) => {
    if (val === 1) {
      groceries.set(key, 100);
    }
  });

  return groceries;
}

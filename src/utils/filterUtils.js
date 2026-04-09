export const applyFilters = (data, filters) => {
  let results = [...data];

  if (filters.city) {
    results = results.filter(
      (item) =>
        item.city &&
        item.city.toLowerCase() === filters.city.toLowerCase()
    );
  }

  if (filters.sector) {
    results = results.filter(
      (item) =>
        item.sector &&
        item.sector.toLowerCase() === filters.sector.toLowerCase()
    );
  }

  if (filters.route) {
    results = results.filter(
      (item) =>
        item.route &&
        item.route.toLowerCase() === filters.route.toLowerCase()
    );
  }

  return results;
};

export const getUniqueValues = (data, key) => {
  return [...new Set(data.map((item) => item[key]).filter(Boolean))];
};
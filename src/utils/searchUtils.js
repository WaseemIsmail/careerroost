// Search companies by name (basic)
export const searchByName = (data, query) => {
  if (!query) return data;

  return data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

// Advanced search (future ready)
export const searchCompanies = (data, query) => {
  if (!query) return data;

  const q = query.toLowerCase();

  return data.filter((item) =>
    item.name.toLowerCase().includes(q) ||
    item.city.toLowerCase().includes(q) ||
    item.sector.toLowerCase().includes(q) ||
    item.route.toLowerCase().includes(q)
  );
};
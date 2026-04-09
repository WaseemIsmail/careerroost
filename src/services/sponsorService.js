// services/sponsorService.js

// ✅ simple in-memory cache
let cache = null;

// 👉 Fetch sponsors (from public folder)
export const getAllSponsors = async () => {
  // return cached data if already loaded
  if (cache) return cache;

  try {
    const res = await fetch("/data/uk/sponsors.json");

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();

    // validate data
    if (!Array.isArray(data)) {
      console.error("Invalid data format:", data);
      return [];
    }

    // store in cache
    cache = data;

    return data;
  } catch (error) {
    console.error("Error loading sponsors:", error);
    return [];
  }
};


// 👉 Search sponsors (lightweight frontend search)
export const searchSponsors = async (query) => {
  const data = await getAllSponsors();

  if (!query || !Array.isArray(data)) return [];

  const q = query.toLowerCase();

  return data.filter((item) =>
    item.name?.toLowerCase().includes(q) ||
    item.city?.toLowerCase().includes(q) ||
    item.sector?.toLowerCase().includes(q) ||
    item.route?.toLowerCase().includes(q)
  );
};


// 👉 Get single company (safe)
export const getCompanyByName = async (name) => {
  const data = await getAllSponsors();

  if (!Array.isArray(data)) return null;

  const decoded = decodeURIComponent(name).toLowerCase();

  return data.find(
    (item) => item.name?.toLowerCase() === decoded
  ) || null;
};
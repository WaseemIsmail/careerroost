// Convert text to URL-friendly slug
export const toSlug = (text) => {
  if (!text) return "";

  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")       // spaces → dash
    .replace(/[^\w-]+/g, "")    // remove special chars
    .replace(/--+/g, "-");      // remove multiple dashes
};

// Convert slug back to normal text
export const fromSlug = (slug) => {
  if (!slug) return "";

  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// Capitalize first letter
export const capitalize = (text) => {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Format title (for headings)
export const formatTitle = (text) => {
  if (!text) return "";

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};
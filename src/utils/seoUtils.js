// 🔥 Base config
const SITE_NAME = "CareerRoost";
const SITE_URL = "https://careerroost.netlify.app"; // ✅ your live domain

// ✅ Generate full title
export const generateTitle = (pageTitle) => {
  return pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
};

// ✅ Generate meta description (max ~160 chars)
export const generateDescription = (text) => {
  if (!text) {
    return "Find visa sponsoring companies by country, city, and sector.";
  }

  return text.length > 160 ? text.slice(0, 157) + "..." : text;
};

// ✅ Generate canonical URL
export const generateCanonical = (path = "/") => {
  return `${SITE_URL}${path}`;
};

// ✅ Generate keywords
export const generateKeywords = (keywords = []) => {
  return Array.isArray(keywords) ? keywords.join(", ") : keywords;
};

// ✅ Slugify (IMPORTANT for URLs)
export const slugify = (text = "") => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")   // remove symbols
    .replace(/\s+/g, "-");          // replace space with dash
};

// ✅ Format text (Title Case)
export const formatTitle = (text = "") => {
  return text
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// ✅ Generate Breadcrumbs (clean)
export const generateBreadcrumbs = (items = []) => {
  return items.map((item, index) => ({
    label: item.label,
    path: index !== items.length - 1 ? item.path : undefined,
  }));
};

// ✅ Organization Schema (for Google)
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
};

// ✅ Breadcrumb Schema (for rich results)
export const generateBreadcrumbSchema = (items = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.path ? `${SITE_URL}${item.path}` : SITE_URL,
    })),
  };
};
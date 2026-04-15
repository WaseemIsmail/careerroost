import { Helmet } from "react-helmet-async";

function SeoHead({
  title = "CareerRoost",
  description = "Find visa sponsoring companies by country, city, and sector.",
  keywords = "visa sponsorship, sponsoring companies, jobs abroad, UK sponsors",
  canonical = "",
  ogType = "website",
  ogImage = "/favicon.ico",
}) {
  const siteUrl = "https://www.careerroost.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={fullCanonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="CareerRoost" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}

export default SeoHead;
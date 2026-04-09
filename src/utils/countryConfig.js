export const countryConfig = {
  uk: {
    name: "United Kingdom",
    shortName: "UK",
    flag: "🇬🇧",
    dataPath: "uk",
    currency: "GBP",
  },
  canada: {
    name: "Canada",
    shortName: "Canada",
    flag: "🇨🇦",
    dataPath: "canada",
    currency: "CAD",
  },
  australia: {
    name: "Australia",
    shortName: "Australia",
    flag: "🇦🇺",
    dataPath: "australia",
    currency: "AUD",
  },
};

export const supportedCountries = Object.keys(countryConfig);

export const getCountryConfig = (countryCode) => {
  return countryConfig[countryCode] || countryConfig.uk;
};
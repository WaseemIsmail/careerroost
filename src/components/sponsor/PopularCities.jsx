import { Link } from "react-router-dom";

const formatCitySlug = (city = "") => {
  return city.toLowerCase().trim().replace(/\s+/g, "-");
};

function PopularCities({
  cities = [
    "London",
    "Manchester",
    "Birmingham",
    "Leeds",
    "Liverpool",
    "Glasgow",
  ],
  country = "uk",
}) {
  if (!cities.length) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {cities.map((city) => (
        <Link
          key={city}
          to={`/${country}/sponsors/${formatCitySlug(city)}`}
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {city}
        </Link>
      ))}
    </div>
  );
}

export default PopularCities;
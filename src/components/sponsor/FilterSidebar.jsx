function FilterSidebar({
  filters,
  setFilters,
  cities = [],
  sectors = [],
  routes = [],
}) {

  // ✅ safer state update
  const handleChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  // ✅ reset filters
  const resetFilters = () => {
    setFilters({
      city: "",
      sector: "",
      route: "",
    });
  };

  // ✅ disable reset if nothing selected
  const isResetDisabled =
    !filters.city && !filters.sector && !filters.route;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 h-fit sticky top-24">

      {/* HEADER */}
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
        <p className="text-sm text-slate-500 mt-1">
          Narrow down your results
        </p>
      </div>

      {/* FILTERS */}
      <div className="space-y-5">

        {/* CITY */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            City
          </label>

          <select
            value={filters.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm 
              focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          >
            <option value="">All Cities</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* SECTOR */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Sector
          </label>

          <select
            value={filters.sector}
            onChange={(e) => handleChange("sector", e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm 
              focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          >
            <option value="">All Sectors</option>
            {sectors.map((sector, index) => (
              <option key={index} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>

        {/* ROUTE */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Visa Route
          </label>

          <select
            value={filters.route}
            onChange={(e) => handleChange("route", e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm 
              focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          >
            <option value="">All Routes</option>
            {routes.map((route, index) => (
              <option key={index} value={route}>
                {route}
              </option>
            ))}
          </select>
        </div>

        {/* RESET BUTTON */}
        <button
          onClick={resetFilters}
          disabled={isResetDisabled}
          className={`w-full py-2.5 rounded-xl text-sm font-medium transition
            ${
              isResetDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
            }`}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default FilterSidebar;
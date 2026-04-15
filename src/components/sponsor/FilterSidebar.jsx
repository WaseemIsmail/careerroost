import { useState } from "react";

function FilterSidebar({
  filters,
  setFilters,
  cities = [],
  sectors = [],
  routes = [],
}) {
  const [open, setOpen] = useState(false); // 🔥 mobile toggle

  const handleChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      city: "",
      sector: "",
      route: "",
    });
  };

  const isResetDisabled =
    !filters.city && !filters.sector && !filters.route;

  return (
    <>
      {/* 🔥 MOBILE FILTER BUTTON */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setOpen(true)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium"
        >
          Open Filters
        </button>
      </div>

      {/* 🔥 OVERLAY (MOBILE) */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-5 h-fit

          ${open ? "fixed top-0 left-0 right-0 z-50 h-screen overflow-auto rounded-none" : "hidden"}

          lg:block lg:static lg:h-fit lg:rounded-2xl lg:overflow-visible lg:z-auto
          lg:sticky lg:top-24
        `}
      >
        {/* HEADER */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
            <p className="text-sm text-slate-500 mt-1">
              Narrow down your results
            </p>
          </div>

          {/* CLOSE BUTTON (mobile) */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-xl"
          >
            ✕
          </button>
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
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">All Routes</option>
              {routes.map((route, index) => (
                <option key={index} value={route}>
                  {route}
                </option>
              ))}
            </select>
          </div>

          {/* RESET */}
          <button
            onClick={() => {
              resetFilters();
              setOpen(false); // 🔥 close mobile after reset
            }}
            disabled={isResetDisabled}
            className={`w-full py-2.5 rounded-xl text-sm font-medium transition ${
              isResetDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterSidebar;
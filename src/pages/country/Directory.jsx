import { useState, useEffect, useMemo } from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import CompanyCard from "../../components/sponsor/CompanyCard";
import FilterSidebar from "../../components/sponsor/FilterSidebar";
import EmptyState from "../../components/common/EmptyState";
import Pagination from "../../components/common/Pagination";
import { getAllSponsors } from "../../services/sponsorService";

function Directory() {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    sector: "",
    route: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [viewType, setViewType] = useState("grid");
  const [sortOption, setSortOption] = useState("name");

  // 🚀 LOAD DATA
  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setLoading(true);
      try {
        const sponsors = await getAllSponsors();

        if (!Array.isArray(sponsors)) return;

        setTotalCount(sponsors.length);

        // fast render
        const firstChunk = sponsors.slice(0, 2000);

        if (isMounted) {
          setData(firstChunk);
          setLoading(false);
        }

        // background full load
        setTimeout(() => {
          if (isMounted) setData(sponsors);
        }, 100);

      } catch (err) {
        console.error(err);
        setData([]);
        setLoading(false);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  // 🔍 FILTER + SEARCH + SORT
  const filteredData = useMemo(() => {
    let results = [...data];
    const q = query.trim().toLowerCase();

    // SEARCH
    if (q) {
      results = results.filter(
        (item) =>
          (item.name || "").toLowerCase().includes(q) ||
          (item.city || "").toLowerCase().includes(q) ||
          (item.sector || "").toLowerCase().includes(q) ||
          (item.route || "").toLowerCase().includes(q)
      );
    }

    // FILTERS
    if (filters.city) {
      results = results.filter(
        (i) => (i.city || "").toLowerCase() === filters.city.toLowerCase()
      );
    }

    if (filters.sector) {
      results = results.filter(
        (i) => (i.sector || "").toLowerCase() === filters.sector.toLowerCase()
      );
    }

    if (filters.route) {
      results = results.filter(
        (i) => (i.route || "").toLowerCase() === filters.route.toLowerCase()
      );
    }

    // SORTING
    if (sortOption === "name") {
      results.sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
      );
    }

    if (sortOption === "name_desc") {
      results.sort((a, b) =>
        (b.name || "").localeCompare(a.name || "")
      );
    }

    if (sortOption === "city") {
      results.sort((a, b) =>
        (a.city || "").localeCompare(b.city || "")
      );
    }

    if (sortOption === "sector") {
      results.sort((a, b) =>
        (a.sector || "").localeCompare(b.sector || "")
      );
    }

    return results;
  }, [data, query, filters, sortOption]);

  // reset page
  useEffect(() => {
    setCurrentPage(1);
  }, [query, filters, sortOption, itemsPerPage]);

  // 📊 DROPDOWN DATA
  const cities = [...new Set(data.map((i) => i.city).filter(Boolean))];
  const sectors = [...new Set(data.map((i) => i.sector).filter(Boolean))];
  const routes = [...new Set(data.map((i) => i.route).filter(Boolean))];

  // 📄 PAGINATION
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Layout>
      <div className="space-y-6">

        {/* HERO */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h1 className="text-2xl font-bold">UK Sponsor Directory</h1>

          <div className="mt-4">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search companies..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

          {/* FILTER SIDEBAR */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            cities={cities}
            sectors={sectors}
            routes={routes}
          />

          {/* RESULTS */}
          <div>

            {/* 🔥 HEADER BAR */}
            <div className="bg-white border rounded-2xl p-4 shadow-sm mb-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

              <p className="text-sm text-gray-600">
                Showing <b>{filteredData.length}</b> of <b>{totalCount}</b> companies
              </p>

              <div className="flex flex-wrap items-center gap-3">

                {/* SORT */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by</span>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="name">Company Name</option>
                    <option value="name_desc">Z → A</option>
                    <option value="city">City</option>
                    <option value="sector">Sector</option>
                  </select>
                </div>

                {/* PAGE SIZE */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Posts Per Page</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="border rounded-lg px-3 py-2 text-sm"
                  >
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>

                {/* GRID / ROW */}
                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewType("grid")}
                    className={`px-4 py-2 text-sm ${
                      viewType === "grid"
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    Grid
                  </button>

                  <button
                    onClick={() => setViewType("row")}
                    className={`px-4 py-2 text-sm ${
                      viewType === "row"
                        ? "bg-blue-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    Row
                  </button>
                </div>

              </div>
            </div>

            {/* LOADING */}
            {loading && <p>Loading...</p>}

            {/* DATA */}
            {!loading && paginatedData.length > 0 && (
              <>
                <div
                  className={
                    viewType === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                      : "flex flex-col gap-4"
                  }
                >
                  {paginatedData.map((company, index) => (
                    <CompanyCard
                      key={index}
                      company={company}
                      viewType={viewType}
                    />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}

            {/* EMPTY */}
            {!loading && filteredData.length === 0 && (
              <EmptyState
                title="No sponsors found"
                message="Try adjusting filters or search"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Directory;
import { useState, useEffect, useMemo } from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import CompanyCard from "../../components/sponsor/CompanyCard";
import FilterSidebar from "../../components/sponsor/FilterSidebar";
import EmptyState from "../../components/common/EmptyState";
import Pagination from "../../components/common/Pagination";
import SectionHeading from "../../components/common/SectionHeading";
import Breadcrumbs from "../../components/common/Breadcrumbs";
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

        // background load
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
    return () => (isMounted = false);
  }, []);

  // 🔍 FILTER + SEARCH + SORT
  const filteredData = useMemo(() => {
    let results = [...data];
    const q = query.trim().toLowerCase();

    if (q) {
      results = results.filter(
        (item) =>
          (item.name || "").toLowerCase().includes(q) ||
          (item.city || "").toLowerCase().includes(q) ||
          (item.sector || "").toLowerCase().includes(q) ||
          (item.route || "").toLowerCase().includes(q)
      );
    }

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

    // SORT
    if (sortOption === "name") {
      results.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    }
    if (sortOption === "name_desc") {
      results.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
    }
    if (sortOption === "city") {
      results.sort((a, b) => (a.city || "").localeCompare(b.city || ""));
    }
    if (sortOption === "sector") {
      results.sort((a, b) => (a.sector || "").localeCompare(b.sector || ""));
    }

    return results;
  }, [data, query, filters, sortOption]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, filters, sortOption, itemsPerPage]);

  // 📊 FILTER OPTIONS
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
      <div className="px-4 py-8 max-w-7xl mx-auto space-y-6">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "UK Directory" },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title="UK Sponsor Directory"
          subtitle="Search, filter, and explore visa sponsoring companies in the UK."
          align="left"
        />

        {/* SEARCH */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search companies, city, sector..."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

          {/* SIDEBAR */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            cities={cities}
            sectors={sectors}
            routes={routes}
          />

          {/* RESULTS */}
          <div>

            {/* HEADER */}
            <div className="bg-white border rounded-2xl p-4 shadow-sm mb-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

              <p className="text-sm text-gray-600">
                Showing <b>{filteredData.length}</b> of <b>{totalCount}</b> companies
              </p>

              <div className="flex flex-wrap items-center gap-3">

                {/* SORT */}
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border rounded-lg px-3 py-2 text-sm"
                >
                  <option value="name">Name</option>
                  <option value="name_desc">Z → A</option>
                  <option value="city">City</option>
                  <option value="sector">Sector</option>
                </select>

                {/* PAGE SIZE */}
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="border rounded-lg px-3 py-2 text-sm"
                >
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>

                {/* VIEW */}
                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewType("grid")}
                    className={`px-4 py-2 ${
                      viewType === "grid" ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewType("row")}
                    className={`px-4 py-2 ${
                      viewType === "row" ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    Row
                  </button>
                </div>

              </div>
            </div>

            {/* LOADING */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-40 bg-slate-100 animate-pulse rounded-2xl" />
                ))}
              </div>
            )}

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
                message="Try searching for 'London', 'IT', or 'Healthcare'"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Directory;
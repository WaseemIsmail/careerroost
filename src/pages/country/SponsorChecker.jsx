import { useState, useEffect, useMemo } from "react";
import Layout from "../../components/layout/Layout";
import SearchBar from "../../components/common/SearchBar";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import { getAllSponsors } from "../../services/sponsorService";

function SponsorChecker() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 LOAD DATA
  useEffect(() => {
    const loadData = async () => {
      try {
        const sponsors = await getAllSponsors();
        setData(sponsors || []);
      } catch (err) {
        console.error("Error loading sponsors:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // 🔥 DEBOUNCE
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // 🔥 SEARCH LOGIC
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    const term = debouncedQuery.toLowerCase();

    return data
      .filter((item) =>
        (item.name || "").toLowerCase().includes(term)
      )
      .slice(0, 30);
  }, [debouncedQuery, data]);

  return (
    <Layout>
      <div className="px-4 py-10 max-w-5xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Sponsor Checker 🔍
          </h1>

          <p className="text-gray-600 mt-3">
            Check if a company provides visa sponsorship in the UK.
          </p>
        </div>

        {/* SEARCH */}
        <div className="bg-white border rounded-2xl shadow-sm p-5">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search company (e.g., Deloitte, NHS...)"
          />
        </div>

        {/* RESULTS */}
        <div>

          {/* LOADING */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-40 bg-slate-100 animate-pulse rounded-2xl"
                />
              ))}
            </div>
          )}

          {/* NO INPUT */}
          {!loading && !debouncedQuery && (
            <p className="text-center text-slate-400 text-sm">
              Start typing to search for companies...
            </p>
          )}

          {/* RESULTS */}
          {!loading && debouncedQuery && results.length > 0 && (
            <>
              <p className="text-sm text-slate-500 mb-4 text-center">
                Showing {results.length} matching companies
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {results.map((company, index) => (
                  <CompanyCard
                    key={company.name || index}
                    company={company}
                  />
                ))}
              </div>
            </>
          )}

          {/* EMPTY */}
          {!loading && debouncedQuery && results.length === 0 && (
            <EmptyState
              title="No sponsor found"
              message="This company may not provide visa sponsorship or is not in our database."
            />
          )}

        </div>
      </div>
    </Layout>
  );
}

export default SponsorChecker;
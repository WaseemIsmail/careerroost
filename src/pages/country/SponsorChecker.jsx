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

  // ✅ LOAD DATA PROPERLY
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

  // ✅ DEBOUNCE
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // ✅ SAFE SEARCH
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    if (!Array.isArray(data)) return [];

    const term = debouncedQuery.toLowerCase();

    return data
      .filter((item) =>
        (item.name || "").toLowerCase().includes(term)
      )
      .slice(0, 30);
  }, [debouncedQuery, data]);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Sponsor Checker 🔍
        </h1>

        <p className="text-gray-600 mt-3 mb-6">
          Check if a company provides visa sponsorship in the UK.
        </p>

        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Enter company name (e.g., Deloitte, NHS...)"
        />
      </div>

      {/* RESULTS */}
      <div className="mt-10 px-4">

        {/* 🔥 LOADING FIX */}
        {loading && (
          <p className="text-center text-gray-500">
            Loading sponsors...
          </p>
        )}

        {!loading && debouncedQuery && results.length > 0 && (
          <>
            <p className="text-sm text-slate-500 mb-4 text-center">
              Showing top {results.length} results
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((company, index) => (
                <CompanyCard key={index} company={company} />
              ))}
            </div>
          </>
        )}

        {!loading && debouncedQuery && results.length === 0 && (
          <EmptyState
            title="No sponsor found"
            message="This company may not provide visa sponsorship or is not in our database."
          />
        )}
      </div>
    </Layout>
  );
}

export default SponsorChecker;
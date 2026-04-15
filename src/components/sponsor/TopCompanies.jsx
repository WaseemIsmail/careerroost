import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { getAllSponsors } from "../../services/sponsorService";

function TopCompanies({ limit = 6 }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setLoading(true);

        const data = await getAllSponsors();

        if (!Array.isArray(data)) {
          setCompanies([]);
          return;
        }

        // 🔥 FILTER: only sponsorship companies
        let filtered = data.filter((c) => c.sponsorship);

        // 🔥 SORT: rating priority
        filtered.sort((a, b) => {
          const ratingOrder = { A: 1, B: 2, C: 3 };

          return (
            (ratingOrder[a.rating] || 99) -
            (ratingOrder[b.rating] || 99)
          );
        });

        // 🔥 TAKE TOP N
        const top = filtered.slice(0, limit);

        setCompanies(top);
      } catch (err) {
        console.error("Error loading top companies:", err);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, [limit]);

  // 🔄 Loading
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[...Array(limit)].map((_, i) => (
          <div
            key={i}
            className="h-40 rounded-2xl bg-slate-100 animate-pulse"
          />
        ))}
      </div>
    );
  }

  // ❌ Empty
  if (!companies.length) {
    return (
      <p className="text-center text-slate-500">
        No companies available
      </p>
    );
  }

  // ✅ DATA
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {companies.map((company, index) => (
          <CompanyCard
            key={company.name || index}
            company={company}
            viewType="grid"
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/uk"
          className="inline-block text-sm text-blue-600 hover:underline"
        >
          View all companies →
        </a>
      </div>
    </div>
  );
}

export default TopCompanies;
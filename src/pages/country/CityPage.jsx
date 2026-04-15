import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import SectionHeading from "../../components/common/SectionHeading";
import { getAllSponsors } from "../../services/sponsorService";

const formatCitySlug = (city = "") => {
  return city.toLowerCase().trim().replace(/\s+/g, "-");
};

const formatTitle = (text = "") => {
  return text.replace(/\b\w/g, (c) => c.toUpperCase());
};

function CityPage() {
  const { city } = useParams();

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const sponsors = await getAllSponsors();

        const filtered = sponsors.filter(
          (item) => formatCitySlug(item.city) === city
        );

        setCompanies(filtered);
      } catch (err) {
        console.error("City filter error:", err);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [city]);

  return (
    <Layout>
      <div className="px-4 py-8 max-w-6xl mx-auto space-y-6">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "UK Directory", path: "/uk" },
            { label: formatTitle(city) },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title={`Companies in ${formatTitle(city)} 📍`}
          subtitle="Browse visa sponsoring companies in this city."
          align="left"
        />

        {/* Loading */}
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

        {/* Data */}
        {!loading && companies.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {companies.map((company, index) => (
              <CompanyCard
                key={company.name || index}
                company={company}
              />
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && companies.length === 0 && (
          <EmptyState
            title="No companies found"
            message={`No sponsors found in ${formatTitle(city)}.`}
          />
        )}

      </div>
    </Layout>
  );
}

export default CityPage;
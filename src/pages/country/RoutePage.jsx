import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import SectionHeading from "../../components/common/SectionHeading";
import { getAllSponsors } from "../../services/sponsorService";

const formatSlug = (text = "") => {
  return text.toLowerCase().trim().replace(/\s+/g, "-");
};

const formatTitle = (text = "") => {
  return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

function RoutePage() {
  const { route } = useParams();

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const sponsors = await getAllSponsors();

        const filtered = sponsors.filter(
          (item) =>
            item.route &&
            formatSlug(item.route) === route
        );

        setCompanies(filtered);
      } catch (err) {
        console.error("Route filter error:", err);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [route]);

  return (
    <Layout>
      <div className="px-4 py-8 max-w-6xl mx-auto space-y-6">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "UK Directory", path: "/uk" },
            { label: formatTitle(route) },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title={`${formatTitle(route)} Visa Sponsors 📄`}
          subtitle="Explore companies offering sponsorship under this visa route."
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
            message={`No sponsors found for ${formatTitle(route)} visa route.`}
          />
        )}

      </div>
    </Layout>
  );
}

export default RoutePage;
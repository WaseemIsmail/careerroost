import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import CompanyDetailsCard from "../../components/sponsor/CompanyDetailsCard";
import { getAllSponsors } from "../../services/sponsorService";
import { useEffect, useState } from "react";
import EmptyState from "../../components/common/EmptyState";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { slugify } from "../../utils/seoUtils";

function CompanyDetails() {
  const { name } = useParams();

  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompany = async () => {
      try {
        setLoading(true);

        const sponsors = await getAllSponsors();

        const decodedName = decodeURIComponent(name);

        // ✅ FIXED MATCHING USING SLUG
        const found = sponsors.find(
          (item) => slugify(item.name) === decodedName
        );

        setCompany(found || null);
      } catch (error) {
        console.error("Error loading company details:", error);
        setCompany(null);
      } finally {
        setLoading(false);
      }
    };

    loadCompany();
  }, [name]);

  return (
    <Layout>
      <div className="px-4 py-8 max-w-6xl mx-auto space-y-6">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "UK Directory", path: "/uk" },
            { label: company?.name || "Company" },
          ]}
        />

        {/* Loading */}
        {loading && (
          <div className="h-40 bg-slate-100 animate-pulse rounded-2xl" />
        )}

        {/* Data */}
        {!loading && company && (
          <CompanyDetailsCard company={company} />
        )}

        {/* Not found */}
        {!loading && !company && (
          <EmptyState
            title="Company not found"
            message="We couldn’t find details for this company."
          />
        )}

      </div>
    </Layout>
  );
}

export default CompanyDetails;
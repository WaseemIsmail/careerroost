import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { getAllSponsors } from "../../services/sponsorService";

function LondonSponsors() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLondonSponsors = async () => {
      try {
        setLoading(true);

        const data = await getAllSponsors();

        const filtered = data.filter((company) => {
          const city = (company.city || "").toLowerCase();
          return company.sponsorship && city.includes("london");
        });

        // 🔥 LIMIT for performance
        setCompanies(filtered.slice(0, 30));
      } catch (error) {
        console.error("Error loading London sponsors:", error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadLondonSponsors();
  }, []);

  return (
    <Layout>
      <SeoHead
        title="London Visa Sponsoring Companies | CareerRoost"
        description="Find companies in London that offer visa sponsorship. Explore jobs in IT, healthcare, finance, and more."
        keywords="London visa sponsorship, jobs with sponsorship London, skilled worker London companies"
        canonical="/london-visa-sponsors-uk"
      />

      <div className="px-4 py-12 max-w-6xl mx-auto space-y-10">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Visa Sponsors UK", path: "/companies-that-sponsor-visa-uk" },
            { label: "London" },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title="London Visa Sponsoring Companies"
          subtitle="Browse companies in London that may provide visa sponsorship opportunities across different industries."
        />

        {/* 🔥 Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-40 bg-slate-100 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        )}

        {/* Companies */}
        {!loading && companies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            title="No London sponsor companies found"
            message="We couldn’t find matching sponsor companies in London right now."
          />
        )}

        {/* SEO Content */}
        <div className="max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed space-y-4">

          <h2 className="text-xl font-semibold text-slate-800">
            Visa Sponsorship Jobs in London
          </h2>

          <p>
            London is one of the top destinations in the UK for international job
            seekers looking for visa sponsorship opportunities. The city hosts
            thousands of companies across industries such as technology,
            healthcare, finance, retail, and consulting.
          </p>

          <p>
            Many employers in London sponsor international candidates under the
            Skilled Worker visa route. These companies are typically licensed
            sponsors and actively hire global talent for specialized roles.
          </p>

          <p>
            CareerRoost helps simplify your search by providing a centralized
            list of companies in London that may offer sponsorship. Instead of
            checking multiple job platforms, you can explore opportunities in
            one place.
          </p>

          <h3 className="text-lg font-semibold text-slate-800">
            Tips to Find Sponsorship Jobs in London
          </h3>

          <ul className="list-disc pl-5 space-y-2">
            <li>Focus on industries with high demand like IT and healthcare</li>
            <li>Apply directly through company career pages</li>
            <li>Check visa route requirements before applying</li>
            <li>Use filters to narrow down companies by sector and location</li>
          </ul>

        </div>

      </div>
    </Layout>
  );
}

export default LondonSponsors;
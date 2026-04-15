import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { getAllSponsors } from "../../services/sponsorService";

function ManchesterSponsors() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadManchesterSponsors = async () => {
      try {
        setLoading(true);

        const data = await getAllSponsors();

        const filtered = data.filter((company) => {
          const city = (company.city || "").toLowerCase();
          return company.sponsorship && city.includes("manchester");
        });

        // 🔥 LIMIT for performance
        setCompanies(filtered.slice(0, 30));
      } catch (error) {
        console.error("Error loading Manchester sponsors:", error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadManchesterSponsors();
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Manchester Visa Sponsoring Companies | CareerRoost"
        description="Find companies in Manchester that offer visa sponsorship. Explore jobs in IT, healthcare, logistics, and more."
        keywords="Manchester visa sponsorship, jobs with sponsorship Manchester, skilled worker Manchester companies"
        canonical="/manchester-visa-sponsors-uk"
      />

      <div className="px-4 py-12 max-w-6xl mx-auto space-y-10">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Visa Sponsors UK", path: "/companies-that-sponsor-visa-uk" },
            { label: "Manchester" },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title="Manchester Visa Sponsoring Companies"
          subtitle="Browse companies in Manchester that may provide visa sponsorship opportunities across different industries."
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
            title="No Manchester sponsor companies found"
            message="We couldn’t find matching sponsor companies in Manchester right now."
          />
        )}

        {/* SEO Content */}
        <div className="max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed space-y-4">

          <h2 className="text-xl font-semibold text-slate-800">
            Visa Sponsorship Jobs in Manchester
          </h2>

          <p>
            Manchester is one of the UK’s major employment hubs and a popular
            destination for international job seekers looking for visa
            sponsorship opportunities. The city offers roles across industries
            such as technology, healthcare, logistics, finance, and retail.
          </p>

          <p>
            Many companies in Manchester sponsor international candidates under
            the Skilled Worker visa route. These employers are licensed sponsors
            and actively hire global talent for specialized positions.
          </p>

          <h3 className="text-lg font-semibold text-slate-800">
            How to Find Sponsorship Jobs in Manchester
          </h3>

          <p>
            CareerRoost helps you discover companies that may offer sponsorship
            opportunities in Manchester. Instead of searching multiple job
            platforms, you can explore a structured list of companies in one
            place.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Focus on high-demand sectors like IT and healthcare</li>
            <li>Search companies by location and industry</li>
            <li>Check visa eligibility requirements</li>
            <li>Apply directly through company career pages</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-800">
            Why Use CareerRoost?
          </h3>

          <ul className="list-disc pl-5 space-y-2">
            <li>Centralized list of sponsorship companies</li>
            <li>Easy filtering by city and sector</li>
            <li>Saves time compared to manual searching</li>
            <li>Continuously improving data</li>
          </ul>

        </div>

      </div>
    </Layout>
  );
}

export default ManchesterSponsors;
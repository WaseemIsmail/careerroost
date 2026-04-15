import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import PopularCities from "../../components/sponsor/PopularCities";
import { getAllSponsors } from "../../services/sponsorService";

function SkilledWorker() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkilledWorkerSponsors = async () => {
      try {
        setLoading(true);

        const data = await getAllSponsors();

        const filtered = data.filter((company) => {
          const route = (company.route || "").toLowerCase();
          return company.sponsorship && route.includes("skilled");
        });

        // 🔥 LIMIT (important for speed)
        setCompanies(filtered.slice(0, 30));
      } catch (error) {
        console.error("Error loading Skilled Worker sponsors:", error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadSkilledWorkerSponsors();
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Skilled Worker Visa Sponsors UK | CareerRoost"
        description="Find companies in the UK that sponsor Skilled Worker visas. Explore jobs by city, sector, and industry."
        keywords="skilled worker visa sponsors UK, UK sponsorship companies, jobs with sponsorship UK"
        canonical="/skilled-worker-sponsors-uk"
      />

      <div className="px-4 py-12 max-w-6xl mx-auto space-y-10">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Visa Sponsors UK", path: "/companies-that-sponsor-visa-uk" },
            { label: "Skilled Worker" },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title="Skilled Worker Visa Sponsoring Companies"
          subtitle="Explore companies in the UK that may provide sponsorship under the Skilled Worker visa route."
        />

        {/* Popular Cities */}
        <PopularCities />

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
            title="No Skilled Worker sponsors found"
            message="We couldn’t find matching Skilled Worker sponsor companies right now."
          />
        )}

        {/* SEO Content */}
        <div className="max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed space-y-4">

          <h2 className="text-xl font-semibold text-slate-800">
            What is the Skilled Worker Visa?
          </h2>

          <p>
            The Skilled Worker visa is one of the most common routes for
            international professionals to work in the UK. It allows employers
            to hire talent from outside the UK for roles that require specific
            skills and qualifications.
          </p>

          <p>
            Many companies across industries such as healthcare, technology,
            logistics, and finance may offer sponsorship under this route.
            Employers must be licensed sponsors to hire international workers.
          </p>

          <h3 className="text-lg font-semibold text-slate-800">
            How to Find Skilled Worker Sponsors
          </h3>

          <p>
            CareerRoost simplifies the process by providing a structured list of
            companies that may sponsor Skilled Worker visas. Instead of searching
            multiple job platforms, you can explore opportunities in one place.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Focus on high-demand sectors like IT and healthcare</li>
            <li>Search companies by city and industry</li>
            <li>Check visa eligibility requirements before applying</li>
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

export default SkilledWorker;
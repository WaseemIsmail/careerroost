import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import PopularCities from "../../components/sponsor/PopularCities";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { getAllSponsors } from "../../services/sponsorService";

function ITCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadITCompanies = async () => {
      try {
        setLoading(true);

        const data = await getAllSponsors();

        const filtered = data.filter((company) => {
          const sector = (company.sector || "").toLowerCase();
          const name = (company.name || "").toLowerCase();

          return (
            company.sponsorship &&
            (
              sector.includes("it") ||
              sector.includes("technology") ||
              sector.includes("software") ||
              sector.includes("digital") ||
              sector.includes("tech") ||
              name.includes("tech") ||
              name.includes("software") ||
              name.includes("systems")
            )
          );
        });

        // 🔥 LIMIT for performance
        setCompanies(filtered.slice(0, 30));
      } catch (error) {
        console.error("Error loading IT companies:", error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadITCompanies();
  }, []);

  return (
    <Layout>
      <SeoHead
        title="IT Companies With Sponsorship in UK | CareerRoost"
        description="Find IT and tech companies in the UK that offer visa sponsorship. Explore software, digital, and engineering jobs."
        keywords="IT companies sponsorship UK, tech jobs UK visa sponsorship, software companies UK sponsorship"
        canonical="/it-companies-with-sponsorship-uk"
      />

      <div className="px-4 py-12 max-w-6xl mx-auto space-y-10">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Visa Sponsors UK", path: "/companies-that-sponsor-visa-uk" },
            { label: "IT Companies" },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title="IT Companies With Sponsorship in the UK"
          subtitle="Browse technology and IT-related companies that may provide visa sponsorship opportunities in the UK."
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
            title="No IT companies found"
            message="We couldn’t find matching IT sponsorship companies right now."
          />
        )}

        {/* SEO Content */}
        <div className="max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed space-y-4">

          <h2 className="text-xl font-semibold text-slate-800">
            IT Jobs With Visa Sponsorship in the UK
          </h2>

          <p>
            The IT and technology sector is one of the most active industries
            offering visa sponsorship in the UK. Companies in software
            development, cloud computing, cybersecurity, and digital services
            often hire international professionals.
          </p>

          <p>
            Many of these companies are licensed sponsors under the Skilled
            Worker visa route, allowing them to recruit global talent for
            specialized roles.
          </p>

          <h3 className="text-lg font-semibold text-slate-800">
            How to Find IT Sponsorship Jobs
          </h3>

          <p>
            CareerRoost helps simplify your search by providing a structured
            list of IT companies that may offer sponsorship opportunities.
            Instead of checking multiple job platforms, you can explore
            companies in one place.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Focus on high-demand roles like software engineering and DevOps</li>
            <li>Target companies with global hiring strategies</li>
            <li>Search by city for location-specific opportunities</li>
            <li>Apply directly through official company websites</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-800">
            Why Use CareerRoost?
          </h3>

          <ul className="list-disc pl-5 space-y-2">
            <li>Focused on visa sponsorship opportunities</li>
            <li>Easy filtering by city, sector, and route</li>
            <li>Saves time compared to manual searching</li>
            <li>Centralized and organized data</li>
          </ul>

        </div>

      </div>
    </Layout>
  );
}

export default ITCompanies;
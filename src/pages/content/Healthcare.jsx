import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import PopularCities from "../../components/sponsor/PopularCities";
import { getAllSponsors } from "../../services/sponsorService";

function Healthcare() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHealthcareSponsors = async () => {
      try {
        setLoading(true);

        const data = await getAllSponsors();

        const filtered = data.filter((company) => {
          const sector = (company.sector || "").toLowerCase();
          const name = (company.name || "").toLowerCase();

          return (
            company.sponsorship &&
            (
              sector.includes("healthcare") ||
              sector.includes("health care") ||
              sector.includes("medical") ||
              sector.includes("hospital") ||
              sector.includes("care") ||
              name.includes("health") ||
              name.includes("medical") ||
              name.includes("hospital") ||
              name.includes("clinic") ||
              name.includes("care")
            )
          );
        });

        // 🔥 LIMIT for performance
        setCompanies(filtered.slice(0, 30));
      } catch (error) {
        console.error("Error loading healthcare sponsors:", error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    loadHealthcareSponsors();
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Healthcare Sponsorship Companies UK | CareerRoost"
        description="Find healthcare companies in the UK that offer visa sponsorship. Explore hospitals, clinics, and care providers hiring international professionals."
        keywords="healthcare sponsorship UK, hospital jobs UK visa sponsorship, medical companies UK sponsorship"
        canonical="/healthcare-sponsorship-uk"
      />

      <div className="px-4 py-12 max-w-6xl mx-auto space-y-10">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Visa Sponsors UK", path: "/companies-that-sponsor-visa-uk" },
            { label: "Healthcare" },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title="Healthcare Sponsorship Companies in the UK"
          subtitle="Browse healthcare-related companies that may provide visa sponsorship opportunities across the UK."
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
            title="No healthcare sponsorship companies found"
            message="We couldn’t find matching healthcare sponsorship companies right now."
          />
        )}

        {/* SEO Content */}
        <div className="max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed space-y-4">

          <h2 className="text-xl font-semibold text-slate-800">
            Healthcare Jobs With Visa Sponsorship in the UK
          </h2>

          <p>
            The healthcare sector is one of the largest employers offering visa
            sponsorship in the UK. Hospitals, clinics, care homes, and medical
            organizations regularly recruit international professionals to fill
            critical roles.
          </p>

          <p>
            Many of these employers are licensed sponsors under the Skilled
            Worker visa route, allowing them to hire professionals such as
            nurses, doctors, caregivers, and healthcare assistants from abroad.
          </p>

          <h3 className="text-lg font-semibold text-slate-800">
            How to Find Healthcare Sponsorship Jobs
          </h3>

          <p>
            CareerRoost helps you explore healthcare companies that may offer
            sponsorship opportunities. Instead of searching multiple job boards,
            you can access a structured list of potential employers in one place.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Focus on high-demand roles like nursing and caregiving</li>
            <li>Search companies by city and sector</li>
            <li>Check visa eligibility requirements before applying</li>
            <li>Apply directly through official company websites</li>
          </ul>

          <h3 className="text-lg font-semibold text-slate-800">
            Why Use CareerRoost?
          </h3>

          <ul className="list-disc pl-5 space-y-2">
            <li>Focused on visa sponsorship companies</li>
            <li>Easy filtering by city and sector</li>
            <li>Saves time compared to manual searching</li>
            <li>Centralized and organized data</li>
          </ul>

        </div>

      </div>
    </Layout>
  );
}

export default Healthcare;
import Layout from "../../components/layout/Layout";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";
import CompanyCard from "../../components/sponsor/CompanyCard";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { getAllSponsors } from "../../services/sponsorService";
import { useEffect, useState } from "react";

function VisaSponsors() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const data = await getAllSponsors();

        // ✅ Only sponsorship companies
        const filtered = data.filter((c) => c.sponsorship);

        // 🔥 Limit for performance (important)
        setCompanies(filtered.slice(0, 30));
      } catch (err) {
        console.error(err);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <Layout>
      <SeoHead
        title="Companies That Sponsor Visa in UK | CareerRoost"
        description="Find companies in the UK that offer visa sponsorship. Explore by city, sector, and visa route to discover opportunities."
        keywords="visa sponsorship UK, companies that sponsor visa UK, skilled worker sponsors UK"
        canonical="/companies-that-sponsor-visa-uk"
      />

      <div className="px-4 py-12 max-w-6xl mx-auto space-y-10">

        {/* ✅ Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Visa Sponsors UK" },
          ]}
        />

        {/* Heading */}
        <SectionHeading
          title="Companies That Sponsor Visa in the UK"
          subtitle="Browse companies offering visa sponsorship across the UK. Filter by industry, city, and visa route."
        />

        {/* 🔥 Loading */}
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
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companies.map((company, index) => (
              <CompanyCard
                key={company.name || index}
                company={company}
              />
            ))}
          </div>
        )}

        {/* SEO Content */}
        <div className="max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed space-y-4">

          <h2 className="text-xl font-semibold text-slate-800">
            How to Find Visa Sponsorship Jobs in the UK
          </h2>

          <p>
            Finding companies that sponsor visas in the UK can be challenging.
            Many job seekers spend hours searching across multiple platforms to
            identify employers willing to sponsor international candidates.
          </p>

          <p>
            CareerRoost simplifies this process by providing a centralized
            directory of UK companies that offer visa sponsorship. Whether you
            are looking for opportunities in IT, healthcare, finance, or other
            industries, you can explore companies based on your preferences.
          </p>

          <p>
            The UK Skilled Worker visa route is one of the most common pathways
            for international professionals. Many companies listed here sponsor
            candidates under this route, making it easier for you to start your
            career in the UK.
          </p>

          <p>
            You can further refine your search using filters such as city,
            industry, and visa route. This allows you to focus only on relevant
            opportunities that match your career goals.
          </p>

          <h3 className="text-lg font-semibold text-slate-800">
            Why Use CareerRoost?
          </h3>

          <ul className="list-disc pl-5 space-y-2">
            <li>Focused only on visa sponsorship companies</li>
            <li>Easy filtering by city, sector, and visa route</li>
            <li>Saves time compared to searching multiple job sites</li>
            <li>Continuously updated data</li>
          </ul>
        </div>

      </div>
    </Layout>
  );
}

export default VisaSponsors;
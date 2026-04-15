import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import SectionHeading from "../../components/common/SectionHeading";
import TopCompanies from "../../components/sponsor/TopCompanies";
import PopularCities from "../../components/sponsor/PopularCities";
import SeoHead from "../../components/seo/SeoHead";

function Home() {
  return (
    <Layout>
      <SeoHead
        title="CareerRoost | Find Visa Sponsoring Companies"
        description="Explore visa sponsoring companies in the UK by city, sector, and visa route. Discover global career opportunities."
        canonical="/"
      />

      <div className="min-h-screen bg-slate-50">

        {/* HERO */}
        <section className="px-4 pt-24 md:pt-32 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Find Visa Sponsoring
              <br />
              Companies
            </h1>

            <p className="mt-6 text-gray-500 text-base md:text-lg max-w-3xl mx-auto">
              Discover companies that offer visa sponsorship and unlock global career opportunities.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                to="/uk"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-700 shadow-md transition"
              >
                Explore UK Sponsors
              </Link>

              <Link
                to="/uk/checker"
                className="bg-gray-200 text-gray-800 px-8 py-4 rounded-xl text-base font-medium hover:bg-gray-300 transition"
              >
                Check Company
              </Link>
            </div>
          </div>
        </section>

        {/* 🔥 TOP COMPANIES */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              title="Top Visa Sponsoring Companies"
              subtitle="Explore some of the most popular companies offering visa sponsorship in the UK."
            />
            <TopCompanies />
          </div>
        </section>

        {/* 🔥 POPULAR CITIES */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Explore by City"
              subtitle="Browse companies based on popular UK cities."
            />
            <PopularCities />
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center border border-slate-200">
              <h3 className="font-semibold text-lg text-gray-800">
                Sponsor Checker
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Instantly verify if a company provides visa sponsorship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center border border-slate-200">
              <h3 className="font-semibold text-lg text-gray-800">
                Company Directory
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Explore thousands of verified sponsoring companies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center border border-slate-200">
              <h3 className="font-semibold text-lg text-gray-800">
                Global Opportunities
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Expand your career search across multiple countries.
              </p>
            </div>

          </div>
        </section>

        {/* 🔥 SEO CONTENT (VERY IMPORTANT) */}
        <section className="px-4 pb-20">
          <div className="max-w-3xl mx-auto text-center space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            
            <SectionHeading
              title="Find Visa Sponsorship Opportunities in the UK"
              subtitle=""
            />

            <p>
              CareerRoost helps job seekers discover companies in the UK that may offer visa sponsorship opportunities. Instead of searching across multiple platforms, you can explore structured company data in one place.
            </p>

            <p>
              Browse companies by city, sector, and visa route to find opportunities that match your skills and career goals. Whether you're looking for IT roles, healthcare positions, or Skilled Worker visa opportunities, CareerRoost simplifies your search.
            </p>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Start Your Global Career 🚀
            </h2>

            <Link
              to="/uk"
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              View All Sponsors
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default Home;
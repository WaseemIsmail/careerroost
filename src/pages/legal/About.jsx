import Layout from "../../components/layout/Layout";
import SectionHeading from "../../components/common/SectionHeading";
import SeoHead from "../../components/seo/SeoHead";
import Breadcrumbs from "../../components/common/Breadcrumbs";

function About() {
  return (
    <Layout>
      <SeoHead
        title="About CareerRoost | Visa Sponsorship Platform"
        description="Learn about CareerRoost, a platform that helps job seekers find visa sponsoring companies across the UK and beyond."
        canonical="/about"
      />

      <div className="px-4 py-10 max-w-4xl mx-auto space-y-8">

        {/* ✅ Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "About" },
          ]}
        />

        {/* TITLE */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About CareerRoost
          </h1>

          <p className="text-gray-600 leading-7">
            CareerRoost is a platform built to help job seekers discover companies
            that may offer visa sponsorship opportunities. Instead of searching
            across multiple job boards, users can explore structured company
            data in one place — organized by country, city, and industry.
          </p>
        </div>

        {/* MISSION */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="Our Mission" align="left" />
          <p className="text-gray-600 leading-7 mt-3">
            Our mission is to simplify global job searching by making visa
            sponsorship information more accessible, organized, and easy to
            explore. We aim to reduce the time and effort required for job
            seekers to find relevant opportunities abroad.
          </p>
        </div>

        {/* WHAT WE OFFER */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="What We Offer" align="left" />
          <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
            <li>Search companies that may provide visa sponsorship</li>
            <li>Browse companies by country, city, and sector</li>
            <li>Explore structured company profiles</li>
            <li>Use filters to find relevant opportunities faster</li>
            <li>Access curated insights for job seekers</li>
          </ul>
        </div>

        {/* WHY */}
        <div className="bg-slate-50 border rounded-2xl p-6">
          <SectionHeading title="Why CareerRoost?" align="left" />

          <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
            <div className="bg-white border p-4 rounded-xl">
              ✔ Focused on visa sponsorship
            </div>
            <div className="bg-white border p-4 rounded-xl">
              ✔ Structured & easy-to-use directory
            </div>
            <div className="bg-white border p-4 rounded-xl">
              ✔ Saves hours of manual searching
            </div>
            <div className="bg-white border p-4 rounded-xl">
              ✔ Built for global job seekers
            </div>
          </div>
        </div>

        {/* VISION */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <SectionHeading title="Our Vision" align="left" />
          <p className="text-gray-600 leading-7 mt-3">
            We aim to grow CareerRoost into a global platform covering multiple
            countries, helping professionals discover international career
            opportunities more efficiently.
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="text-sm text-gray-500 border-t pt-6">
          CareerRoost provides information for research and discovery purposes
          only. Users should verify visa sponsorship details directly with
          employers or official sources before applying.
        </div>

      </div>
    </Layout>
  );
}

export default About;
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

function ITCompanies() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          IT Companies with Visa Sponsorship in the UK
        </h1>

        <p className="text-gray-600 mb-6 leading-7">
          The UK technology sector continues to attract international talent,
          and many IT companies sponsor skilled workers for roles in software
          engineering, data, cybersecurity, cloud, and related fields.
          CareerRoost helps job seekers explore sponsor companies in one place.
        </p>

        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Why IT companies sponsor visas
          </h2>
          <p className="text-gray-600 leading-7">
            Technology employers often need specialized talent and may sponsor
            overseas candidates when suitable skills are difficult to find
            locally. This creates opportunities for qualified professionals who
            want to build their careers in the UK.
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Common IT roles with sponsorship potential
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Software Engineer</li>
            <li>Frontend / Backend Developer</li>
            <li>Data Analyst / Data Engineer</li>
            <li>Cloud Engineer</li>
            <li>Cybersecurity Specialist</li>
            <li>DevOps Engineer</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Explore IT sponsor companies
          </h2>

          <p className="text-gray-600 mb-4">
            Browse companies in the IT sector and discover sponsorship
            opportunities by role, city, and visa route.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/uk/sector/it"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View IT Companies
            </Link>

            <Link
              to="/uk/directory"
              className="bg-white border px-5 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              Browse Directory
            </Link>
          </div>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">
            Related pages
          </h2>

          <div className="flex flex-col gap-3 text-blue-600">
            <Link to="/companies-that-sponsor-visa-uk" className="hover:underline">
              Visa Sponsorship Companies UK
            </Link>

            <Link to="/care-homes-with-sponsorship-uk" className="hover:underline">
              Care Homes with Sponsorship UK
            </Link>

            <Link to="/uk/route/skilled worker" className="hover:underline">
              Skilled Worker Visa Sponsors
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ITCompanies;
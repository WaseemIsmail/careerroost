import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

function VisaSponsors() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          UK Visa Sponsorship Companies
        </h1>

        <p className="text-gray-600 mb-6 leading-7">
          Finding companies that offer visa sponsorship in the UK can be
          difficult, especially when job seekers have to search across multiple
          platforms. CareerRoost helps simplify that process by bringing sponsor
          company information into one place, making it easier to search,
          filter, and explore opportunities.
        </p>

        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            What are visa sponsorship companies?
          </h2>
          <p className="text-gray-600 leading-7">
            Visa sponsorship companies are employers that are licensed to hire
            workers from outside the UK under approved work routes. These
            companies can support eligible candidates for specific roles,
            depending on the visa category and job requirements.
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            How CareerRoost helps
          </h2>
          <ul className="list-disc pl-5 text-gray-600 leading-7 space-y-2">
            <li>Search companies offering visa sponsorship</li>
            <li>Browse sponsor companies by city and sector</li>
            <li>Explore company details in one place</li>
            <li>Save time compared to searching manually</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Explore sponsor companies
          </h2>
          <p className="text-gray-600 mb-4 leading-7">
            You can browse the full sponsor directory or use the sponsor checker
            to quickly find a company.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/uk/directory"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Directory
            </Link>

            <Link
              to="/uk"
              className="bg-white border px-5 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              Go to UK Sponsors
            </Link>
          </div>
        </div>

        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Popular related pages
          </h2>

          <div className="flex flex-col gap-3 text-blue-600">
            <Link to="/care-homes-with-sponsorship-uk" className="hover:underline">
              Care Homes with Sponsorship UK
            </Link>
            <Link to="/it-companies-with-sponsorship-uk" className="hover:underline">
              IT Companies with Sponsorship UK
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

export default VisaSponsors;
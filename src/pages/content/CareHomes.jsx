import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

function CareHomes() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Care Homes with Visa Sponsorship in the UK
        </h1>

        {/* Intro */}
        <p className="text-gray-600 mb-6 leading-7">
          The healthcare sector in the UK offers many opportunities for
          international job seekers, especially in care homes. Many care homes
          are licensed to sponsor skilled workers, making it easier for
          candidates to secure jobs with visa support.
        </p>

        {/* Section */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Why care homes sponsor visas
          </h2>
          <p className="text-gray-600 leading-7">
            Due to high demand in the healthcare sector, care homes often hire
            international workers for roles such as care assistants, senior
            carers, and support staff. Visa sponsorship allows employers to fill
            these roles with qualified candidates from overseas.
          </p>
        </div>

        {/* Roles */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Common roles in care homes
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Care Assistant</li>
            <li>Senior Care Worker</li>
            <li>Support Worker</li>
            <li>Healthcare Assistant</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Find care home sponsors
          </h2>

          <p className="text-gray-600 mb-4">
            Use CareerRoost to explore companies in the healthcare sector that
            offer visa sponsorship.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/uk/sector/healthcare"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              View Healthcare Companies
            </Link>

            <Link
              to="/uk"
              className="bg-white border px-5 py-2 rounded-lg hover:bg-gray-50"
            >
              Go to UK Sponsors
            </Link>
          </div>
        </div>

        {/* Related */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">
            Related pages
          </h2>

          <div className="flex flex-col gap-3 text-blue-600">
            <Link to="/companies-that-sponsor-visa-uk" className="hover:underline">
              Visa Sponsorship Companies UK
            </Link>

            <Link to="/it-companies-with-sponsorship-uk" className="hover:underline">
              IT Companies with Sponsorship
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default CareHomes;
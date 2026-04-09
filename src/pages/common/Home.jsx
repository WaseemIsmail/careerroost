import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="bg-white min-h-screen">

        {/* HERO */}
        <section className="text-center pt-24 md:pt-32 pb-20 max-w-3xl mx-auto px-4">

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
            Find Visa Sponsoring
            <br />
            Companies
          </h1>

          <p className="mt-6 text-gray-500 text-base md:text-lg">
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
        </section>

        {/* FEATURES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto pb-20">

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center border">
            <h3 className="font-semibold text-lg text-gray-800">
              Sponsor Checker
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Instantly verify if a company provides visa sponsorship.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center border">
            <h3 className="font-semibold text-lg text-gray-800">
              Company Directory
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Explore thousands of verified sponsoring companies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center border">
            <h3 className="font-semibold text-lg text-gray-800">
              Global Opportunities
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Expand your career search across multiple countries.
            </p>
          </div>

        </section>

        {/* FINAL CTA */}
        <section className="text-center pb-24 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Start Your Global Career 🚀
          </h2>

          <Link
            to="/uk"
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            View All Sponsors
          </Link>
        </section>

      </div>
    </Layout>
  );
}

export default Home;
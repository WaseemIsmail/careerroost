import Layout from "../../components/layout/Layout";

function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About CareerRoost
        </h1>

        {/* Intro */}
        <p className="text-gray-600 mb-6 leading-7">
          CareerRoost is a platform designed to help job seekers find companies
          that offer visa sponsorship opportunities across different countries.
          Instead of searching across multiple job boards and websites, users
          can explore verified sponsor companies in one place.
        </p>

        {/* Mission */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-7">
            Our mission is to simplify global job searching by making visa
            sponsorship information more accessible, organized, and easy to
            explore. We aim to reduce the time and effort required for job
            seekers to find the right opportunities abroad.
          </p>
        </div>

        {/* What we offer */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-3">What We Offer</h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Search companies that provide visa sponsorship</li>
            <li>Browse sponsor companies by country, city, and sector</li>
            <li>Explore detailed company information</li>
            <li>Access curated content and guidance for job seekers</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-600 leading-7">
            We aim to expand CareerRoost into a global platform covering multiple
            countries, helping millions of professionals connect with the right
            opportunities worldwide.
          </p>
        </div>

        {/* Closing */}
        <p className="text-gray-500 text-sm">
          CareerRoost is continuously evolving to provide better insights and
          tools for job seekers worldwide.
        </p>

      </div>
    </Layout>
  );
}

export default About;
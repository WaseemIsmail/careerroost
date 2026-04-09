import Layout from "../../components/layout/Layout";

function Terms() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Terms & Conditions
        </h1>

        {/* Intro */}
        <p className="text-gray-600 mb-6 leading-7">
          By accessing and using CareerRoost, you agree to comply with the
          following terms and conditions. Please read them carefully before using
          our website.
        </p>

        {/* Use of Website */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Use of the Website
          </h2>
          <p className="text-gray-600 leading-7">
            CareerRoost provides information about companies that may offer visa
            sponsorship. The content is for informational purposes only and
            should not be considered as official employment or immigration advice.
          </p>
        </div>

        {/* Accuracy */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Accuracy of Information
          </h2>
          <p className="text-gray-600 leading-7">
            While we aim to keep the information accurate and up to date, we do
            not guarantee the completeness or accuracy of the data. Users should
            verify details directly with companies or official sources.
          </p>
        </div>

        {/* User Responsibility */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            User Responsibility
          </h2>
          <p className="text-gray-600 leading-7">
            Users are responsible for how they use the information provided on
            this website. CareerRoost is not liable for any decisions made based
            on the content available on the platform.
          </p>
        </div>

        {/* Third Party Links */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Third-Party Links
          </h2>
          <p className="text-gray-600 leading-7">
            Our website may contain links to external websites. We are not
            responsible for the content or policies of these third-party sites.
          </p>
        </div>

        {/* Changes */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Changes to Terms
          </h2>
          <p className="text-gray-600 leading-7">
            We may update these Terms & Conditions at any time. Continued use of
            the website means you accept any changes made.
          </p>
        </div>

        {/* Closing */}
        <p className="text-sm text-gray-500">
          If you do not agree with these terms, please do not use our website.
        </p>

      </div>
    </Layout>
  );
}

export default Terms;
import Layout from "../../components/layout/Layout";

function PrivacyPolicy() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-600 mb-6 leading-7">
          At CareerRoost, we respect your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we collect,
          use, and safeguard your data when you use our website.
        </p>

        {/* Info Collection */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p className="text-gray-600 leading-7">
            We may collect basic information such as your name, email address,
            and usage data when you interact with our website. This helps us
            improve our services and user experience.
          </p>
        </div>

        {/* Usage */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>To improve website functionality and performance</li>
            <li>To respond to user inquiries and feedback</li>
            <li>To analyze usage trends and enhance user experience</li>
          </ul>
        </div>

        {/* Cookies */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Cookies
          </h2>
          <p className="text-gray-600 leading-7">
            Our website may use cookies to enhance user experience. Cookies help
            us understand how users interact with the site and improve our
            services.
          </p>
        </div>

        {/* Third Party */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Third-Party Services
          </h2>
          <p className="text-gray-600 leading-7">
            We may use third-party services such as analytics tools or
            advertising platforms. These services may collect information in
            accordance with their own privacy policies.
          </p>
        </div>

        {/* Security */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Data Security
          </h2>
          <p className="text-gray-600 leading-7">
            We take reasonable measures to protect your data. However, no method
            of transmission over the internet is completely secure.
          </p>
        </div>

        {/* Updates */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Updates to This Policy
          </h2>
          <p className="text-gray-600 leading-7">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page.
          </p>
        </div>

        {/* Contact */}
        <p className="text-sm text-gray-500">
          If you have any questions about this Privacy Policy, please contact us
          through the contact page.
        </p>

      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
import Layout from "../../components/layout/Layout";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";

function PrivacyPolicy() {
  return (
    <Layout>
      <SeoHead
        title="Privacy Policy | CareerRoost"
        description="Learn how CareerRoost collects, uses, and protects your personal data when using our platform."
        canonical="/privacy-policy"
      />

      <div className="px-4 py-10 max-w-4xl mx-auto space-y-8">

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-600 leading-7">
            At CareerRoost, we respect your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we collect,
            use, and safeguard your data when you use our website.
          </p>
        </div>

        {/* Information Collection */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="Information We Collect" align="left" />
          <p className="text-gray-600 leading-7 mt-3">
            We may collect basic information such as your name, email address,
            and usage data when you interact with our website. This helps us
            improve our services and provide a better user experience.
          </p>
        </div>

        {/* Usage */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="How We Use Your Information" align="left" />

          <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
            <li>To improve website functionality and performance</li>
            <li>To respond to inquiries and user feedback</li>
            <li>To analyze user behavior and enhance experience</li>
            <li>To ensure platform security and reliability</li>
          </ul>
        </div>

        {/* Cookies */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="Cookies" align="left" />

          <p className="text-gray-600 leading-7 mt-3">
            CareerRoost may use cookies to enhance user experience. Cookies help
            us understand how users interact with our website and improve our
            services accordingly. You can choose to disable cookies in your browser
            settings.
          </p>
        </div>

        {/* Third Party */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="Third-Party Services" align="left" />

          <p className="text-gray-600 leading-7 mt-3">
            We may use third-party services such as analytics tools (e.g., Google
            Analytics) or advertising platforms. These services may collect data
            according to their own privacy policies.
          </p>
        </div>

        {/* Security */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="Data Security" align="left" />

          <p className="text-gray-600 leading-7 mt-3">
            We take reasonable measures to protect your data. However, no method
            of transmission over the internet is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        {/* Updates */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <SectionHeading title="Updates to This Policy" align="left" />

          <p className="text-gray-600 leading-7 mt-3">
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page, and continued use of the website indicates
            acceptance of the updated policy.
          </p>
        </div>

        {/* Contact */}
        <div className="text-sm text-gray-500 border-t pt-6">
          If you have any questions about this Privacy Policy, please contact us
          via the Contact page.
        </div>

      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
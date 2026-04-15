import Layout from "../../components/layout/Layout";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";

function Terms() {
  return (
    <Layout>
      <SeoHead
        title="Terms & Conditions | CareerRoost"
        description="Read the Terms & Conditions for using CareerRoost and understanding the limitations of the information provided on the platform."
        canonical="/terms"
      />

      <div className="px-4 py-10 max-w-4xl mx-auto space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Terms & Conditions" },
          ]}
        />

        {/* Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 leading-7">
            By accessing and using CareerRoost, you agree to comply with the
            following terms and conditions. Please read them carefully before
            using our website.
          </p>
        </div>

        {/* Use of Website */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="Use of the Website" align="left" className="mb-0" />
          <p className="text-gray-600 leading-7 mt-3">
            CareerRoost provides information about companies that may offer visa
            sponsorship. The content is for informational purposes only and
            should not be considered official employment, recruitment, legal, or
            immigration advice.
          </p>
        </div>

        {/* Accuracy */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="Accuracy of Information" align="left" className="mb-0" />
          <p className="text-gray-600 leading-7 mt-3">
            While we aim to keep the information accurate and up to date, we do
            not guarantee the completeness, accuracy, or reliability of the
            data. Users should always verify details directly with employers or
            official sources before making decisions.
          </p>
        </div>

        {/* User Responsibility */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="User Responsibility" align="left" className="mb-0" />
          <p className="text-gray-600 leading-7 mt-3">
            Users are responsible for how they use the information available on
            CareerRoost. We are not liable for any decisions, applications, or
            outcomes resulting from reliance on the content provided on this
            platform.
          </p>
        </div>

        {/* Third Party Links */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <SectionHeading title="Third-Party Links" align="left" className="mb-0" />
          <p className="text-gray-600 leading-7 mt-3">
            CareerRoost may include links to third-party websites for additional
            information or reference. We are not responsible for the content,
            availability, or privacy practices of external websites.
          </p>
        </div>

        {/* Changes */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <SectionHeading title="Changes to Terms" align="left" className="mb-0" />
          <p className="text-gray-600 leading-7 mt-3">
            We may update these Terms & Conditions from time to time. Continued
            use of the website after changes are made means you accept the
            revised terms.
          </p>
        </div>

        {/* Closing */}
        <div className="text-sm text-gray-500 border-t pt-6">
          If you do not agree with these terms, please do not use CareerRoost.
        </div>
      </div>
    </Layout>
  );
}

export default Terms;
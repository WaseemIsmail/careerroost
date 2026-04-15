import Layout from "../../components/layout/Layout";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";
import Breadcrumbs from "../../components/common/Breadcrumbs";

function FAQ() {
  const faqs = [
    {
      question: "What is CareerRoost?",
      answer:
        "CareerRoost is a platform that helps job seekers find companies that may offer visa sponsorship opportunities in the UK. It organizes companies by city, sector, and visa route to simplify your search.",
    },
    {
      question: "Does CareerRoost provide jobs?",
      answer:
        "No, CareerRoost does not directly provide jobs. It helps you discover companies that may sponsor visas so you can explore opportunities through their official channels.",
    },
    {
      question: "How do I find visa sponsorship companies?",
      answer:
        "You can use the UK Directory, search feature, or explore pages by city, sector, or visa route to find companies that match your interests.",
    },
    {
      question: "What is the Skilled Worker visa?",
      answer:
        "The Skilled Worker visa is one of the main UK visa routes for international professionals. It allows qualified individuals to work in the UK for approved employers who can sponsor them.",
    },
    {
      question: "Are all companies listed guaranteed sponsors?",
      answer:
        "Companies listed are based on available data and may be associated with sponsorship. However, you should always verify details directly through official sources before applying.",
    },
    {
      question: "Is CareerRoost free to use?",
      answer:
        "Yes, CareerRoost is completely free for job seekers to explore and discover companies.",
    },
  ];

  return (
    <Layout>
      <SeoHead
        title="FAQ | CareerRoost"
        description="Find answers to common questions about CareerRoost, visa sponsorship companies, and how to use the platform."
        keywords="CareerRoost FAQ, visa sponsorship questions, UK visa sponsorship help"
        canonical="/faq"
      />

      <div className="px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "FAQ" },
            ]}
          />

          {/* Heading */}
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about CareerRoost and visa sponsorship."
          />

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default FAQ;
import Layout from "../../components/layout/Layout";
import SeoHead from "../../components/seo/SeoHead";
import SectionHeading from "../../components/common/SectionHeading";
import Breadcrumbs from "../../components/common/Breadcrumbs";

function HowItWorks() {
  const steps = [
    {
      title: "Search for Companies",
      description:
        "Use the search bar or explore the UK directory to find companies based on your preferred city, sector, or visa route.",
    },
    {
      title: "Filter Your Results",
      description:
        "Apply filters like location, industry, and visa route to narrow down companies that match your career goals.",
    },
    {
      title: "Explore Company Profiles",
      description:
        "View company details such as sector, location, and sponsorship information to better understand potential opportunities.",
    },
    {
      title: "Take the Next Step",
      description:
        "Once you find a company, continue your research and apply through official channels like company websites or job platforms.",
    },
  ];

  return (
    <Layout>
      <SeoHead
        title="How It Works | CareerRoost"
        description="Learn how CareerRoost helps you find visa sponsoring companies quickly and efficiently."
        keywords="how CareerRoost works, visa sponsorship guide UK, find sponsoring companies"
        canonical="/how-it-works"
      />

      <div className="px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "How It Works" },
            ]}
          />

          {/* Heading */}
          <SectionHeading
            title="How CareerRoost Works"
            subtitle="A simple way to discover companies that may offer visa sponsorship opportunities."
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-600 font-bold text-xl mb-2">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Explanation */}
          <div className="max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              CareerRoost is designed to simplify the process of finding visa sponsorship opportunities in the UK. Instead of searching across multiple platforms, you can explore structured company data in one place.
            </p>

            <p>
              The platform helps you identify companies based on key criteria such as location, industry, and visa route. This allows you to focus your efforts on opportunities that are more relevant to your profile.
            </p>

            <p>
              While CareerRoost provides valuable insights, it is always recommended to verify company details and apply through official job channels for the most accurate and up-to-date information.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default HowItWorks;
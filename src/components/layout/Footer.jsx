import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-blue-400 tracking-tight"
            >
              CareerRoost
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-300 max-w-md">
              Helping job seekers discover visa sponsoring companies and explore
              career opportunities abroad with confidence.
            </p>

            <p className="mt-4 text-sm text-slate-400">
              📧 contact@careerroost.com
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Explore
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                to="/"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Home
              </Link>

              <Link
                to="/uk"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                UK Sponsors
              </Link>

              <Link
                to="/uk/checker"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Sponsor Checker
              </Link>

              <Link
                to="/saved"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Saved Companies
              </Link>

              <Link
                to="/search?q=london"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Search
              </Link>
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Resources
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                to="/companies-that-sponsor-visa-uk"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Visa Sponsors UK
              </Link>

              <Link
                to="/london-visa-sponsors-uk"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                London Sponsors
              </Link>

              <Link
                to="/manchester-visa-sponsors-uk"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Manchester Sponsors
              </Link>

              <Link
                to="/skilled-worker-sponsors-uk"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Skilled Worker
              </Link>

              <Link
                to="/it-companies-with-sponsorship-uk"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                IT Companies
              </Link>

              <Link
                to="/care-homes-with-sponsorship-uk"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Care Homes
              </Link>

              <Link
                to="/healthcare-sponsorship-uk"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Healthcare
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Company
            </h3>

            <div className="space-y-3 text-sm">
              <Link
                to="/about"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                About
              </Link>

              <Link
                to="/how-it-works"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                How It Works
              </Link>

              <Link
                to="/faq"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                FAQ
              </Link>

              <Link
                to="/privacy-policy"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/contact"
                className="block text-slate-300 hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* TRUST NOTE */}
        <div className="mt-10 text-xs text-slate-500 text-center max-w-3xl mx-auto leading-6">
          Data is provided for informational purposes only. Always verify visa
          sponsorship status from official sources before applying.
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 border-t border-slate-800 pt-5 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} CareerRoost. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
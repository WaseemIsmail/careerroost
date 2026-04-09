import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

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

            {/* OPTIONAL CONTACT */}
            <p className="mt-4 text-sm text-slate-400">
              📧 contact@careerroost.com
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Explore
            </h3>

            <div className="space-y-3 text-sm">
              <Link to="/" className="block text-slate-300 hover:text-blue-400 transition">
                Home
              </Link>
              <Link to="/uk" className="block text-slate-300 hover:text-blue-400 transition">
                UK Sponsors
              </Link>
              <Link to="/uk/directory" className="block text-slate-300 hover:text-blue-400 transition">
                Directory
              </Link>
              <Link to="/uk/checker" className="block text-slate-300 hover:text-blue-400 transition">
                Sponsor Checker
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
                Visa Sponsorship Guide
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
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">
              Legal
            </h3>

            <div className="space-y-3 text-sm">
              <Link to="/privacy-policy" className="block text-slate-300 hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-slate-300 hover:text-blue-400 transition">
                Terms & Conditions
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-blue-400 transition">
                Contact
              </Link>
            </div>
          </div>

        </div>

        {/* TRUST NOTE */}
        <div className="mt-10 text-xs text-slate-500 text-center max-w-3xl mx-auto">
          Data is provided for informational purposes only. Always verify visa sponsorship status from official sources.
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
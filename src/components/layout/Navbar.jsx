import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "UK Sponsors", path: "/uk" },
    { name: "Saved", path: "/saved" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-400 hover:text-blue-300 transition"
        >
          CareerRoost
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium transition ${
                isActive(link.path)
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-400 rounded"></span>
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* FIND SPONSOR CTA */}
          <Link
            to="/uk/checker"
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition shadow-sm"
          >
            Find Sponsors
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-200 text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 py-4 space-y-4">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium transition ${
                isActive(link.path)
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* EXTRA LINKS */}
          <Link
            to="/companies-that-sponsor-visa-uk"
            onClick={() => setOpen(false)}
            className="block text-sm text-slate-300 hover:text-white"
          >
            Visa Sponsors UK
          </Link>

          <Link
            to="/london-visa-sponsors-uk"
            onClick={() => setOpen(false)}
            className="block text-sm text-slate-300 hover:text-white"
          >
            London Sponsors
          </Link>

          <Link
            to="/how-it-works"
            onClick={() => setOpen(false)}
            className="block text-sm text-slate-300 hover:text-white"
          >
            How It Works
          </Link>

          {/* CTA */}
          <Link
            to="/uk/checker"
            onClick={() => setOpen(false)}
            className="block bg-blue-600 text-white text-center py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Find Sponsors
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
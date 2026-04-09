import { Link } from "react-router-dom";

// ✅ FIX: get proper letter (no symbols)
const getInitial = (name) => {
  if (!name) return "C";
  const cleaned = name.replace(/[^a-zA-Z]/g, "");
  return cleaned.charAt(0).toUpperCase() || "C";
};

function CompanyCard({ company, viewType = "grid" }) {

  // 🔥 ROW VIEW
  if (viewType === "row") {
    return (
      <Link to={`/uk/company/${company.name}`} className="block group">
        <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-white hover:shadow-md transition">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="shrink-0">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full 
                bg-gradient-to-br from-blue-500 to-indigo-600 
                text-white text-lg font-bold shadow-sm">
                {getInitial(company.name)}
              </span>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition">
                {company.name}
              </h3>

              <div className="flex flex-wrap gap-4 mt-1 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  📍 {company.city || "Location not available"}
                </span>
                <span className="flex items-center gap-1">
                  🏢 {company.sector || "Sector not available"}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-100">
              {company.route || "Route unavailable"}
            </span>

            <span className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition">
              View →
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // 🔥 GRID VIEW
  return (
    <Link to={`/uk/company/${company.name}`} className="block group">
      <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
        
        {/* Top */}
        <div className="flex items-start justify-between gap-3">

          {/* LEFT */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition">
              {company.name}
            </h3>

            <div className="mt-3 space-y-2">
              <p className="flex items-center gap-2 text-sm text-slate-600">
                <span>📍</span>
                <span>{company.city || "Location not available"}</span>
              </p>

              <p className="flex items-center gap-2 text-sm text-slate-600">
                <span>🏢</span>
                <span>{company.sector || "Sector not available"}</span>
              </p>
            </div>
          </div>

          {/* RIGHT AVATAR */}
          <div className="shrink-0">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full 
              bg-gradient-to-br from-blue-500 to-indigo-600 
              text-white text-lg font-bold shadow-sm">
              {getInitial(company.name)}
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between gap-3">

          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-100">
            {company.route || "Route unavailable"}
          </span>

          <span className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
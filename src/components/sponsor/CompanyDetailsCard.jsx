function CompanyDetailsCard({ company }) {
  if (!company) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

      {/* Header */}
      <div className="border-b border-slate-200 px-6 py-8 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

          {/* Left */}
          <div>
            <p className="text-sm font-medium text-blue-600 mb-2">
              Sponsor Company Profile
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {company.name || "N/A"}
            </h1>

            <p className="mt-3 text-sm md:text-base text-slate-600">
              📍 {company.city || "N/A"}
              {company.county ? `, ${company.county}` : ""}
            </p>

            {/* Website Button */}
            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                🌐 Visit Website
              </a>
            )}
          </div>

          {/* Logo */}
          <div className="shrink-0">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 text-2xl font-bold border border-blue-100">
              {company.name?.charAt(0)?.toUpperCase() || "C"}
            </div>
          </div>
        </div>

        {/* Pills */}
        <div className="mt-5 flex flex-wrap gap-3">

          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 border border-blue-100">
            {company.route || "No Route"}
          </span>

          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 border border-emerald-100">
            {company.sector || "No Sector"}
          </span>

          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 border border-slate-200">
            Rating: {company.rating || "N/A"}
          </span>

          {/* Sponsorship Badge */}
          <span
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium border ${
              company.sponsorship
                ? "bg-green-50 text-green-700 border-green-100"
                : "bg-red-50 text-red-700 border-red-100"
            }`}
          >
            {company.sponsorship ? "✔ Sponsorship Available" : "✖ No Sponsorship"}
          </span>

        </div>
      </div>

      {/* Details */}
      <div className="px-6 py-6 md:px-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Company Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

          <DetailItem label="Company Name" value={company.name} />
          <DetailItem label="City" value={company.city} />
          <DetailItem label="County" value={company.county} />
          <DetailItem label="Visa Route" value={company.route} />
          <DetailItem label="Sector" value={company.sector} />
          <DetailItem label="Sponsor Rating" value={company.rating} />

        </div>
      </div>
    </div>
  );
}

/* 🔥 Reusable small component */
function DetailItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-white transition">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
        {label}
      </p>
      <p className="font-semibold text-slate-900">
        {value || "N/A"}
      </p>
    </div>
  );
}

export default CompanyDetailsCard;
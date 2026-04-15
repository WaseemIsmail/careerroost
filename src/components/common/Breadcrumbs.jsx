import { Link } from "react-router-dom";

function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav className="text-sm text-slate-500 mb-4">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast ? (
                <Link
                  to={item.path}
                  className="hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-medium">
                  {item.label}
                </span>
              )}

              {!isLast && <span className="text-slate-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
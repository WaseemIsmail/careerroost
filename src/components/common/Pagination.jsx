import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
      return pages;
    }

    if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
      return pages;
    }

    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages
    );

    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition"
      >
        ←
      </button>

      <div className="flex items-center gap-3 flex-wrap">
        {pages.map((page, index) =>
          page === "..." ? (
            <span key={index} className="text-gray-500 px-1">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                currentPage === page
                  ? "bg-slate-900 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-12 h-12 rounded-full bg-cyan-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
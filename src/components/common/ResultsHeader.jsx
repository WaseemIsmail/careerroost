import React from "react";

const ResultsHeader = ({
  totalResults,
  sortOption,
  setSortOption,
  itemsPerPage,
  setItemsPerPage,
  viewType,
  setViewType,
}) => {
  return (
    <div className="w-full mb-6">

      {/* Top Banner */}
      <div className="bg-blue-50 border border-blue-300 text-blue-600 text-center py-3 rounded-xl font-semibold">
        {totalResults} Jobs Found
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 gap-4">

        {/* Left */}
        <div className="text-gray-700 font-medium">
          <span className="font-semibold">{totalResults}</span> Job Results
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-4">

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm"
            >
              <option value="recent">Recent</option>
              <option value="name">Company Name</option>
              <option value="city">City</option>
            </select>
          </div>

          {/* Posts Per Page */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Posts Per Page</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
              }}
              className="px-3 py-2 border rounded-lg text-sm"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewType("grid")}
              className={`px-3 py-1 rounded ${
                viewType === "grid"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Grid
            </button>

            <button
              onClick={() => setViewType("row")}
              className={`px-3 py-1 rounded ${
                viewType === "row"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Row
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;
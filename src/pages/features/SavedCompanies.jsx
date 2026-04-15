import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import SectionHeading from "../../components/common/SectionHeading";
import EmptyState from "../../components/common/EmptyState";
import CompanyCard from "../../components/sponsor/CompanyCard";
import Breadcrumbs from "../../components/common/Breadcrumbs";

function SavedCompanies() {
  const [savedCompanies, setSavedCompanies] = useState([]);

  useEffect(() => {
    const loadSavedCompanies = () => {
      try {
        const saved = JSON.parse(localStorage.getItem("savedCompanies")) || [];
        setSavedCompanies(saved);
      } catch (error) {
        console.error("Error loading saved companies:", error);
        setSavedCompanies([]);
      }
    };

    loadSavedCompanies();
  }, []);

  const clearAllSaved = () => {
    localStorage.removeItem("savedCompanies");
    setSavedCompanies([]);
  };

  return (
    <Layout>
      <div className="px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-10">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Saved Companies" },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <SectionHeading
              title="Saved Companies"
              subtitle="View the companies you have saved for later."
              align="left"
              className="mb-0"
            />

            {savedCompanies.length > 0 && (
              <button
                onClick={clearAllSaved}
                className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100"
              >
                Clear All
              </button>
            )}
          </div>

          {savedCompanies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedCompanies.map((company, index) => (
                <CompanyCard
                  key={company.name || index}
                  company={company}
                  viewType="grid"
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No saved companies yet"
              message="Save companies from the directory and they will appear here."
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default SavedCompanies;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import { getAllSponsors } from "../../services/sponsorService";

function RoutePage() {
  const { route } = useParams();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const sponsors = getAllSponsors();

    const filtered = sponsors.filter(
      (item) =>
        item.route &&
        item.route.toLowerCase() === route.toLowerCase()
    );

    setCompanies(filtered);
  }, [route]);

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">
        {route} Visa Sponsors 📄
      </h2>

      {companies.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No companies found"
          message={`No sponsors found for ${route} visa route.`}
        />
      )}
    </Layout>
  );
}

export default RoutePage;
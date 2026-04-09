import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import CompanyCard from "../../components/sponsor/CompanyCard";
import EmptyState from "../../components/common/EmptyState";
import { getAllSponsors } from "../../services/sponsorService";

function SectorPage() {
  const { sector } = useParams();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const sponsors = getAllSponsors();

    const filtered = sponsors.filter(
      (item) =>
        item.sector &&
        item.sector.toLowerCase() === sector.toLowerCase()
    );

    setCompanies(filtered);
  }, [sector]);

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">
        {sector} Companies 🏢
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
          message={`No sponsors found in ${sector} sector.`}
        />
      )}
    </Layout>
  );
}

export default SectorPage;
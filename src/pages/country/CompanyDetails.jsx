import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import CompanyDetailsCard from "../../components/sponsor/CompanyDetailsCard";
import { getAllSponsors } from "../../services/sponsorService";
import { useEffect, useState } from "react";
import EmptyState from "../../components/common/EmptyState";

function CompanyDetails() {
  const { name } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const sponsors = getAllSponsors();

    const found = sponsors.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    setCompany(found);
  }, [name]);

  return (
    <Layout>
      {/* If company found */}
      {company ? (
        <CompanyDetailsCard company={company} />
      ) : (
        <EmptyState
          title="Company not found"
          message="We couldn’t find details for this company."
        />
      )}
    </Layout>
  );
}

export default CompanyDetails;
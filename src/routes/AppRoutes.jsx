import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Pages
import Home from "../pages/common/Home";
import NotFound from "../pages/common/NotFound";

// Country Pages
import Directory from "../pages/country/Directory";
import CompanyDetails from "../pages/country/CompanyDetails";
import CityPage from "../pages/country/CityPage";
import SectorPage from "../pages/country/SectorPage";
import RoutePage from "../pages/country/RoutePage";
import SponsorChecker from "../pages/country/SponsorChecker";

// Content Pages (SEO)
import VisaSponsors from "../pages/content/VisaSponsors";
import CareHomes from "../pages/content/CareHomes";
import ITCompanies from "../pages/content/ITCompanies";

// Legal Pages
import About from "../pages/legal/About";
import Contact from "../pages/legal/Contact";
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import Terms from "../pages/legal/Terms";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* UK Core */}
        <Route path="/uk" element={<Directory />} />
        <Route path="/uk/directory" element={<Directory />} />
        <Route path="/uk/company/:name" element={<CompanyDetails />} />
        <Route path="/uk/checker" element={<SponsorChecker />} />

        {/* Filters */}
        <Route path="/uk/sponsors/:city" element={<CityPage />} />
        <Route path="/uk/sector/:sector" element={<SectorPage />} />
        <Route path="/uk/route/:route" element={<RoutePage />} />

        {/* SEO Content Pages */}
        <Route
          path="/companies-that-sponsor-visa-uk"
          element={<VisaSponsors />}
        />
        <Route
          path="/care-homes-with-sponsorship-uk"
          element={<CareHomes />}
        />
        <Route
          path="/it-companies-with-sponsorship-uk"
          element={<ITCompanies />}
        />

        {/* Legal Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
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

// SEO Content Pages
import VisaSponsors from "../pages/content/VisaSponsors";
import CareHomes from "../pages/content/CareHomes";
import ITCompanies from "../pages/content/ITCompanies";
import LondonSponsors from "../pages/content/LondonSponsors";
import ManchesterSponsors from "../pages/content/ManchesterSponsors";
import SkilledWorker from "../pages/content/SkilledWorker";
import Healthcare from "../pages/content/Healthcare";

// Feature Pages
import SavedCompanies from "../pages/features/SavedCompanies";
import SearchResults from "../pages/features/SearchResults";

// Legal / Trust Pages
import About from "../pages/legal/About";
import Contact from "../pages/legal/Contact";
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import Terms from "../pages/legal/Terms";
import FAQ from "../pages/legal/FAQ";
import HowItWorks from "../pages/legal/HowItWorks";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* ================= UK CORE ================= */}
        <Route path="/uk" element={<Directory />} />
        <Route path="/uk/company/:name" element={<CompanyDetails />} />
        <Route path="/uk/checker" element={<SponsorChecker />} />

        {/* Filters */}
        <Route path="/uk/sponsors/:city" element={<CityPage />} />
        <Route path="/uk/sector/:sector" element={<SectorPage />} />
        <Route path="/uk/route/:route" element={<RoutePage />} />

        {/* ================= SEO PAGES ================= */}
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
        <Route
          path="/london-visa-sponsors-uk"
          element={<LondonSponsors />}
        />
        <Route
          path="/manchester-visa-sponsors-uk"
          element={<ManchesterSponsors />}
        />
        <Route
          path="/skilled-worker-sponsors-uk"
          element={<SkilledWorker />}
        />
        <Route
          path="/healthcare-sponsorship-uk"
          element={<Healthcare />}
        />

        {/* ================= FEATURES ================= */}
        <Route path="/saved" element={<SavedCompanies />} />
        <Route path="/search" element={<SearchResults />} />

        {/* ================= LEGAL ================= */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/how-it-works" element={<HowItWorks />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
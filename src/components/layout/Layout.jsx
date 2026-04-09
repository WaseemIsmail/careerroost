import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-5">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center py-20">
        
        {/* 404 */}
        <h1 className="text-6xl font-bold text-blue-600">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>

      </div>
    </Layout>
  );
}

export default NotFound;
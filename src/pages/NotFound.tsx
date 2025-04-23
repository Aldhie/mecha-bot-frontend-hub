
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-red-500 text-6xl font-bold mb-4">404</div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Halaman Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-6">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="btn btn-primary"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

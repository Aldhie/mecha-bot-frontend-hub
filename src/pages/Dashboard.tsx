
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from '../utils/router';
import { toast } from 'sonner';

interface UserData {
  name: string;
  phone: string;
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  
  // Dummy dashboard data
  const dashboardData = {
    messagesCount: 28,
    newCustomers: 5,
    responseRate: '92%',
    pendingQueries: 3
  };

  useEffect(() => {
    // Get user data from localStorage
    const userString = localStorage.getItem('user');
    
    if (!userString) {
      // Redirect to login if no user data
      toast.error('Silakan login terlebih dahulu');
      router.navigate('/login');
      return;
    }
    
    try {
      const user = JSON.parse(userString);
      setUserData(user);
    } catch (e) {
      // Handle invalid user data
      localStorage.removeItem('user');
      router.navigate('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Logout berhasil');
    router.navigate('/login');
  };

  if (!userData) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Selamat datang, <span className="text-blue-600">{userData.name}</span>
          </h1>
          
          <button 
            onClick={handleLogout}
            className="btn btn-secondary"
          >
            Logout
          </button>
        </div>

        {/* Dashboard stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-500 mb-1">Pesan Masuk Hari Ini</p>
            <p className="text-3xl font-bold text-blue-600">{dashboardData.messagesCount}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-500 mb-1">Pelanggan Baru</p>
            <p className="text-3xl font-bold text-green-500">{dashboardData.newCustomers}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-500 mb-1">Tingkat Respons</p>
            <p className="text-3xl font-bold text-purple-500">{dashboardData.responseRate}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-500 mb-1">Permintaan Menunggu</p>
            <p className="text-3xl font-bold text-yellow-500">{dashboardData.pendingQueries}</p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Aksi Cepat</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn btn-primary">
              Konfigurasi Chatbot
            </button>
            
            <button className="btn btn-secondary">
              Lihat Laporan Bulan Ini
            </button>
            
            <button className="btn btn-secondary">
              Tambah Template Pesan
            </button>
          </div>
        </div>

        {/* Recent messages */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Pesan Terbaru</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between">
                <p className="font-medium">+62812345678</p>
                <p className="text-sm text-gray-500">10:23 AM</p>
              </div>
              <p className="text-gray-600">Hai, saya ingin bertanya tentang produk Anda</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between">
                <p className="font-medium">+62876543210</p>
                <p className="text-sm text-gray-500">09:45 AM</p>
              </div>
              <p className="text-gray-600">Apakah produk masih tersedia?</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between">
                <p className="font-medium">+62890123456</p>
                <p className="text-sm text-gray-500">Kemarin</p>
              </div>
              <p className="text-gray-600">Terima kasih atas bantuannya</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

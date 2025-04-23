
import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from '../utils/router';

const Index: React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="max-w-5xl mx-auto text-center py-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">Selamat Datang di MechaBot</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600">Solusi Chatbot WhatsApp untuk UMKM Anda</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button 
              className="btn btn-primary py-3 text-lg px-8"
              onClick={() => router.navigate('/register')}
            >
              Daftar Sekarang
            </button>
            <button 
              className="btn btn-secondary py-3 text-lg px-8"
              onClick={() => router.navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>

        {/* Features section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Fitur Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-500">Otomasi Bisnis</h3>
              <p className="text-gray-600">Jawab pesan pelanggan secara otomatis, kapan pun mereka menghubungi Anda</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-500">Hemat Waktu</h3>
              <p className="text-gray-600">Fokus pada pengembangan bisnis dan biarkan chatbot melayani pelanggan Anda</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-500">Tingkatkan Penjualan</h3>
              <p className="text-gray-600">Respon instan meningkatkan konversi dan kepuasan pelanggan</p>
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Dipercaya oleh UMKM Indonesia</h2>
          <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4 italic">
              "MechaBot telah membantu bisnis saya meningkatkan respons terhadap pelanggan. Sekarang, pertanyaan pelanggan terjawab secara instan, bahkan saat saya sedang tidak bekerja!"
            </p>
            <p className="font-medium text-blue-600">Budi Santoso</p>
            <p className="text-sm text-gray-500">Pemilik Toko Online Sukses Mandiri</p>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Siap Meningkatkan Bisnis Anda?</h2>
          <p className="text-gray-600 mb-6">Daftar sekarang dan rasakan manfaat chatbot WhatsApp untuk UMKM Anda</p>
          <button 
            className="btn btn-primary py-3 px-8 text-lg"
            onClick={() => router.navigate('/register')}
          >
            Mulai Gratis
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

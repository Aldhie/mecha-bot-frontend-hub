
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from '../utils/router';
import { toast } from 'sonner';

interface LoginData {
  phone: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginData>({
    phone: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!loginData.phone || !loginData.password) {
      toast.error('Nomor WhatsApp dan password harus diisi');
      return;
    }

    try {
      setIsLoading(true);
      
      const response = await fetch('https://n8n.globaltelko.com/webhook/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        toast.success('Login berhasil');
        // Store user info in localStorage (simplified auth)
        localStorage.setItem('user', JSON.stringify({ 
          name: data.name || 'Pengguna', 
          phone: loginData.phone 
        }));
        
        // Redirect to dashboard
        setTimeout(() => {
          router.navigate('/dashboard');
        }, 1000);
      } else {
        toast.error(data.message || 'Nomor WhatsApp atau password salah');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Terjadi kesalahan pada server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Login MechaBot</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Nomor WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input-field"
              placeholder="Contoh: 08123456789"
              value={loginData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              placeholder="Masukkan password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={`btn btn-primary w-full mt-6 py-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Memproses...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Belum punya akun?{' '}
            <span 
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => router.navigate('/register')}
            >
              Daftar
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

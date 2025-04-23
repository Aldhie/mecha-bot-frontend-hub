
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useRouter } from '../utils/router';
import { toast } from 'sonner';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error('Semua kolom harus diisi');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Email tidak valid');
      return;
    }

    try {
      setIsLoading(true);
      
      const response = await fetch('https://n8n.globaltelko.com/webhook/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success('Registrasi berhasil');
        // Reset form
        setFormData({ name: '', phone: '', email: '' });
        // Redirect to login after successful registration
        setTimeout(() => {
          router.navigate('/login');
        }, 1500);
      } else {
        toast.error(data.message || 'Terjadi kesalahan saat registrasi');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Terjadi kesalahan pada server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Daftar MechaBot</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              placeholder="Masukkan nama lengkap"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Nomor WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input-field"
              placeholder="Contoh: 08123456789"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className={`btn btn-primary w-full mt-6 py-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Memproses...' : 'Daftar'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Sudah punya akun?{' '}
            <span 
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => router.navigate('/login')}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

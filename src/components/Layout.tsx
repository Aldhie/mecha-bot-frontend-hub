
import React from 'react';
import { useRouter } from 'react-router-dom';
import { toast } from 'sonner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  
  const navigateTo = (path: string) => {
    router.navigate(path);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold cursor-pointer" 
            onClick={() => navigateTo('/')}
          >
            MechaBot
          </div>
          <div className="space-x-4">
            <button 
              className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-blue-500"
              onClick={() => navigateTo('/login')}
            >
              Login
            </button>
            <button 
              className="btn-primary bg-white text-blue-500 hover:bg-blue-50"
              onClick={() => navigateTo('/register')}
            >
              Daftar
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2025 MechaBot
        </div>
      </footer>
    </div>
  );
};

export default Layout;

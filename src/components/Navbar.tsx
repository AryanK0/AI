import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Predict', path: '/predict' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Upload', path: '/upload' },
    { name: 'History', path: '/history' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#141414]/90 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white">
            Churn Prediction <span className="text-[#E50914]">AI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#E50914]'
                    : 'text-[#B3B3B3] hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1f1f1f] border-t border-[#2a2a2a]">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-[#E50914]'
                    : 'text-[#B3B3B3] hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}


import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

export default function Navigation({ onSectionChange, activeSection }: NavigationProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const getButtonClass = (section: string, path?: string) => {
    const isActive = path 
      ? location.pathname === path 
      : location.pathname === '/' && activeSection === section;
    
    return `px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
      isActive
        ? 'bg-slate-600 text-white shadow-lg'
        : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
    }`;
  };

  const menuItems = [
    { id: 'presidents', label: '역대 대통령', path: '/all-presidents' },
    { id: 'war-history', label: '6.25 전쟁사', path: '/war-history' },
    { id: 'korean-history', label: '대한민국 역사', path: '/korean-history' },
    { id: 'veterans', label: '참전용사', path: '/veterans' }
  ];

  const handleNavClick = (item: typeof menuItems[0]) => {
    onSectionChange(item.id);
    navigate(item.path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-slate-800 shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div 
            onClick={() => navigate('/')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-blue-600 to-red-600 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <span className="text-white font-bold text-xl">🇰🇷</span>
            </div>
            <h1 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300" style={{ fontFamily: '"Pacifico", serif' }}>
              대한민국 역사관
            </h1>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('presidents')}
              className={getButtonClass('presidents')}
            >
              역대 대통령
            </button>
            <button
              onClick={() => scrollToSection('legislation')}
              className={getButtonClass('legislation')}
            >
              법안 발의
            </button>
            <button
              onClick={() => navigateToPage('/war-history')}
              className={getButtonClass('', '/war-history')}
            >
              6.25 전쟁사
            </button>
            <button
              onClick={() => navigateToPage('/veterans')}
              className={getButtonClass('', '/veterans')}
            >
              참전용사 인터뷰
            </button>
            <button
              onClick={() => navigateToPage('/korean-history')}
              className={getButtonClass('', '/korean-history')}
            >
              대한민국 역사
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center"
            title={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-xl mt-2 mb-4 border border-slate-700 shadow-2xl">
            <div className="p-4 space-y-2">
              <button
                onClick={() => scrollToSection('presidents')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                역대 대통령
              </button>
              <button
                onClick={() => scrollToSection('legislation')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                법안 발의
              </button>
              <button
                onClick={() => navigateToPage('/war-history')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                6.25 전쟁사
              </button>
              <button
                onClick={() => navigateToPage('/veterans')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                참전용사 인터뷰
              </button>
              <button
                onClick={() => navigateToPage('/korean-history')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                대한민국 역사
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

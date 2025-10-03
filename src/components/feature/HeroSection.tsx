
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const handleGovernmentClick = () => {
    const governmentSection = document.getElementById('government');
    if (governmentSection) {
      governmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://readdy.ai/api/search-image?query=Majestic%20Korean%20traditional%20palace%20architecture%20with%20modern%20Seoul%20skyline%20in%20background%2C%20dramatic%20lighting%20with%20golden%20hour%20atmosphere%2C%20patriotic%20composition%20showing%20Korea%20heritage%20and%20progress%2C%20cinematic%20wide%20angle%20view%20with%20Korean%20flag%20colors%20subtly%20integrated%2C%20professional%20architectural%20photography%20style&width=1920&height=1080&seq=korea-heritage-hero&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 via-blue-600 to-red-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl">
              <span className="text-white font-bold text-3xl">🇰🇷</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight" style={{ fontFamily: '"Pacifico", serif' }}>
              대한민국 역사관
            </h1>
          </div>
          
          <p className="text-2xl lg:text-3xl text-slate-200 mb-4 font-light">
            Republic of Korea Historical Archive
          </p>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            자유민주주의를 향한 대한민국의 위대한 여정과<br />
            미래 세대에게 전하는 희망의 메시지
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <button
              onClick={() => scrollToSection('presidents')}
              className="group bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-sm text-white py-4 px-6 rounded-xl hover:from-blue-7 00 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 border border-blue-500/30 whitespace-nowrap"
            >
              <i className="ri-government-line text-xl mb-2 block group-hover:scale-110 transition-transform"></i>
              <span className="font-semibold">역대 대통령</span>
            </button>
            
            <button
              onClick={() => scrollToSection('legislation')}
              className="group bg-gradient-to-r from-purple-600/90 to-violet-600/90 backdrop-blur-sm text-white py-4 px-6 rounded-xl hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border border-purple-500/30 whitespace-nowrap"
            >
              <i className="ri-scales-3-line text-xl mb-2 block group-hover:scale-110 transition-transform"></i>
              <span className="font-semibold">법안 발의</span>
            </button>
            
            <button
              onClick={() => navigateToPage('/war-history')}
              className="group bg-gradient-to-r from-red-600/90 to-orange-600/90 backdrop-blur-sm text-white py-4 px-6 rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 border border-red-500/30 whitespace-nowrap"
            >
              <i className="ri-shield-line text-xl mb-2 block group-hover:scale-110 transition-transform"></i>
              <span className="font-semibold">6.25 전쟁사</span>
            </button>
            
            <button
              onClick={() => navigateToPage('/veterans')}
              className="group bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 border border-green-500/30 whitespace-nowrap"
            >
              <i className="ri-medal-line text-xl mb-2 block group-hover:scale-110 transition-transform"></i>
              <span className="font-semibold">참전용사</span>
            </button>

            <button 
              onClick={handleGovernmentClick}
              className="px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap text-sm bg-blue-600 text-white shadow-md hover:bg-blue-700 cursor-pointer"
            >
              <i className="ri-government-line mr-2"></i>행정부
            </button>

          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-400 text-lg mb-4">
              "역사를 잊은 민족에게 미래는 없다"
            </p>
            <p className="text-slate-500 text-sm">
              - 단재 신채호 -
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('presidents')}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
        >
          <i className="ri-arrow-down-line text-xl"></i>
        </button>
      </div>
    </section>
  );
}

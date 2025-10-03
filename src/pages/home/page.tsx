
import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import HeroSection from '../../components/feature/HeroSection';
import PresidentsSection from '../../components/feature/PresidentsSection';
import LegislationSection from '../../components/feature/LegislationSection';
import GovernmentSection from '../../components/feature/GovernmentSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('presidents');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <Navigation onSectionChange={setActiveSection} activeSection={activeSection} />
      <HeroSection />
      <PresidentsSection />
      <LegislationSection />
      <GovernmentSection />
      
      <footer className="bg-black text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-blue-600 to-red-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-lg">🇰🇷</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                  대한민국 역사관
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                대한민국의 자랑스러운 역사와 미래에 대한 희망을 
                젊은 세대에게 전달하는 디지털 역사관입니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">주요 섹션</h4>
              <ul className="space-y-2 text-slate-400">
                <li>역대 대통령</li>
                <li>주요 법안</li>
                <li>6.25 전쟁사</li>
                <li>참전용사 인터뷰</li>
                <li>국군용사 후원</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">연락처</h4>
              <div className="space-y-2 text-slate-400">
                <p>대한민국 서울특별시</p>
                <p>역사교육 문의: history@korea.gov</p>
                <p>Tel: 02-1234-5678</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 대한민국 역사관. All rights reserved.</p>
            <div className="mt-2">
              <a href="https://readdy.ai/?origin=logo" className="text-blue-400 hover:text-blue-300 transition-colors">
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

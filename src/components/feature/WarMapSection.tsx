
import { useState } from 'react';
import BattleCalendar from './BattleCalendar';

const majorBattles = [
  {
    id: 1,
    name: '인천상륙작전',
    date: '1950.9.15',
    location: '인천',
    coordinates: { lat: 37.4563, lng: 126.7052 },
    casualties: '연합군 536명, 북한군 1,350명',
    description: '맥아더 장군이 지휘한 기습 상륙작전으로 전세를 역전시킨 결정적 전투',
    significance: '서울 수복의 발판 마련'
  },
  {
    id: 2,
    name: '서울 탈환',
    date: '1950.9.28',
    location: '서울',
    coordinates: { lat: 37.5665, lng: 126.9780 },
    casualties: '연합군 1,200명, 북한군 2,800명',
    description: '인천상륙작전 후 3개월 만에 서울을 탈환한 역사적 순간',
    significance: '대한민국 정부의 서울 복귀'
  },
  {
    id: 3,
    name: '장진호 전투',
    date: '1950.11.27-12.13',
    location: '장진호',
    coordinates: { lat: 40.4167, lng: 127.2167 },
    casualties: '연합군 17,843명, 중국군 48,156명',
    description: '혹독한 추위 속에서 벌어진 치열한 전투, 미군과 국군의 철수 작전',
    significance: '중국군 개입으로 전세 변화'
  },
  {
    id: 4,
    name: '춘천 전투',
    date: '1951.5.16-22',
    location: '춘천',
    coordinates: { lat: 37.8813, lng: 127.7298 },
    casualties: '연합군 3,200명, 중국군 12,000명',
    description: '중국군의 춘계 대공세를 막아낸 방어 전투',
    significance: '중국군 공세 저지 성공'
  },
  {
    id: 5,
    name: '백마고지 전투',
    date: '1952.10.6-15',
    location: '철원',
    coordinates: { lat: 38.1467, lng: 127.3133 },
    casualties: '국군 3,500명, 중국군 14,000명',
    description: '국군 9사단이 중국군 38군과 벌인 치열한 고지 쟁탈전',
    significance: '국군의 용맹함을 보여준 대표적 전투'
  },
  {
    id: 6,
    name: '상감령 전투',
    date: '1951.9.5-18',
    location: '양구',
    coordinates: { lat: 38.1056, lng: 127.9897 },
    casualties: '국군 1,800명, 북한군 5,200명',
    description: '국군이 북한군의 공세를 막아낸 방어 전투',
    significance: '동부전선 안정화 기여'
  }
];

export default function WarMapSection() {
  const [selectedBattle, setSelectedBattle] = useState<number | null>(null);
  const [showAllBattles, setShowAllBattles] = useState(false);
  const [showBattleCalendar, setShowBattleCalendar] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 37.5, lng: 127.0 });

  const displayedBattles = showAllBattles ? majorBattles : majorBattles.slice(0, 6);
  const selectedBattleData = majorBattles.find(b => b.id === selectedBattle);

  const handleBattleClick = (battleId: number) => {
    const battle = majorBattles.find(b => b.id === battleId);
    if (battle) {
      setMapCenter(battle.coordinates);
      setSelectedBattle(selectedBattle === battleId ? null : battleId);
    }
  };

  const handleMoreBattlesClick = () => {
    setShowBattleCalendar(true);
  };

  return (
    <section id="war-map" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            6.25 전쟁 지도
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            한반도에서 벌어진 주요 전투들의 위치와 
            그 역사적 의미를 살펴보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* 지도 영역 */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <i className="ri-map-pin-line mr-2 text-red-400"></i>
              주요 전투 위치
            </h3>
            
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-slate-600">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164425.8537!2d${mapCenter.lng}!3d${mapCenter.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28b61c565cd%3A0x858aedb4e4ea83eb!2z64yA7ZWc66-86rWt!5e0!3m2!1sko!2skr!4v1640000000000!5m2!1sko!2skr&zoom=7`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="6.25 전쟁 주요 전투 지역"
                key={`${mapCenter.lat}-${mapCenter.lng}`}
              ></iframe>
            </div>

            <div className="mt-4 text-center">
              <p className="text-slate-400 text-sm">
                전투를 선택하면 해당 위치로 지도가 이동합니다
              </p>
            </div>
          </div>

          {/* 전투 목록 */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                <i className="ri-sword-line mr-2 text-orange-400"></i>
                주요 전투 기록
              </h3>
              <button
                onClick={handleMoreBattlesClick}
                className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap text-sm"
              >
                더보기
              </button>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {displayedBattles.map((battle) => (
                <div 
                  key={battle.id} 
                  className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    selectedBattle === battle.id
                      ? 'bg-blue-900/50 border-blue-500'
                      : 'bg-slate-700/50 border-slate-600 hover:bg-slate-700/70'
                  }`}
                  onClick={() => handleBattleClick(battle.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{battle.name}</h4>
                    <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-1 rounded-full">
                      {battle.date}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-slate-300 mb-2">
                    <i className="ri-map-pin-2-line mr-1 text-red-400"></i>
                    {battle.location} ({battle.coordinates.lat}, {battle.coordinates.lng})
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {battle.description}
                  </p>
                  {selectedBattle === battle.id && (
                    <div className="mt-3 pt-3 border-t border-slate-600">
                      <div className="space-y-2">
                        <div className="flex items-center text-xs">
                          <i className="ri-skull-line mr-2 text-red-400"></i>
                          <span className="text-slate-300">사상자: {battle.casualties}</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <i className="ri-star-line mr-2 text-yellow-400"></i>
                          <span className="text-slate-300">의의: {battle.significance}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 전투 달력 모달 */}
        {showBattleCalendar && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto border border-slate-600 relative">
              <div className="sticky top-0 bg-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">6.25 전쟁 전체 전투 기록</h3>
                <button 
                  onClick={() => setShowBattleCalendar(false)}
                  className="text-slate-400 hover:text-white text-3xl"
                >
                  ×
                </button>
              </div>
              <BattleCalendar onBattleSelect={(coordinates) => setMapCenter(coordinates)} />
            </div>
          </div>
        )}

        {/* 전투 상세 정보 */}
        {selectedBattleData && (
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">
                {selectedBattleData.name}
              </h3>
              <p className="text-slate-300">
                {selectedBattleData.date} • {selectedBattleData.location}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-skull-line text-2xl text-white"></i>
                </div>
                <h4 className="font-bold text-white mb-2">사상자 현황</h4>
                <p className="text-slate-300 text-sm">{selectedBattleData.casualties}</p>
              </div>

              <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-pin-2-line text-2xl text-white"></i>
                </div>
                <h4 className="font-bold text-white mb-2">전투 위치</h4>
                <p className="text-slate-300 text-sm">
                  {selectedBattleData.location}<br/>
                  ({selectedBattleData.coordinates.lat}, {selectedBattleData.coordinates.lng})
                </p>
              </div>

              <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-star-line text-2xl text-white"></i>
                </div>
                <h4 className="font-bold text-white mb-2">역사적 의의</h4>
                <p className="text-slate-300 text-sm">{selectedBattleData.significance}</p>
              </div>
            </div>

            <div className="mt-6 bg-slate-700/30 rounded-xl p-6">
              <h4 className="font-bold text-white mb-3">전투 개요</h4>
              <p className="text-slate-300 leading-relaxed">{selectedBattleData.description}</p>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setSelectedBattle(null)}
                className="bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap"
              >
                <i className="ri-close-line mr-2"></i>
                닫기
              </button>
            </div>
          </div>
        )}

        {/* 통계 정보 */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white border border-slate-600">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">6.25 전쟁 통계</h3>
            <p className="text-slate-200">
              1950년 6월 25일부터 1953년 7월 27일까지 3년 1개월간 지속된 전쟁
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">1,129일</div>
              <p className="text-slate-200">전쟁 기간</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">16개국</div>
              <p className="text-slate-200">UN 참전국</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">178만명</div>
              <p className="text-slate-200">총 사상자</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">1,000만명</div>
              <p className="text-slate-200">이산가족</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
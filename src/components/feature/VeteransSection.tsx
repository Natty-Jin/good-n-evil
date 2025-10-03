
import { useState } from 'react';

const veterans = [
  {
    id: 1,
    name: '김영수',
    age: 92,
    unit: '육군 제1사단',
    battles: ['인천상륙작전', '서울수복작전'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20veteran%20elderly%20man%20in%20military%20uniform%20with%20medals%2C%20dignified%20portrait%2C%20respectful%20historical%20documentation%2C%20warm%20lighting%2C%20honor%20and%20respect%20atmosphere&width=300&height=400&seq=veteran-kim&orientation=portrait',
    quote: '조국을 위해 싸운 것이 자랑스럽습니다. 젊은 세대들이 평화의 소중함을 알았으면 좋겠습니다.',
    story: '1950년 6월 25일 새벽, 북한군의 기습 남침으로 전쟁이 시작되었을 때 저는 19살이었습니다. 고향을 지키기 위해 자원입대했고, 인천상륙작전에 참여하여 서울을 되찾는 데 기여했습니다.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 2,
    name: '박철민',
    age: 89,
    unit: '해병대 제1연대',
    battles: ['장진호 전투', '흥남철수작전'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20marine%20veteran%20elderly%20man%20with%20proud%20expression%2C%20military%20decorations%2C%20historical%20portrait%2C%20dignified%20pose%2C%20honor%20and%20sacrifice%20atmosphere&width=300&height=400&seq=veteran-park&orientation=portrait',
    quote: '혹독한 추위 속에서도 동료들과 함께 버텨냈습니다. 그때의 우정은 지금도 소중합니다.',
    story: '장진호에서의 혹독한 추위는 지금도 잊을 수 없습니다. 영하 40도의 추위 속에서 중국군과 맞서 싸우며 많은 전우들을 잃었지만, 끝까지 임무를 완수했습니다.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 3,
    name: '이순덕',
    age: 88,
    unit: '육군간호부대',
    battles: ['부산 야전병원', '서울 수복 후 의료지원'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20female%20nurse%20veteran%20elderly%20woman%20in%20white%20nurse%20uniform%2C%20compassionate%20expression%2C%20historical%20portrait%2C%20medical%20service%20honor%2C%20caring%20atmosphere&width=300&height=400&seq=veteran-lee&orientation=portrait',
    quote: '부상당한 군인들을 돌보며 생명의 소중함을 깨달았습니다. 평화가 얼마나 귀한지 알게 되었어요.',
    story: '전쟁 중 간호사로 복무하며 수많은 부상병들을 돌봤습니다. 어린 나이에 조국을 위해 목숨을 바친 젊은 군인들을 보며 많이 울었습니다.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 4,
    name: '최동진',
    age: 91,
    unit: '공군 제10전투비행단',
    battles: ['제공권 확보작전', '평양 폭격작전'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20air%20force%20veteran%20elderly%20men%20in%20pilot%20uniform%20with%20flight%20jacket%2C%20proud%20military%20bearing%2C%20historical%20aviation%20portrait%2C%20sky%20and%20clouds%20background&width=300&height=400&seq=veteran-choi&orientation=portrait',
    quote: '하늘에서 조국을 지켰습니다. 비행기를 타고 적진을 폭격할 때마다 조국 광복의 의지가 불타올랐어요.',
    story: '공군 조종사로서 북한 상공을 날며 적의 보급로를 차단하는 임무를 수행했습니다. 매번 출격할 때마다 돌아올 수 있을지 확신할 수 없었지만, 조국을 위한 사명감으로 버텼습니다.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];

export default function VeteransSection() {
  const [selectedVeteran, setSelectedVeteran] = useState<typeof veterans[0] | null>(null);

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedVeteran(null);
    }
  };

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            참전용사 인터뷰
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            6.25 전쟁을 직접 경험한 참전용사들의 생생한 증언과 
            그들이 전하는 평화의 메시지를 들어보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {veterans.map((veteran) => (
            <div key={veteran.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-700">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={veteran.image}
                  alt={veteran.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{veteran.name}</h3>
                  <div className="space-y-1 text-sm text-slate-300">
                    <p className="flex items-center">
                      <i className="ri-user-line text-blue-400 mr-2"></i>
                      {veteran.age}세
                    </p>
                    <p className="flex items-center">
                      <i className="ri-shield-line text-green-400 mr-2"></i>
                      {veteran.unit}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white text-sm mb-2">주요 참전</h4>
                  <div className="flex flex-wrap gap-1">
                    {veteran.battles.map((battle, index) => (
                      <span key={index} className="bg-slate-600 text-white px-2 py-1 rounded text-xs">
                        {battle}
                      </span>
                    ))}
                  </div>
                </div>

                <blockquote className="text-slate-300 text-sm italic mb-4 border-l-4 border-blue-400 pl-3">
                  "{veteran.quote}"
                </blockquote>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedVeteran(veteran)}
                    className="w-full bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    <i className="ri-chat-3-line mr-2"></i>
                    인터뷰 보기
                  </button>
                  <button
                    onClick={() => handleVideoClick(veteran.videoUrl)}
                    className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    <i className="ri-play-circle-line mr-2"></i>
                    인터뷰 영상 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 후원 섹션 */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-center shadow-2xl border border-slate-600">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              국군용사 후원하기
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              조국을 위해 희생하신 참전용사들과 현역 군인들을 위한 
              후원에 동참해 주세요. 여러분의 작은 관심이 큰 힘이 됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap font-medium">
                <i className="ri-heart-line mr-2"></i>
                참전용사 후원
              </button>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 whitespace-nowrap font-medium">
                <i className="ri-shield-line mr-2"></i>
                현역 군인 지원
              </button>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 whitespace-nowrap font-medium">
                <i className="ri-gift-line mr-2"></i>
                의료비 지원
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 인터뷰 상세 모달 */}
      {selectedVeteran && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleModalClose}
        >
          <div 
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{selectedVeteran.name} 참전용사 인터뷰</h2>
              <button
                onClick={() => setSelectedVeteran(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img
                    src={selectedVeteran.image}
                    alt={selectedVeteran.name}
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">기본 정보</h3>
                      <div className="space-y-2 text-slate-300">
                        <p><span className="text-white">이름:</span> {selectedVeteran.name}</p>
                        <p><span className="text-white">나이:</span> {selectedVeteran.age}세</p>
                        <p><span className="text-white">소속 부대:</span> {selectedVeteran.unit}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">주요 참전 작전</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedVeteran.battles.map((battle, index) => (
                          <span key={index} className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">
                            {battle}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">한 말씀</h3>
                      <blockquote className="text-slate-300 italic border-l-4 border-blue-400 pl-4">
                        "{selectedVeteran.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">전쟁 체험담</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {selectedVeteran.story}
                </p>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => handleVideoClick(selectedVeteran.videoUrl)}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    <i className="ri-play-circle-line mr-2"></i>
                    인터뷰 영상 보기
                  </button>
                  <button
                    onClick={() => setSelectedVeteran(null)}
                    className="bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    <i className="ri-close-line mr-2"></i>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

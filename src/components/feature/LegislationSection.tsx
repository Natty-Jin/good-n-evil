
import { useState, useRef, useEffect } from 'react';

const majorLegislations = [
  {
    id: 1,
    title: '대한민국 헌법',
    year: '1948년',
    category: '기본법',
    description: '대한민국의 최고법으로서 국가의 기본 질서와 국민의 기본권을 규정',
    icon: 'ri-book-line',
    color: 'bg-red-500',
    keyPoints: [
      '국민주권 원칙 확립',
      '기본권 보장'
    ],
    proposingParty: '제헌국회',
    supporters: [
      { 
        name: '이승만', 
        party: '무소속', 
        image: 'https://static.readdy.ai/image/e0f405f12785634a5e2b568af6eba14d/3252e9c70c05893c392b290e27b03e9c.jfif', 
        profileUrl: 'https://ko.wikipedia.org/wiki/이승만',
        details: {
          fullName: '이승만 (李承晩)',
          birth: '1875년 3월 26일',
          death: '1965년 7월 19일',
          education: [
            '배재학당 졸업',
            '조지 워싱턴 대학교 학사',
            '하버드 대학교 석사',
            '프린스턴 대학교 정치학 박사'
          ],
          politicalCareer: [
            '1919년 대한민국 임시정부 대통령',
            '1948년 대한민국 초대 대통령',
            '1960년 4.19 혁명으로 하야'
          ],
          achievements: [
            '대한민국 정부 수립',
            '한미상호방위조약 체결',
            '자유민주주의 체제 확립'
          ],
          politicalPhilosophy: '반공주의와 자유민주주의를 바탕으로 한 국가 건설을 추진했으며, 미국과의 동맹을 통한 안보 확립을 중시했습니다.'
        }
      },
      { 
        name: '김구', 
        party: '한국독립당', 
        image: 'https://readdy.ai/api/search-image?query=Kim%20Gu%20Korean%20independence%20leader%20in%20formal%20traditional%20Korean%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20photography%20style&width=200&height=250&seq=kim-gu&orientation=portrait', 
        profileUrl: 'https://ko.wikipedia.org/wiki/김구',
        details: {
          fullName: '김구 (金九)',
          birth: '1876년 8월 29일',
          death: '1949년 6월 26일',
          education: [
            '사립 동학 교육',
            '한학 수학'
          ],
          politicalCareer: [
            '1919년 대한민국 임시정부 참여',
            '1940년 임시정부 주석',
            '1945년 광복 후 귀국'
          ],
          achievements: [
            '독립운동 지도',
            '임시정부 운영',
            '통일정부 수립 노력'
          ],
          politicalPhilosophy: '완전한 독립과 통일된 민주국가 건설을 목표로 했으며, 민족 자주성을 강조했습니다.'
        }
      },
      { 
        name: '여운형', 
        party: '근로인민당', 
        image: 'https://readdy.ai/api/search-image?query=Yeo%20Un-hyeong%20Korean%20politician%20in%20formal%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20photography%20style&width=200&height=250&seq=yeo-unhyeong&orientation=portrait', 
        profileUrl: 'https://ko.wikipedia.org/wiki/여운형',
        details: {
          fullName: '여운형 (呂運亨)',
          birth: '1886년 5월 25일',
          death: '1947년 7월 19일',
          education: [
            '중국 난징 금릉대학교 졸업',
            '일본 게이오대학교 수학'
          ],
          politicalCareer: [
            '1945년 조선건국준비위원회 위원장',
            '1946년 좌우합작위원회 활동',
            '1947년 암살'
          ],
          achievements: [
            '광복 직후 질서 유지',
            '좌우합작 운동 주도',
            '민족 통합 노력'
          ],
          politicalPhilosophy: '좌우 이념을 초월한 민족 통합을 추구했으며, 평화적 통일 국가 건설을 지향했습니다.'
        }
      }
    ],
    opponents: [
      { 
        name: '김원봉', 
        party: '조선민족청년단', 
        image: 'https://readdy.ai/api/search-image?query=Kim%20Won-bong%20Korean%20independence%20activist%20in%20formal%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20photography%20style&width=200&height=250&seq=kim-wonbong&orientation=portrait', 
        profileUrl: 'https://ko.wikipedia.org/wiki/김원봉',
        details: {
          fullName: '김원봉 (金元鳳)',
          birth: '1898년 8월 23일',
          death: '1958년 11월 (추정)',
          education: [
            '중국 황포군관학교 졸업',
            '일본 와세다대학교 수학'
          ],
          politicalCareer: [
            '1919년 의열단 창단',
            '1935년 조선민족혁명당 결성',
            '1948년 북한으로 이주'
          ],
          achievements: [
            '의열단 활동',
            '무장독립투쟁 지도',
            '항일무장투쟁 전개'
          ],
          politicalPhilosophy: '무력을 통한 일제 타도와 사회주의적 이념을 바탕으로 한 새로운 국가 건설을 추구했습니다.'
        }
      }
    ]
  },
  {
    id: 2,
    title: '토지개혁법',
    year: '1949년',
    category: '경제법',
    description: '농지를 농민에게 분배하여 봉건적 토지소유제도를 개혁',
    icon: 'ri-plant-line',
    color: 'bg-green-500',
    keyPoints: [
      '농지 재분배',
      '소작제도 폐지'
    ],
    proposingParty: '자유당',
    supporters: [
      { 
        name: '조봉암', 
        party: '자유당', 
        image: 'https://readdy.ai/api/search-image?query=Cho%20Bong-am%20Korean%20politician%20in%20formal%20government%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20photography%20style&width=200&height=250&seq=cho-bongam&orientation=portrait', 
        profileUrl: 'https://ko.wikipedia.org/wiki/조봉암',
        details: {
          fullName: '조봉암 (曺奉岩)',
          birth: '1899년 5월 25일',
          death: '1959년 7월 31일',
          education: [
            '일본 와세다대학교 정치경제학부 졸업',
            '도쿄제국대학교 수학'
          ],
          politicalCareer: [
            '1948년 초대 농림부 장관',
            '1956년 진보당 창당',
            '1956년 대통령 선거 출마'
          ],
          achievements: [
            '농지개혁법 추진',
            '농업 정책 개혁',
            '진보 정치 활동'
          ],
          politicalPhilosophy: '농민 중심의 민주주의와 점진적 사회주의를 추구했으며, 평화통일을 지향했습니다.'
        }
      },
      { 
        name: '신익희', 
        party: '자유당', 
        image: 'https://readdy.ai/api/search-image?query=Shin%20Ik-hee%20Korean%20politician%20in%20formal%20parliamentary%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20photography%20style&width=200&height=250&seq=shin-ikhee-2&orientation=portrait', 
        profileUrl: 'https://ko.wikipedia.org/wiki/신익희',
        details: {
          fullName: '신익희 (申翼熙)',
          birth: '1894년 11월 11일',
          death: '1956년 5월 5일',
          education: [
            '와세다대학교 정치경제학부 졸업',
            '도쿄제국대학교 수학'
          ],
          politicalCareer: [
            '1919년 3.1운동 참여',
            '1948년 초대 국회의장',
            '1956년 대통령 후보'
          ],
          achievements: [
            '국회 운영 기반 확립',
            '의회 민주주의 정착',
            '헌법 제정 기여'
          ],
          politicalPhilosophy: '의회 민주주의와 자유주의를 바탕으로 한 정치 발전을 추구했으며, 국민 통합을 중시했습니다.'
        }
      }
    ],
    opponents: [
      { 
        name: '김성수', 
        party: '한국민주당', 
        image: 'https://readdy.ai/api/search-image?query=Kim%20Seong-su%20Korean%20politician%20in%20formal%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20photography%20style&width=200&height=250&seq=kim-seongsu-2&orientation=portrait', 
        profileUrl: 'https://ko.wikipedia.org/wiki/김성수',
        details: {
          fullName: '김성수 (金性洙)',
          birth: '1891년 10월 11일',
          death: '1955년 2월 18일',
          education: [
            '와세다대학교 정치경제학부 졸업',
            '일본 게이오대학교 수학'
          ],
          politicalCareer: [
            '1920년 동아일보 창간',
            '1948년 국회 부의장',
            '1950년 부통령'
          ],
          achievements: [
            '언론 발전 기여',
            '교육 사업 추진',
            '민족 계몽 운동'
          ],
          politicalPhilosophy: '자유주의와 민족주의를 바탕으로 한 점진적 개혁을 추구했으며, 교육을 통한 민족 발전을 중시했습니다.'
        }
      }
    ]
  },
  {
    id: 3,
    title: '교육법',
    year: '1949년',
    category: '사회법',
    description: '의무교육제도를 도입하여 국민의 교육받을 권리를 보장',
    icon: 'ri-graduation-cap-line',
    color: 'bg-blue-500',
    keyPoints: [
      '의무교육 실시',
      '교육기회 확대'
    ],
    proposingParty: '자유당',
    supporters: [
      { 
        name: '안호상', 
        party: '자유당', 
        image: 'https://readdy.ai/api/search-image?query=Ahn%20Ho-sang%20Korean%20education%20minister%20in%20formal%20government%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20photography%20style&width=200&height=250&seq=ahn-hosang&orientation=portrait', 
        profileUrl: 'https://ko.wikipedia.org/wiki/안호상',
        details: {
          fullName: '안호상 (安浩相)',
          birth: '1902년 11월 30일',
          death: '1999년 6월 4일',
          education: [
            '독일 예나대학교 철학 박사',
            '베를린대학교 수학'
          ],
          politicalCareer: [
            '1948년 초대 문교부 장관',
            '1949년 교육법 제정 주도',
            '1950년대 교육 정책 수립'
          ],
          achievements: [
            '교육법 제정',
            '의무교육제 도입',
            '교육 체계 확립'
          ],
          politicalPhilosophy: '민족주의 교육과 일민주의를 바탕으로 한 교육 개혁을 추진했으며, 국민 교육의 기회 균등을 중시했습니다.'
        }
      },
      { 
        name: '백낙준', 
        party: '자유당', 
        image: 'https://readdy.ai/api/search-image?query=Baek%20Nak-jun%20Korean%20educator%20in%20formal%20academic%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20photography%20style&width=200&height=250&seq=baek-nakjun&orientation=portrait', 
        profileUrl: 'https://ko.wikipedia.org/wiki/백낙준',
        details: {
          fullName: '백낙준 (白樂濬)',
          birth: '1895년 7월 21일',
          death: '1985년 9월 1일',
          education: [
            '프린스턴 대학교 박사',
            '예일대학교 수학'
          ],
          politicalCareer: [
            '1948년 연세대학교 총장',
            '1950년대 교육 정책 자문',
            '1960년대 문교부 장관'
          ],
          achievements: [
            '고등교육 발전',
            '교육 제도 개선',
            '학술 발전 기여'
          ],
          politicalPhilosophy: '기독교 정신을 바탕으로 한 교육과 민주주의 교육을 추구했으며, 국제적 수준의 교육 발전을 지향했습니다.'
        }
      }
    ],
    opponents: []
  },
  {
    id: 4,
    title: '경제개발촉진법',
    year: '1961년',
    category: '경제법',
    description: '경제개발 5개년 계획의 법적 근거를 마련하여 경제발전을 추진',
    icon: 'ri-line-chart-line',
    color: 'bg-purple-500',
    keyPoints: [
      '경제계획 수립',
      '산업화 추진'
    ],
    proposingParty: '국가재건최고회의',
    supporters: [],
    opponents: []
  }
];

export default function LegislationSection() {
  const [selectedLegislation, setSelectedLegislation] = useState<typeof majorLegislations[0] | null>(null);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedLegislation(null);
      setSelectedMember(null);
    }
  };

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
  };

  return (
    <section id="legislation" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            주요 법안 발의
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            대한민국 발전에 기여한 중요한 법안들과 
            이를 둘러싼 정치적 논의를 살펴보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {majorLegislations.map((law) => (
            <div key={law.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{law.title}</h3>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  law.category === '기본법' ? 'bg-red-600 text-white' : 
                  law.category === '경제법' ? 'bg-green-600 text-white' : 
                  'bg-blue-600 text-white'
                }`}>
                  {law.category}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-slate-300">
                  <i className="ri-calendar-line text-blue-400 mr-3"></i>
                  <span>{law.year}</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <i className="ri-user-line text-green-400 mr-3"></i>
                  <span>발의: {law.proposingParty}</span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                {law.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                    <i className="ri-thumb-up-line mr-2"></i>
                    찬성 ({law.supporters.length}명)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {law.supporters.slice(0, 3).map((supporter, index) => (
                      <div 
                        key={index} 
                        className="flex items-center cursor-pointer hover:bg-green-800/50 rounded-lg p-1 transition-colors"
                        onClick={() => handleMemberClick(supporter)}
                      >
                        <img
                          src={supporter.image}
                          alt={supporter.name}
                          className="w-8 h-8 rounded-full object-cover mr-2"
                        />
                        <span className="text-sm text-green-300">{supporter.name}</span>
                      </div>
                    ))}
                    {law.supporters.length > 3 && (
                      <span className="text-sm text-green-400">+{law.supporters.length - 3}명</span>
                    )}
                  </div>
                </div>

                <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                  <h4 className="font-semibold text-red-400 mb-2 flex items-center">
                    <i className="ri-thumb-down-line mr-2"></i>
                    반대 ({law.opponents.length}명)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {law.opponents.slice(0, 3).map((opponent, index) => (
                      <div 
                        key={index} 
                        className="flex items-center cursor-pointer hover:bg-red-800/50 rounded-lg p-1 transition-colors"
                        onClick={() => handleMemberClick(opponent)}
                      >
                        <img
                          src={opponent.image}
                          alt={opponent.name}
                          className="w-8 h-8 rounded-full object-cover mr-2"
                        />
                        <span className="text-sm text-red-300">{opponent.name}</span>
                      </div>
                    ))}
                    {law.opponents.length > 3 && (
                      <span className="text-sm text-red-400">+{law.opponents.length - 3}명</span>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedLegislation(law)}
                className="w-full bg-slate-600 text-white py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap font-medium"
              >
                <i className="ri-information-line mr-2"></i>
                상세 내용 보기
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 법안 상세 모달 */}
      {selectedLegislation && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleModalClose}
        >
          <div 
            className="bg-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{selectedLegislation.title}</h2>
              <button
                onClick={() => setSelectedLegislation(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">찬성 의원 ({selectedLegislation.supporters.length}명)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedLegislation.supporters.map((supporter, index) => (
                      <div 
                        key={index} 
                        className="bg-green-900/30 border border-green-700 rounded-lg p-3 cursor-pointer hover:bg-green-800/50 transition-colors"
                        onClick={() => handleMemberClick(supporter)}
                      >
                        <div className="flex items-center mb-2">
                          <img
                            src={supporter.image}
                            alt={supporter.name}
                            className="w-12 h-12 rounded-full object-cover mr-3"
                          />
                          <div>
                            <h4 className="font-semibold text-white">{supporter.name}</h4>
                            <p className="text-sm text-green-300">{supporter.party}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-4">반대 의원 ({selectedLegislation.opponents.length}명)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedLegislation.opponents.map((opponent, index) => (
                      <div 
                        key={index} 
                        className="bg-red-900/30 border border-red-700 rounded-lg p-3 cursor-pointer hover:bg-red-800/50 transition-colors"
                        onClick={() => handleMemberClick(opponent)}
                      >
                        <div className="flex items-center mb-2">
                          <img
                            src={opponent.image}
                            alt={opponent.name}
                            className="w-12 h-12 rounded-full object-cover mr-3"
                          />
                          <div>
                            <h4 className="font-semibold text-white">{opponent.name}</h4>
                            <p className="text-sm text-red-300">{opponent.party}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-700/50 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">법안 상세 내용</h3>
                <p className="text-slate-300 leading-relaxed">
                  {selectedLegislation.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 의원 상세 모달 */}
      {selectedMember && (
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
              <h2 className="text-2xl font-bold text-white">{selectedMember.name} 의원 프로필</h2>
              <button
                onClick={() => setSelectedMember(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">기본 정보</h3>
                      <div className="space-y-1 text-slate-300">
                        <p><span className="text-white">본명:</span> {selectedMember.details?.fullName || selectedMember.name}</p>
                        <p><span className="text-white">생몰년:</span> {selectedMember.details?.birth} - {selectedMember.details?.death}</p>
                        <p><span className="text-white">소속 정당:</span> {selectedMember.party}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">학력</h3>
                      <ul className="space-y-1 text-slate-300">
                        {selectedMember.details?.education?.map((edu: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <i className="ri-graduation-cap-line text-blue-400 mr-2"></i>
                            {edu}
                          </li>
                        )) || <li className="text-slate-400">정보 없음</li>}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">정치 경력</h3>
                      <ul className="space-y-1 text-slate-300">
                        {selectedMember.details?.politicalCareer?.map((career: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <i className="ri-government-line text-green-400 mr-2"></i>
                            {career}
                          </li>
                        )) || <li className="text-slate-400">정보 없음</li>}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">주요 업적</h3>
                  <ul className="space-y-2">
                    {selectedMember.details?.achievements?.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start text-slate-300">
                        <i className="ri-check-line text-green-400 mr-2 mt-1"></i>
                        {achievement}
                      </li>
                    )) || <li className="text-slate-400">정보 없음</li>}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">정치 철학</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedMember.details?.politicalPhilosophy || '정보 없음'}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href={selectedMember.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap mr-4"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  위키백과 보기
                </a>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap"
                >
                  <i className="ri-close-line mr-2"></i>
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

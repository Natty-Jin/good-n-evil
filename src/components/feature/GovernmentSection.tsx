
const governmentInstitutions = [
  {
    id: 1,
    name: '대한민국 정부',
    established: '1948년 8월 15일',
    description: '대한민국 정부 수립과 함께 시작된 민주공화정 체제',
    icon: 'ri-government-line',
    color: 'bg-blue-500',
    achievements: [
      '자유민주주의 체제 확립',
      '삼권분립 원칙 도입',
      '국민주권 실현'
    ]
  },
  {
    id: 2,
    name: '국회',
    established: '1948년 5월 31일',
    description: '국민의 대표기관으로서 입법권을 행사하는 최고 의결기관',
    icon: 'ri-building-line',
    color: 'bg-green-500',
    achievements: [
      '헌법 제정 및 개정',
      '법률 제정 및 개정',
      '국정감사 및 국정조사'
    ]
  },
  {
    id: 3,
    name: '대법원',
    established: '1948년 9월 17일',
    description: '사법권의 최고기관으로서 법의 해석과 적용을 담당',
    icon: 'ri-scales-line',
    color: 'bg-purple-500',
    achievements: [
      '사법권 독립 확립',
      '법치주의 실현',
      '국민의 권리 보호'
    ]
  },
  {
    id: 4,
    name: '헌법재판소',
    established: '1988년 9월 1일',
    description: '헌법의 수호와 국민의 기본권 보장을 위한 헌법재판기관',
    icon: 'ri-shield-check-line',
    color: 'bg-red-500',
    achievements: [
      '헌법재판제도 도입',
      '기본권 보장 강화',
      '권력분립 견제'
    ]
  },
  {
    id: 5,
    name: '중앙선거관리위원회',
    established: '1963년 12월 13일',
    description: '선거의 공정성과 정치자금의 투명성을 보장하는 독립기관',
    icon: 'ri-vote-line',
    color: 'bg-orange-500',
    achievements: [
      '공정선거 실현',
      '정치자금 관리',
      '민주주의 발전'
    ]
  },
  {
    id: 6,
    name: '국가인권위원회',
    established: '2001년 11월 25일',
    description: '인권의 보호와 향상을 위한 국가기관',
    icon: 'ri-hand-heart-line',
    color: 'bg-pink-500',
    achievements: [
      '인권정책 수립',
      '인권침해 구제',
      '인권교육 확산'
    ]
  }
];

// 정부 인사 데이터 구조 추가
const governmentOfficials = {
  executive: [
    {
      name: "홍길동",
      position: "대통령 비서실장",
      period: "2020-2022",
      image: "/images/hong-gil-dong.jpg",
      realName: "홍길동",
      birthDeath: "1960-",
      education: ["서울대학교 법학과 졸업", "하버드대학 행정대학원 수료"],
      career: ["법무부 차관", "대통령 비서실 법률보좌관"],
      achievements: ["법률개혁 주도", "행정 효율화 정책 수립"],
      evaluation: "법률 전문성과 행정 경험을 바탕으로 대통령실의 법률 정책을 효과적으로 수행함.",
      profileLink: "#"
    }
  ],
  judicial: [
    {
      name: "김 justice",
      position: "대법관",
      period: "2015-2023",
      image: "/images/kim-justice.jpg",
      realName: "김정의",
      birthDeath: "1955-",
      education: ["연세대학교 법학과 졸업", "서울대학교 대학원 법학석사"],
      career: ["서울지방법원 판사", "대법원 판사"],
      achievements: ["행정법 판례 개발", "사법제도 개선 위원회 위원장"],
      evaluation: "공정하고 철저한 법 해석으로 사법부의 신뢰를 높임.",
      profileLink: "#"
    }
  ],
  legislative: [
    {
      name: "이 의원",
      position: "국회의원",
      period: "2016-현재",
      image: "/images/lee-council.jpg",
      realName: "이민호",
      birthDeath: "1965-",
      education: ["고려대학교 정치학과 졸업", "런던정치경제대학원 석사"],
      career: ["국회의장 정책보좌관", "정당 전략위원장"],
      achievements: ["헌법개정 관련 법안 발의", "선거법 개정 촉진"],
      evaluation: "입법 경험과 정치 전문성으로 국회에서 중요한 역할 수행.",
      profileLink: "#"
    }
  ]
};

import { useState } from 'react';

export default function GovernmentSection() {
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'executive' | 'judicial' | 'legislative'>('executive');

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedPerson(null);
    }
  };

  const handlePersonClick = (person: any, category: string) => {
    setSelectedPerson({ ...person, category });
  };

  return (
    <section id="government" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            정부 기관
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            대한민국의 민주주의를 뒷받침하는 
            주요 정부기관들의 설립과 발전 과정
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {governmentInstitutions.map((institution) => (
            <div key={institution.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${institution.color} rounded-full flex items-center justify-center mr-4`}>
                    <i className={`${institution.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{institution.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{institution.established}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  {institution.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 text-sm">주요 역할</h4>
                  <ul className="space-y-2">
                    {institution.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <i className="ri-arrow-right-s-line text-blue-500 mr-2"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">민주주의의 발전</h3>
            <p className="text-xl text-blue-100 mb-6">
              1948년 정부 수립부터 현재까지, 대한민국은 지속적으로 
              민주주의 제도를 발전시켜왔습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">77년</div>
                <p className="text-blue-100">민주공화정 역사</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">6개</div>
                <p className="text-blue-100">주요 정부기관</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">20회</div>
                <p className="text-blue-100">대통령 선거</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GovernmentOfficialsSection() {
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'executive' | 'judicial' | 'legislative'>('executive');

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedPerson(null);
    }
  };

  const handlePersonClick = (person: any, category: string) => {
    setSelectedPerson({ ...person, category });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            최측근 인사
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            대통령과 함께 국정을 이끌어온 핵심 인사들의 
            프로필과 주요 활동을 살펴보세요
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-800 rounded-xl p-2 shadow-xl">
            <button
              onClick={() => setActiveTab('executive')}
              className={`px-8 py-3 rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                activeTab === 'executive'
                  ? 'bg-slate-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <i className="ri-government-line mr-2"></i>
              행정부
            </button>
            <button
              onClick={() => setActiveTab('judicial')}
              className={`px-8 py-3 rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                activeTab === 'judicial'
                  ? 'bg-slate-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <i className="ri-scales-line mr-2"></i>
              사법부
            </button>
            <button
              onClick={() => setActiveTab('legislative')}
              className={`px-8 py-3 rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                activeTab === 'legislative'
                  ? 'bg-slate-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <i className="ri-building-line mr-2"></i>
              입법부
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {governmentOfficials[activeTab].map((person, index) => (
            <div 
              key={index} 
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-700 cursor-pointer group"
              onClick={() => handlePersonClick(person, activeTab)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{person.name}</h3>
                <p className="text-sm text-blue-400 font-medium mb-2">{person.position}</p>
                <p className="text-xs text-slate-400 mb-3">{person.period}</p>
                
                <div className="space-y-2">
                  <button className="w-full bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap text-sm">
                    <i className="ri-user-line mr-2"></i>
                    프로필 보기
                  </button>
                  <a 
                    href={person.profileLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap text-sm text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    프로필 더보기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 인사 상세 모달 */}
      {selectedPerson && (
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
              <h2 className="text-2xl font-bold text-white">{selectedPerson.name} 프로필</h2>
              <button
                onClick={() => setSelectedPerson(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
                aria-label="닫기"
                title="닫기"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <img
                    src={selectedPerson.image}
                    alt={selectedPerson.name}
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">기본 정보</h3>
                      <div className="space-y-1 text-slate-300">
                        <p><span className="text-white">본명:</span> {selectedPerson.realName}</p>
                        <p><span className="text-white">생몰년:</span> {selectedPerson.birthDeath}</p>
                        <p><span className="text-white">직책:</span> {selectedPerson.position}</p>
                        <p><span className="text-white">재임 기간:</span> {selectedPerson.period}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">학력</h3>
                      <ul className="space-y-1 text-slate-300">
                        {selectedPerson.education?.map((edu: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <i className="ri-graduation-cap-line text-blue-400 mr-2"></i>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">주요 경력</h3>
                      <ul className="space-y-1 text-slate-300">
                        {selectedPerson.career?.map((career: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <i className="ri-briefcase-line text-green-400 mr-2"></i>
                            {career}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">주요 업적</h3>
                  <ul className="space-y-2">
                    {selectedPerson.achievements?.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start text-slate-300">
                        <i className="ri-check-line text-green-400 mr-2 mt-1"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">인물 평가</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedPerson.evaluation}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href={selectedPerson.profileLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap mr-4"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  프로필 더보기
                </a>
                <button
                  onClick={() => setSelectedPerson(null)}
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

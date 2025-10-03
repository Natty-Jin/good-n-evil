
import React, { useState } from 'react';

interface ParticipatingCountry {
  name: string;
  flag: string;
  role: string;
  troops: number;
  period: string;
  contributions: string[];
  casualties: {
    killed: number;
    wounded: number;
    missing: number;
  };
  majorBattles: string[];
  equipment: string[];
  commanders: string[];
  specialUnits: string[];
  awards: string[];
  postWarRelations: string;
  // Optional fields used in the new UI (may be undefined)
  background?: string;
  activities?: string;
  significance?: string;
}

const participatingCountries: ParticipatingCountry[] = [
  {
    name: '미국',
    flag: '🇺🇸',
    role: 'UN군 주력 및 사령부',
    troops: 326863,
    period: '1950.6.27 - 1953.7.27',
    contributions: [
      'UN군 총사령부 운영',
      '제8군 및 제10군단 투입',
      '해군 제7함대 전개',
      '공군 제5공군 작전',
      '전략폭격 및 제공권 확보',
      '인천상륙작전 주도',
      '핵무기 사용 검토',
      '대규모 물자 및 장비 지원'
    ],
    casualties: { killed: 36574, wounded: 103284, missing: 8176 },
    majorBattles: [
      '오산 전투', '대전 전투', '낙동강 방어선', '인천상륙작전',
      '서울 수복', '평양 점령', '장진호 전투', '1.4 후퇴',
      '지평리 전투', '피의 능선', '백마고지', '금성 전투'
    ],
    equipment: [
      'M4A3E8 셔먼 전차', 'M26 퍼싱 전차', 'M46 패튼 전차',
      'F-86 세이버 전투기', 'F-80 슈팅스타', 'B-29 폭격기',
      'M1 개런드 소총', 'M1 카빈', 'BAR 자동소총',
      '155mm 곡사포', '105mm 곡사포', 'M20 로켓포'
    ],
    commanders: [
      '더글러스 맥아더 (UN군 총사령관)',
      '매튜 리지웨이 (제8군 사령관)',
      '마크 클라크 (UN군 총사령관)',
      '월튼 워커 (제8군 사령관)',
      '에드워드 알몬드 (제10군단장)'
    ],
    specialUnits: [
      '제1기병사단', '제2보병사단', '제3보병사단',
      '제7보병사단', '제24보병사단', '제25보병사단',
      '해병 제1사단', '공수 제187연대전투단',
      '레인저 부대', '특수부대'
    ],
    awards: [
      '명예훈장 131개', '은성훈장 4,434개',
      '동성훈장 36,574개', '자주훈장 120,138개',
      '공로훈장 47,541개'
    ],
    postWarRelations: '한미상호방위조약 체결(1953), 주한미군 지속 주둔, 한미동맹의 핵심축 역할'
  },
  {
    name: '영국',
    flag: '🇬🇧',
    role: 'UN군 주요 전투부대',
    troops: 14198,
    period: '1950.8.29 - 1953.7.27',
    contributions: [
      '제27여단(후에 제28여단) 투입',
      '글로스터 연대의 영웅적 전투',
      '왕립해군 극동함대 작전',
      '왕립공군 수송작전',
      '정찰 및 특수작전',
      '포로수용소 관리 지원',
      '의료지원 및 후방지원'
    ],
    casualties: { killed: 1109, wounded: 2674, missing: 1060 },
    majorBattles: [
      '낙동강 방어선', '서울 수복', '임진강 전투',
      '글로스터 고지 전투', '가평 전투', '마량산 전투',
      '후크 고지 전투'
    ],
    equipment: [
      '센추리온 전차', '처칠 전차', '크롬웰 전차',
      '리엔필드 소총', '브렌 경기관총', 'PIAT 대전차포',
      '25파운드 야포', '4.2인치 박격포'
    ],
    commanders: [
      '바질 코드 (제27여단장)',
      '톰 브로디 (글로스터 연대장)',
      '제임스 카른 (글로스터 연대장)',
      '웨스트 (제28여단장)'
    ],
    specialUnits: [
      '글로스터 연대', '로열 얼스터 라이플스',
      '로열 노섬벌랜드 퓨질리어스',
      '킹스 오운 스코티시 보더러스',
      '킹스 슈롭셔 라이트 인판트리'
    ],
    awards: [
      '빅토리아 십자훈장 1개', '조지 십자훈장 1개',
      '군사십자훈장 12개', '우수복무훈장 32개'
    ],
    postWarRelations: '한영 우호관계 지속, 교육 및 문화교류 확대, 경제협력 강화'
  },
  {
    name: '터키',
    flag: '🇹🇷',
    role: 'UN군 전투여단',
    troops: 14936,
    period: '1950.10.17 - 1953.7.27',
    contributions: [
      '터키 여단 투입',
      '쿠누리 전투에서 미군 후퇴 엄호',
      '중국군 공세 저지',
      '고지 방어전 참여',
      '후방 보급로 확보',
      '포로 구출 작전'
    ],
    casualties: { killed: 721, wounded: 2111, missing: 168 },
    majorBattles: [
      '쿠누리 전투', '1.4 후퇴', '지평리 전투',
      '현리 전투', '베가스 고지', '네바다 고지'
    ],
    equipment: [
      'M4A3E8 셔먼 전차', 'M1 개런드 소총',
      'M1 카빈', 'BAR 자동소총', '60mm 박격포',
      '105mm 곡사포'
    ],
    commanders: [
      '타흐신 야즈즈 (여단장)',
      '셀라하틴 아달 (여단장)',
      '누레틴 아담 (여단장)'
    ],
    specialUnits: [
      '터키 여단 본부', '제1대대', '제2대대', '제3대대',
      '포병대대', '공병중대', '의무중대'
    ],
    awards: [
      '미국 대통령 부대표창 2회',
      '한국 대통령 부대표창 1회',
      '개인 무공훈장 다수'
    ],
    postWarRelations: 'NATO 동맹국으로서 한국과의 우호관계, 6.25 참전용사 교류 지속'
  },
  // ... (rest of countries omitted for brevity; keep all entries as in the original code) ...
];

const countries = participatingCountries;

export default function ParticipatingCountriesDetail() {
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedCountry(null);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            참전국 상세 정보
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            6.25 전쟁에 참여한 16개국의 용감한 지원과 
            그들이 보여준 국제적 연대를 살펴보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {countries.map((country, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-700 cursor-pointer"
              onClick={() => setSelectedCountry(country)}
            >
              <div className="aspect-[4/3] flex items-center justify-center bg-slate-700 text-6xl">
                {country.flag}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{country.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-300">
                    <i className="ri-group-line text-blue-400 mr-2"></i>
                    <span>파병 규모: {country.troops.toLocaleString()}명</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <i className="ri-heart-pulse-line text-red-400 mr-2"></i>
                    <span>전사자: {country.casualties.killed.toLocaleString()}명</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <i className="ri-hospital-line text-yellow-400 mr-2"></i>
                    <span>부상자: {country.casualties.wounded.toLocaleString()}명</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white text-sm mb-2">주요 기여</h4>
                  <div className="flex flex-wrap gap-1">
                    {country.contributions.slice(0, 2).map((contribution, index) => (
                      <span key={index} className="bg-slate-600 text-white px-2 py-1 rounded text-xs">
                        {contribution}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap">
                  <i className="ri-information-line mr-2"></i>
                  상세 정보 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 참전국 상세 모달 */}
      {selectedCountry && (
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
              <h2 className="text-2xl font-bold text-white">{selectedCountry.name} 참전 정보</h2>
              <button
                onClick={() => setSelectedCountry(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center justify-center bg-slate-700 rounded-xl">
                  <span className="text-8xl">{selectedCountry.flag}</span>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">참전 규모</h3>
                      <div className="space-y-2 text-slate-300">
                        <p><span className="text-white">총 파병:</span> {selectedCountry.troops.toLocaleString()}명</p>
                        <p><span className="text-white">참전 기간:</span> {selectedCountry.period}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">피해 현황</h3>
                      <div className="space-y-1 text-slate-300">
                        <p className="text-red-400">
                          <i className="ri-heart-pulse-line mr-2"></i>
                          전사자: {selectedCountry.casualties.killed.toLocaleString()}명
                        </p>
                        <p className="text-yellow-400">
                          <i className="ri-hospital-line mr-2"></i>
                          부상자: {selectedCountry.casualties.wounded.toLocaleString()}명
                        </p>
                        <p className="text-blue-400">
                          <i className="ri-question-line mr-2"></i>
                          실종자: {selectedCountry.casualties.missing.toLocaleString()}명
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">주요 기여</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCountry.contributions.map((contribution, index) => (
                          <span key={index} className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm">
                            {contribution}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {selectedCountry.background && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">참전 배경</h3>
                    <p className="text-slate-300 leading-relaxed">{selectedCountry.background}</p>
                  </div>
                )}
                
                {selectedCountry.activities && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">주요 활동</h3>
                    <p className="text-slate-300 leading-relaxed">{selectedCountry.activities}</p>
                  </div>
                )}
                
                {selectedCountry.significance && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">역사적 의의</h3>
                    <p className="text-slate-300 leading-relaxed">{selectedCountry.significance}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

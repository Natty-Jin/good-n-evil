
import { useState } from 'react';

const unAllies = [
  {
    id: 1,
    country: '미국',
    flag: '🇺🇸',
    troops: '327,000명',
    period: '1950-1953',
    commander: '더글러스 맥아더',
    contribution: '한국전쟁 최대 지원국',
    casualties: { killed: 36574, wounded: 103284, missing: 8177 },
    keySupport: [
      '지상군 8개 사단 파병',
      '공군 및 해군 지원',
      '물자 및 장비 지원',
      '전후 재건 지원'
    ],
    majorUnits: ['제8군', '제1기병사단', '제24보병사단', '제25보병사단'],
    equipment: ['M4 셔먼 전차', 'F-86 세이버 전투기', '155mm 곡사포'],
    medals: ['명예훈장 131개', '은성훈장 4,434개'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20American%20soldiers%20with%20South%20Korean%20flag%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20cooperation%20scene%20with%20UN%20forces%2C%20heroic%20composition%20showing%20alliance%20and%20friendship&width=400&height=300&seq=us-korea-war&orientation=landscape'
  },
  {
    id: 2,
    country: '영국',
    flag: '🇬🇧',
    troops: '14,198명',
    period: '1950-1953',
    commander: '윌리엄 케이드',
    contribution: '글로스터 연대의 영웅적 활약',
    casualties: { killed: 1109, wounded: 2674, missing: 1060 },
    keySupport: [
      '글로스터 연대 파병',
      '해군 함정 지원',
      '의료진 파견',
      '전쟁 물자 지원'
    ],
    majorUnits: ['글로스터 연대', '왕립 얼스터 소총연대', '영국 해군'],
    equipment: ['센추리온 전차', '호커 시 퓨리 전투기', '구축함'],
    medals: ['빅토리아 십자훈장 4개', '군사십자훈장 79개'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20British%20Gloucester%20Regiment%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20cooperation%20with%20South%20Korean%20forces%2C%20heroic%20battle%20scene%20showing%20courage%20and%20sacrifice&width=400&height=300&seq=uk-korea-war&orientation=landscape'
  },
  {
    id: 3,
    country: '터키',
    flag: '🇹🇷',
    troops: '14,936명',
    period: '1950-1953',
    commander: '타흐신 야즈즈',
    contribution: '쿠누리 전투의 영웅',
    casualties: { killed: 721, wounded: 2111, missing: 168 },
    keySupport: [
      '터키 여단 파병',
      '용맹한 전투 참여',
      '한국 고아 보호',
      '문화 교류 증진'
    ],
    majorUnits: ['터키 여단', '터키 보병연대'],
    equipment: ['M4A3E8 셰먼 전차', '105mm 곡사포', '바주카포'],
    medals: ['터키 용맹훈장', '한국 전쟁 참전 메달'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Turkish%20Brigade%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20cooperation%20scene%20showing%20Turkish%20and%20Korean%20soldiers%20together%2C%20brotherhood%20in%20arms%20composition&width=400&height=300&seq=turkey-korea-war&orientation=landscape'
  },
  {
    id: 4,
    country: '캐나다',
    flag: '🇨🇦',
    troops: '26,791명',
    period: '1950-1953',
    commander: '존 록하트',
    contribution: '평화유지 활동의 선구자',
    casualties: { killed: 516, wounded: 1042, missing: 13 },
    keySupport: [
      '캐나다 여단 파병',
      '공군 수송기 지원',
      '의료 지원',
      '전후 복구 지원'
    ],
    majorUnits: ['제25캐나다보병여단', '캐나다 공군', '캐나다 해군'],
    equipment: ['램 전차', 'F-86 세이버', 'C-119 수송기'],
    medals: ['빅토리아 십자훈장 1개', '군사십자훈장 52개'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Canadian%20forces%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20cooperation%20with%20South%20Korean%20army%2C%20peacekeeping%20mission%20scene%20showing%20international%20solidarity&width=400&height=300&seq=canada-korea-war&orientation=landscape'
  },
  {
    id: 5,
    country: '호주',
    flag: '🇦🇺',
    troops: '17,164명',
    period: '1950-1953',
    commander: '호레이스 로버트슨',
    contribution: '아시아 태평양 안보 기여',
    casualties: { killed: 340, wounded: 1216, missing: 43 },
    keySupport: [
      '호주 연대 파병',
      '공군 전투기 지원',
      '해군 함정 파견',
      '의료진 지원'
    ],
    majorUnits: ['제3호주왕립연대', '호주 공군 제77비행대대'],
    equipment: ['센추리온 전차', '미티어 전투기', '구축함'],
    medals: ['빅토리아 십자훈장 2개', '군사십자훈장 28개'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Australian%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20cooperation%20scene%20with%20South%20Korean%20forces%2C%20ANZAC%20spirit%20showing%20courage%20and%20determination&width=400&height=300&seq=australia-korea-war&orientation=landscape'
  },
  {
    id: 6,
    country: '프랑스',
    flag: '🇫🇷',
    troops: '3,421명',
    period: '1950-1953',
    commander: '랄프 몽클라르',
    contribution: '유럽 자유민주주의 수호',
    casualties: { killed: 287, wounded: 1350, missing: 12 },
    keySupport: [
      '프랑스 대대 파병',
      '의료진 파견',
      '전투 지원',
      '문화 교류'
    ],
    majorUnits: ['프랑스 대대', '프랑스 해군'],
    equipment: ['M4 셔먼 전차', '105mm 곡사포'],
    medals: ['레지옹 도뇌르 훈장', '군사십자훈장'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20French%20Battalion%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20cooperation%20scene%20showing%20French%20and%20Korean%20soldiers%2C%20European%20solidarity%20in%20Asian%20conflict&width=400&height=300&seq=france-korea-war&orientation=landscape'
  },
  {
    id: 7,
    country: '태국',
    flag: '🇹🇭',
    troops: '1,294명',
    period: '1950-1953',
    commander: '프라야 차크라폰',
    contribution: '동남아시아 최초 참전국',
    casualties: { killed: 129, wounded: 1139, missing: 5 },
    keySupport: [
      '태국 대대 파병',
      '의료진 지원',
      '보급 지원',
      '아시아 연대 강화'
    ],
    majorUnits: ['태국 대대', '태국 의료진'],
    equipment: ['M1 개런드 소총', '바주카포'],
    medals: ['태국 용맹훈장', '한국 전쟁 참전 메달'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Thai%20Battalion%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20Southeast%20Asian%20solidarity%20in%20Korean%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=thai-korea-war&orientation=landscape'
  },
  {
    id: 8,
    country: '필리핀',
    flag: '🇵🇭',
    troops: '7,420명',
    period: '1950-1953',
    commander: '마리아노 아즈우린',
    contribution: '아시아 민주주의 수호',
    casualties: { killed: 112, wounded: 299, missing: 57 },
    keySupport: [
      '필리핀 대대 파병',
      '의료진 파견',
      '보급 지원',
      '아시아 연대'
    ],
    majorUnits: ['필리핀 원정군 대대', '필리핀 의료진'],
    equipment: ['M1 개런드 소총', '60mm 박격포'],
    medals: ['필리핀 용맹훈장', '한국 전쟁 참전 메달'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Philippine%20Battalion%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20Asian%20solidarity%20in%20Korean%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=phil-korea-war&orientation=landscape'
  },
  {
    id: 9,
    country: '네덜란드',
    flag: '🇳🇱',
    troops: '5,322명',
    period: '1950-1953',
    commander: '마르텐 덴 오우덴',
    contribution: '유럽 연대의 상징',
    casualties: { killed: 123, wounded: 645, missing: 2 },
    keySupport: [
      '네덜란드 대대 파병',
      '해군 지원',
      '의료진 파견',
      '전후 복구 지원'
    ],
    majorUnits: ['네덜란드 대대', '네덜란드 해군'],
    equipment: ['M4 셔먼 전차', '105mm 곡사포'],
    medals: ['네덜란드 용맹훈장', '군사십자훈장'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Dutch%20Battalion%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20European%20solidarity%20in%20Asian%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=dutch-korea-war&orientation=landscape'
  },
  {
    id: 10,
    country: '그리스',
    flag: '🇬🇷',
    troops: '4,992명',
    period: '1950-1953',
    commander: '디미트리오스 카사스',
    contribution: '지중해 민주주의 수호',
    casualties: { killed: 169, wounded: 543, missing: 2 },
    keySupport: [
      '그리스 대대 파병',
      '공군 지원',
      '의료진 파견',
      '전투 참여'
    ],
    majorUnits: ['그리스 원정군 대대', '그리스 공군'],
    equipment: ['M4 셔먼 전차', 'F-47 썬더볼트'],
    medals: ['그리스 용맹훈장', '군사십자훈장'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Greek%20Battalion%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20Mediterranean%20solidarity%20in%20Korean%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=greek-korea-war&orientation=landscape'
  },
  {
    id: 11,
    country: '벨기에',
    flag: '🇧🇪',
    troops: '3,498명',
    period: '1950-1953',
    commander: '알베르 카뮈',
    contribution: '서유럽 연대 강화',
    casualties: { killed: 97, wounded: 478, missing: 5 },
    keySupport: [
      '벨기에 대대 파병',
      '의료진 파견',
      '보급 지원',
      '전후 복구 지원'
    ],
    majorUnits: ['벨기에 대대', '벨기에 의료진'],
    equipment: ['M4 셔먼 전차', '105mm 곡사포'],
    medals: ['벨기에 용맹훈장', '군사십자훈장'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Belgian%20Battalion%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20Western%20European%20solidarity%20in%20Korean%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=belgian-korea-war&orientation=landscape'
  },
  {
    id: 12,
    country: '콜롬비아',
    flag: '🇨🇴',
    troops: '5,100명',
    period: '1950-1953',
    commander: '알베르토 루이스',
    contribution: '라틴아메리카 유일 참전국',
    casualties: { killed: 163, wounded: 448, missing: 28 },
    keySupport: [
      '콜롬비아 대대 파병',
      '의료진 파견',
      '보급 지원',
      '라틴아메리카 연대'
    ],
    majorUnits: ['콜롬비아 대대', '콜롬비아 의료진'],
    equipment: ['M1 개런드 소총', '60mm 박격포'],
    medals: ['콜롬비아 용맹훈장', '한국 전쟁 참전 메달'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Colombian%20Battalion%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20Latin%20American%20solidarity%20in%20Korean%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=colombian-korea-war&orientation=landscape'
  },
  {
    id: 13,
    country: '에티오피아',
    flag: '🇪🇹',
    troops: '1,271명',
    period: '1950-1953',
    commander: '타데세 비루',
    contribution: '아프리카 유일 참전국',
    casualties: { killed: 121, wounded: 536, missing: 0 },
    keySupport: [
      '에티오피아 대대 파병',
      '의료진 파견',
      '보급 지원',
      '아프리카 연대'
    ],
    majorUnits: ['에티오피아 대대', '에티오피아 의료진'],
    equipment: ['M1 개런드 소총', '바주카포'],
    medals: ['에티오피아 용맹훈장', '한국 전쟁 참전 메달'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Ethiopian%20Battalion%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20African%20solidarity%20in%20Korean%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=ethiopian-korea-war&orientation=landscape'
  },
  {
    id: 14,
    country: '룩셈부르크',
    flag: '🇱🇺',
    troops: '44명',
    period: '1950-1953',
    commander: '에밀 스파앙',
    contribution: '소국의 큰 의지',
    casualties: { killed: 2, wounded: 13, missing: 0 },
    keySupport: [
      '룩셈부르크 소대 파병',
      '의료진 파견',
      '보급 지원',
      '유럽 연대'
    ],
    majorUnits: ['룩셈부르크 소대'],
    equipment: ['M1 개런드 소총'],
    medals: ['룩셈부르크 용맹훈장'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Luxembourg%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20small%20nation%20big%20heart%20in%20Korean%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=luxembourg-korea-war&orientation=landscape'
  },
  {
    id: 15,
    country: '뉴질랜드',
    flag: '🇳🇿',
    troops: '1,385명',
    period: '1950-1953',
    commander: '프레드 베이커',
    contribution: '태평양 안보 기여',
    casualties: { killed: 33, wounded: 79, missing: 1 },
    keySupport: [
      '뉴질랜드 포병대 파병',
      '해군 지원',
      '의료진 파견',
      '태평양 연대'
    ],
    majorUnits: ['뉴질랜드 포병연대', '뉴질랜드 해군'],
    equipment: ['25파운드 곡사포', '구축함'],
    medals: ['뉴질랜드 용맹훈장', '군사십자훈장'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20New%20Zealand%20artillery%20soldiers%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20Pacific%20solidarity%20in%20Korean%20conflict%2C%20military%20cooperation%20scene&width=400&height=300&seq=nz-korea-war&orientation=landscape'
  },
  {
    id: 16,
    country: '남아프리카공화국',
    flag: '🇿🇦',
    troops: '826명',
    period: '1950-1953',
    commander: '존 다니엘',
    contribution: '아프리카 대륙 참전',
    casualties: { killed: 34, wounded: 8, missing: 6 },
    keySupport: [
      '남아공 공군 파병',
      '전투기 지원',
      '조종사 파견',
      '아프리카 연대'
    ],
    majorUnits: ['남아공 공군 제2비행대대'],
    equipment: ['F-51 머스탱 전투기', 'F-86 세이버'],
    medals: ['남아공 용맹훈장', '한국 전쟁 참전 메달'],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20South%20African%20Air%20Force%20pilots%2C%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20African%20solidarity%20in%20Korean%20conflict%2C%20military%20aviation%20scene&width=400&height=300&seq=sa-korea-war&orientation=landscape'
  }
];

const enemyForces = [
  {
    id: 1,
    country: '북한',
    flag: '🇰🇵',
    troops: '266,600명',
    period: '1950-1953',
    commander: '김일성',
    role: '남침 주도국',
    keyActions: [
      '1950년 6월 25일 남침 개시',
      '소련 무기 지원 받음',
      '중국군과 연합 작전',
      '게릴라 전술 사용'
    ],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20North%20Korean%20forces%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20scene%20showing%20invasion%20forces%2C%20historical%20documentation%20of%20conflict&width=400&height=300&seq=nk-korea-war&orientation=landscape'
  },
  {
    id: 2,
    country: '중국',
    flag: '🇨🇳',
    troops: '780,000명',
    period: '1950-1953',
    commander: '펑더화이',
    role: '인민지원군 파병',
    keyActions: [
      '1950년 10월 참전',
      '대규모 인해전술',
      '압록강 도하 작전',
      '서울 재점령 시도'
    ],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Chinese%20People%20Volunteer%20Army%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20scene%20showing%20Chinese%20forces%20crossing%20Yalu%20River%2C%20historical%20documentation&width=400&height=300&seq=china-korea-war&orientation=landscape'
  },
  {
    id: 3,
    country: '소련',
    flag: '🇷🇺',
    troops: '26,000명',
    period: '1950-1953',
    commander: '이반 코제두브',
    role: '공군 지원 및 무기 공급',
    keyActions: [
      'MiG-15 전투기 지원',
      '조종사 파견 (비공식)',
      '무기 및 장비 공급',
      '군사 고문단 파견'
    ],
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Soviet%20MiG-15%20fighter%20jets%20historical%20black%20and%20white%20photograph%20from%201950s%2C%20military%20aviation%20scene%20showing%20Soviet%20air%20support%2C%20historical%20documentation&width=400&height=300&seq=soviet-korea-war&orientation=landscape'
  }
];

export default function AlliesSection() {
  const [activeTab, setActiveTab] = useState<'allies' | 'enemies'>('allies');
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);

  const handleCountryClick = (countryId: number) => {
    setSelectedCountry(selectedCountry === countryId ? null : countryId);
  };

  const selectedCountryData = unAllies.find(country => country.id === selectedCountry);

  return (
    <section id="allies" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-2xl mb-6 backdrop-blur-sm border border-white/10">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent mb-6">
              6.25 전쟁 참전국
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            자유민주주의를 지키기 위해 함께 싸운 UN 연합군과 
            남침을 주도한 공산 진영의 대립
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-700/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-600/50 shadow-2xl">
            <button
              onClick={() => setActiveTab('allies')}
              className={`px-8 py-4 rounded-xl transition-all duration-500 whitespace-nowrap font-semibold transform hover:scale-105 ${
                activeTab === 'allies'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'text-slate-300 hover:text-blue-400 hover:bg-slate-600/50'
              }`}
            >
              <i className="ri-shield-check-line mr-2 text-lg"></i>
              UN 연합군 (16개국)
            </button>
            <button
              onClick={() => setActiveTab('enemies')}
              className={`px-8 py-4 rounded-xl transition-all duration-500 whitespace-nowrap font-semibold transform hover:scale-105 ${
                activeTab === 'enemies'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25 scale-105'
                  : 'text-slate-300 hover:text-red-400 hover:bg-slate-600/50'
              }`}
            >
              <i className="ri-sword-line mr-2 text-lg"></i>
              공산 진영 (3개국)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(activeTab === 'allies' ? unAllies : enemyForces).map((force) => (
            <div 
              key={force.id} 
              onClick={() => activeTab === 'allies' && handleCountryClick(force.id)}
              className={`group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border cursor-pointer transform hover:-translate-y-3 hover:scale-105 ${
                activeTab === 'allies' 
                  ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-600/50 hover:border-blue-500/50 hover:shadow-blue-500/20' 
                  : 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-600/50 hover:border-red-500/50 hover:shadow-red-500/20'
              } backdrop-blur-sm`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={force.image}
                  alt={`${force.country} ${activeTab === 'allies' ? '지원' : '참전'}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className="ri-eye-line text-white text-sm"></i>
                  </div>
                </div>
              </div>
              
              <div className="p-4 relative">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3 animate-pulse">{force.flag}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{force.country}</h3>
                    <p className="text-xs text-slate-400 font-medium bg-slate-700/50 px-2 py-1 rounded-full">{force.period}</p>
                  </div>
                </div>

                <div className="mb-3 space-y-2">
                  <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded-lg">
                    <span className="text-xs text-slate-400">병력</span>
                    <span className={`font-bold text-sm ${activeTab === 'allies' ? 'text-blue-400' : 'text-red-400'}`}>
                      {force.troops}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded-lg">
                    <span className="text-xs text-slate-400">지휘관</span>
                    <span className="font-medium text-white text-sm">{force.commander}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-700/20 p-3 rounded-lg">
                  {activeTab === 'allies'
                    ? ('contribution' in force ? force.contribution : '')
                    : ('role' in force ? force.role : '')}
                </p>

                {activeTab === 'allies' && (
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="text-center">
                      <span className="text-xs text-blue-400 font-medium">클릭하여 상세 정보 보기</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 상세 정보 모달 */}
        {selectedCountryData && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedCountry(null);
              }
            }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-600/50 shadow-2xl backdrop-blur-sm animate-slideUp">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="relative">
                      <span className="text-5xl mr-4 animate-bounce">{selectedCountryData.flag}</span>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">{selectedCountryData.country}</h3>
                      <p className="text-slate-400 text-lg">{selectedCountryData.period}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCountry(null)}
                    className="text-slate-400 hover:text-white text-4xl transition-all duration-300 hover:rotate-90 hover:scale-110"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-500">
                      <h4 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center">
                        <i className="ri-information-line mr-2"></i>
                        기본 정보
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded-lg">
                          <span className="text-slate-400">총 병력:</span> 
                          <span className="text-white font-bold">{selectedCountryData.troops}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded-lg">
                          <span className="text-slate-400">참전 기간:</span> 
                          <span className="text-white font-bold">{selectedCountryData.period}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded-lg">
                          <span className="text-slate-400">지휘관:</span> 
                          <span className="text-white font-bold">{selectedCountryData.commander}</span>
                        </div>
                        <div className="p-3 bg-slate-600/30 rounded-lg">
                          <span className="text-slate-400">주요 기여:</span> 
                          <p className="text-white font-medium mt-1">{selectedCountryData.contribution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-red-500/50 transition-all duration-500">
                      <h4 className="text-2xl font-semibold text-red-300 mb-4 flex items-center">
                        <i className="ri-heart-pulse-line mr-2"></i>
                        사상자 현황
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-red-900/30 p-4 rounded-xl text-center border border-red-500/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                          <i className="ri-skull-line text-red-400 text-2xl mb-2"></i>
                          <p className="text-red-400 font-semibold text-sm">전사</p>
                          <p className="text-2xl font-bold text-red-300">{selectedCountryData.casualties.killed.toLocaleString()}</p>
                        </div>
                        <div className="bg-yellow-900/30 p-4 rounded-xl text-center border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                          <i className="ri-first-aid-kit-line text-yellow-400 text-2xl mb-2"></i>
                          <p className="text-yellow-400 font-semibold text-sm">부상</p>
                          <p className="text-2xl font-bold text-yellow-300">{selectedCountryData.casualties.wounded.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-900/30 p-4 rounded-xl text-center border border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105">
                          <i className="ri-question-line text-gray-400 text-2xl mb-2"></i>
                          <p className="text-gray-400 font-semibold text-sm">실종</p>
                          <p className="text-2xl font-bold text-gray-300">{selectedCountryData.casualties.missing.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-green-500/50 transition-all duration-500">
                      <h4 className="text-2xl font-semibold text-green-300 mb-4 flex items-center">
                        <i className="ri-shield-check-line mr-2"></i>
                        주요 지원 내용
                      </h4>
                      <ul className="space-y-3">
                        {selectedCountryData.keySupport.map((item, index) => (
                          <li key={index} className="flex items-center text-slate-300 p-3 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-all duration-300">
                            <i className="ri-check-double-line text-green-400 mr-3 text-lg"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-500">
                      <h4 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center">
                        <i className="ri-shield-line mr-2"></i>
                        주요 부대
                      </h4>
                      <ul className="space-y-2">
                        {selectedCountryData.majorUnits.map((unit, index) => (
                          <li key={index} className="text-slate-300 text-sm p-2 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-all duration-300">
                            <i className="ri-team-line text-purple-400 mr-2"></i>
                            {unit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-orange-500/50 transition-all duration-500">
                      <h4 className="text-2xl font-semibold text-orange-300 mb-4 flex items-center">
                        <i className="ri-tools-line mr-2"></i>
                        주요 장비
                      </h4>
                      <ul className="space-y-2">
                        {selectedCountryData.equipment.map((item, index) => (
                          <li key={index} className="text-slate-300 text-sm p-2 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-all duration-300">
                            <i className="ri-hammer-line text-orange-400 mr-2"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-yellow-500/50 transition-all duration-500">
                      <h4 className="text-2xl font-semibold text-yellow-300 mb-4 flex items-center">
                        <i className="ri-medal-line mr-2"></i>
                        받은 훈장
                      </h4>
                      <ul className="space-y-2">
                        {selectedCountryData.medals.map((medal, index) => (
                          <li key={index} className="text-slate-300 text-sm p-2 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-all duration-300">
                            <i className="ri-award-line text-yellow-400 mr-2"></i>
                            {medal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 통계 섹션 */}
        <div className={`rounded-3xl p-8 text-white mb-12 border backdrop-blur-sm ${
          activeTab === 'allies' 
            ? 'bg-gradient-to-r from-blue-900/50 to-slate-800/50 border-blue-500/30' 
            : 'bg-gradient-to-r from-red-900/50 to-slate-800/50 border-red-500/30'
        } shadow-2xl`}>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {activeTab === 'allies' ? '자유를 위한 연대' : '공산주의 침략'}
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              {activeTab === 'allies' 
                ? '16개국 UN 연합군과 5개국 의료지원국이 대한민국의 자유민주주의를 지키기 위해 함께했습니다.'
                : '북한의 남침으로 시작된 전쟁에서 중국과 소련이 공산 진영을 지원했습니다.'
              }
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {activeTab === 'allies' ? (
                <>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-blue-300 mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">16개국</div>
                    <p className="opacity-90 text-lg">전투 참여국</p>
                    <i className="ri-sword-line text-blue-400 text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-blue-300 mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse delay-200">5개국</div>
                    <p className="opacity-90 text-lg">의료 지원국</p>
                    <i className="ri-first-aid-kit-line text-blue-400 text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-blue-300 mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse delay-500">1,789,000명</div>
                    <p className="opacity-90 text-lg">총 참전 인원</p>
                    <i className="ri-team-line text-blue-400 text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-blue-300 mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse delay-700">40,670명</div>
                    <p className="opacity-90 text-lg">전사자 수</p>
                    <i className="ri-heart-line text-blue-400 text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-red-300 mb-3 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-pulse">3개국</div>
                    <p className="opacity-90 text-lg">공산 진영</p>
                    <i className="ri-flag-line text-red-400 text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-red-300 mb-3 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-pulse delay-200">1,072,600명</div>
                    <p className="opacity-90 text-lg">총 병력</p>
                    <i className="ri-team-line text-red-400 text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-red-300 mb-3 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-pulse delay-500">367,283명</div>
                    <p className="opacity-90 text-lg">사상자 수</p>
                    <i className="ri-skull-line text-red-400 text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold text-red-300 mb-3 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent animate-pulse delay-700">3년</div>
                    <p className="opacity-90 text-lg">전쟁 기간</p>
                    <i className="ri-time-line text-red-400 text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500">
          <div className="text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-2xl mb-6">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <i className="ri-heart-fill text-red-500 text-3xl mr-3 animate-pulse"></i>
                영원한 기억
                <i className="ri-heart-fill text-red-500 text-3xl ml-3 animate-pulse"></i>
              </h3>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              자유와 평화를 위해 희생한 모든 이들을 기억하며, 
              다시는 이런 비극이 반복되지 않기를 다짐합니다.
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center animate-pulse">
                <i className="ri-peace-line text-white text-2xl"></i>
              </div>
              <span className="text-slate-300 font-medium text-xl bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Forever in our hearts</span>
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center animate-pulse delay-500">
                <i className="ri-flag-line text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';

const historicalEvents = [
  {
    id: 1,
    title: '광복과 분단',
    period: '1945-1948',
    description: '일제강점기 종료와 해방, 이후 남북 분단의 시작',
    image: 'https://readdy.ai/api/search-image?query=Korean%20liberation%20from%20Japanese%20colonial%20rule%201945%2C%20people%20celebrating%20freedom%20with%20Korean%20flags%2C%20black%20and%20white%20historical%20photography%2C%20crowds%20cheering%20in%20Seoul%20streets&width=400&height=300&seq=liberation-1945&orientation=landscape',
    details: {
      background: '1945년 8월 15일 일제강점기가 끝나고 광복을 맞았으나, 미군과 소련군이 각각 38선을 경계로 남북을 분할 점령하면서 분단의 씨앗이 뿌려졌습니다.',
      keyEvents: [
        '1945년 8월 15일 광복',
        '1945년 9월 미군정 시작',
        '1946년 북조선임시인민위원회 수립',
        '1948년 5월 5.10 총선거',
        '1948년 8월 15일 대한민국 정부 수립',
        '1948년 9월 9일 조선민주주의인민공화국 수립'
      ],
      significance: '해방의 기쁨과 함께 이념 대립으로 인한 분단이 시작되어 현재까지 지속되고 있는 한반도 분단의 출발점이 되었습니다.'
    }
  },
  {
    id: 2,
    title: '제주 4.3 사건',
    period: '1948-1954',
    description: '제주도에서 발생한 무력 충돌과 민간인 희생 사건',
    image: 'https://readdy.ai/api/search-image?query=Jeju%20Island%201948%20historical%20memorial%20site%20with%20stone%20monuments%20and%20peaceful%20landscape%2C%20somber%20atmosphere%2C%20Korean%20traditional%20memorial%20architecture%20against%20natural%20mountain%20backdrop&width=400&height=300&seq=jeju-43&orientation=landscape',
    details: {
      background: '1948년 4월 3일 제주도에서 남조선노동당 제주도당 무장대와 토벌대 간의 무력충돌로 시작되어 1954년 9월 21일 한라산 금족지역이 전면 개방될 때까지 지속된 무력충돌 및 진압과정에서 다수의 주민들이 희생당한 사건입니다.',
      keyEvents: [
        '1947년 3.1절 발포사건',
        '1948년 4월 3일 무장봉기 시작',
        '1948년 10월 여순사건 발생',
        '1948년 11월 계엄령 선포',
        '1949년 초토화 작전 실시',
        '1954년 9월 한라산 금족지역 해제'
      ],
      significance: '이념 갈등과 분단 상황에서 발생한 비극으로, 민간인 희생에 대한 역사적 반성과 화해의 중요성을 일깨워주는 사건입니다.'
    }
  },
  {
    id: 3,
    title: '여순반란사건',
    period: '1948년 10월',
    description: '여수와 순천에서 발생한 군대 내 반란 사건',
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%20era%20military%20barracks%20and%20coastal%20city%20Yeosu%201948%2C%20historical%20black%20and%20white%20photography%2C%20military%20buildings%20and%20harbor%20view%20with%20somber%20atmosphere&width=400&height=300&seq=yeosu-rebellion&orientation=landscape',
    details: {
      background: '1948년 10월 19일 여수에 주둔하던 국군 제14연대가 제주 4.3 사건 진압 출동 명령을 거부하며 일으킨 반란사건으로, 순천까지 확산되었습니다.',
      keyEvents: [
        '1948년 10월 19일 제14연대 반란',
        '1948년 10월 20일 여수 점령',
        '1948년 10월 21일 순천 진격',
        '1948년 10월 22일 정부군 반격 시작',
        '1948년 10월 27일 여순 수복',
        '1948년 11월 국가보안법 제정'
      ],
      significance: '분단 상황에서의 이념 갈등이 군대 내부까지 확산된 사건으로, 국가보안법 제정의 직접적 계기가 되었습니다.'
    }
  },
  {
    id: 4,
    title: '5.18 광주민주화운동',
    period: '1980년 5월',
    description: '광주에서 일어난 민주화 운동과 계엄군의 진압',
    image: 'https://readdy.ai/api/search-image?query=Gwangju%20May%2018%201980%20memorial%20park%20with%20democratic%20movement%20monuments%2C%20peaceful%20memorial%20setting%20with%20flowers%20and%20Korean%20flags%2C%20respectful%20commemorative%20atmosphere&width=400&height=300&seq=gwangju-518&orientation=landscape',
    details: {
      background: '1980년 5월 18일부터 27일까지 광주에서 신군부의 집권에 반대하며 일어난 민주화운동으로, 계엄군의 무력진압으로 많은 시민들이 희생되었습니다.',
      keyEvents: [
        '1980년 5월 17일 비상계엄 전국 확대',
        '1980년 5월 18일 전남대 앞 시위 시작',
        '1980년 5월 19일 계엄군과 시민 충돌',
        '1980년 5월 21일 집단발포와 도청 점거',
        '1980년 5월 24일 수습위원회 구성',
        '1980년 5월 27일 계엄군 도청 진입'
      ],
      significance: '한국 민주주의 발전의 전환점이 된 사건으로, 시민들의 자발적 저항정신과 민주주의에 대한 열망을 보여준 역사적 사건입니다.'
    }
  },
  {
    id: 5,
    title: '남로당 사건',
    period: '1946-1950',
    description: '남조선노동당 관련 숙청과 탄압 사건들',
    image: 'https://readdy.ai/api/search-image?query=Korean%20political%20party%20documents%20and%20meeting%20rooms%20from%201940s%2C%20historical%20black%20and%20white%20photography%2C%20serious%20political%20atmosphere%20with%20papers%20and%20official%20settings&width=400&height=300&seq=namlodang&orientation=landscape',
    details: {
      background: '해방 후 남한에서 활동한 남조선노동당과 관련된 일련의 사건들로, 좌익 활동가들에 대한 검거와 탄압이 이루어졌습니다.',
      keyEvents: [
        '1946년 남조선노동당 결성',
        '1946년 9월 총파업과 10월 항쟁',
        '1948년 남로당 지하조직화',
        '1949년 남로당 간부 대량 검거',
        '1950년 보도연맹 사건 발생',
        '1950년 한국전쟁 중 예비검속'
      ],
      significance: '분단 초기 이념 대립의 양상을 보여주는 사건으로, 좌우 갈등과 반공 체제 구축 과정을 나타냅니다.'
    }
  },
  {
    id: 6,
    title: '경기동부연합 사건',
    period: '1946년',
    description: '경기도 동부 지역에서 발생한 좌익 활동 사건',
    image: 'https://readdy.ai/api/search-image?query=Gyeonggi%20Province%20eastern%20region%201946%20rural%20landscape%20with%20traditional%20Korean%20houses%2C%20historical%20documentation%20style%2C%20peaceful%20countryside%20with%20mountains%20in%20background&width=400&height=300&seq=gyeonggi-east&orientation=landscape',
    details: {
      background: '1946년 경기도 동부 지역에서 좌익 세력이 조직한 지하 활동과 이에 대한 당국의 수사 및 탄압 사건입니다.',
      keyEvents: [
        '1946년 좌익 조직 결성',
        '1946년 지하 활동 전개',
        '1946년 당국 수사 개시',
        '1946년 관련자 대량 검거',
        '1947년 재판 과정',
        '1947년 형량 선고'
      ],
      significance: '해방 직후 좌우 대립 상황에서 지방 차원의 이념 갈등을 보여주는 사례로, 분단 체제 형성 과정의 일면을 나타냅니다.'
    }
  },
  {
    id: 7,
    title: '한국전쟁',
    period: '1950-1953',
    description: '북한의 남침으로 시작된 3년간의 전쟁',
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%201950-1953%20memorial%20with%20UN%20flags%20and%20Korean%20War%20veterans%20monument%2C%20solemn%20military%20cemetery%20atmosphere%2C%20respectful%20historical%20commemoration&width=400&height=300&seq=korean-war&orientation=landscape',
    details: {
      background: '1950년 6월 25일 북한군이 38선을 넘어 남침하면서 시작된 전쟁으로, 유엔군과 중국군이 개입하여 국제전화되었습니다.',
      keyEvents: [
        '1950년 6월 25일 북한 남침',
        '1950년 9월 15일 인천상륙작전',
        '1950년 10월 중국군 개입',
        '1951년 1월 1.4 후퇴',
        '1951년 7월 휴전회담 시작',
        '1953년 7월 27일 휴전협정 체결'
      ],
      significance: '분단이 고착화되고 남북이 적대관계로 발전하게 된 결정적 사건으로, 현재까지 지속되는 분단 구조의 토대가 되었습니다.'
    }
  },
  {
    id: 8,
    title: '4.19 혁명',
    period: '1960년 4월',
    description: '학생들이 주도한 민주화 운동으로 이승만 정부 퇴진',
    image: 'https://readdy.ai/api/search-image?query=April%2019%201960%20Korean%20student%20revolution%20with%20protesters%20and%20Korean%20flags%2C%20historical%20black%20and%20white%20photography%2C%20students%20marching%20for%20democracy%20in%20Seoul%20streets&width=400&height=300&seq=april-19&orientation=landscape',
    details: {
      background: '1960년 3.15 부정선거에 항의하여 일어난 학생 주도의 시위가 전국으로 확산되면서 이승만 정부가 퇴진하게 된 민주화 운동입니다.',
      keyEvents: [
        '1960년 3월 15일 3.15 부정선거',
        '1960년 4월 11일 김주열 시신 발견',
        '1960년 4월 18일 고려대 시위',
        '1960년 4월 19일 전국적 시위',
        '1960년 4월 26일 이승만 하야 성명',
        '1960년 5월 29일 이승만 하와이 망명'
      ],
      significance: '한국 민주주의 발전사에서 최초로 민중의 힘으로 독재정권을 무너뜨린 사건으로, 이후 민주화 운동의 출발점이 되었습니다.'
    }
  },
  {
    id: 9,
    title: '5.16 군사정변',
    period: '1961년 5월',
    description: '박정희를 중심으로 한 군사 쿠데타',
    image: 'https://readdy.ai/api/search-image?query=Korean%20military%20coup%201961%20government%20buildings%20and%20military%20vehicles%2C%20historical%20documentation%20style%2C%20serious%20governmental%20transition%20atmosphere%20in%20Seoul&width=400&height=300&seq=may-16-coup&orientation=landscape',
    details: {
      background: '1961년 5월 16일 박정희 소장을 중심으로 한 군부 세력이 제2공화국 정부를 무너뜨리고 군사정권을 수립한 쿠데타입니다.',
      keyEvents: [
        '1961년 5월 16일 새벽 군사정변',
        '1961년 5월 16일 한강교 점령',
        '1961년 5월 16일 중앙청과 방송국 장악',
        '1961년 5월 18일 국가재건최고회의 구성',
        '1961년 7월 혁명공약 발표',
        '1963년 제3공화국 출범'
      ],
      significance: '이후 18년간 지속된 군사정권의 시작점으로, 경제발전과 함께 권위주의 체제가 구축된 전환점이 되었습니다.'
    }
  },
  {
    id: 10,
    title: '6월 민주항쟁',
    period: '1987년 6월',
    description: '군사정권에 맞선 시민들의 대규모 민주화 운동',
    image: 'https://readdy.ai/api/search-image?query=June%201987%20Korean%20democracy%20movement%20with%20massive%20crowds%20and%20protesters%2C%20citizens%20demanding%20democracy%2C%20historical%20photography%20of%20Seoul%20streets%20filled%20with%20demonstrators&width=400&height=300&seq=june-uprising&orientation=landscape',
    details: {
      background: '1987년 6월 전두환 정권의 호헌조치에 반대하여 일어난 전국적 민주화 운동으로, 직선제 개헌을 이끌어낸 시민혁명입니다.',
      keyEvents: [
        '1987년 4월 13일 호헌조치 발표',
        '1987년 6월 10일 국민대회',
        '1987년 6월 18일 최루탄 추방대회',
        '1987년 6월 26일 평화대행진',
        '1987년 6월 29일 6.29 선언',
        '1987년 10월 직선제 개헌'
      ],
      significance: '한국 민주주의의 결정적 전환점으로, 시민사회의 성장과 민주적 정치 체제 확립의 토대가 되었습니다.'
    }
  },
  {
    id: 11,
    title: 'IMF 외환위기',
    period: '1997-2001',
    description: '외환보유고 부족으로 발생한 경제위기',
    image: 'https://readdy.ai/api/search-image?query=Korean%20IMF%20economic%20crisis%201997%20with%20Bank%20of%20Korea%20building%20and%20financial%20district%2C%20economic%20hardship%20atmosphere%2C%20historical%20documentation%20of%20financial%20crisis%20period&width=400&height=300&seq=imf-crisis&orientation=landscape',
    details: {
      background: '1997년 외환보유고 부족으로 시작된 경제위기로 IMF에 구제금융을 요청하게 되면서 한국 경제가 큰 변화를 겪은 사건입니다.',
      keyEvents: [
        '1997년 11월 21일 IMF 구제금융 요청',
        '1997년 12월 3일 IMF 협정 체결',
        '1998년 2월 25일 김대중 정부 출범',
        '1999년 경제 회복 신호',
        '2000년 경제성장률 회복',
        '2001년 8월 IMF 관리체제 조기 졸업'
      ],
      significance: '한국 경제의 구조적 변화를 가져온 사건으로, 금융시장 개방과 기업 구조조정을 통해 경제체질을 강화하는 계기가 되었습니다.'
    }
  }
];

const historicalFigures = [
  {
    id: 1,
    name: '김구',
    period: '1876-1949',
    position: '임시정부 주석',
    image: 'https://readdy.ai/api/search-image?query=Kim%20Gu%20Korean%20independence%20leader%20in%20traditional%20Korean%20attire%2C%20dignified%20historical%20portrait%20from%201940s%2C%20patriotic%20leader%20against%20neutral%20background&width=200&height=250&seq=kim-gu&orientation=portrait',
    party: '한국독립당',
    achievements: [
      '대한민국 임시정부 주석',
      '한인애국단 조직',
      '이봉창, 윤봉길 의거 기획',
      '광복군 창설'
    ],
    violations: [],
    description: '일제강점기 독립운동가이자 정치가로 대한민국 임시정부를 이끌었습니다.',
    fullProfile: {
      fullName: '김구 (金九)',
      birth: '1876년 8월 29일',
      death: '1949년 6월 26일',
      education: ['동학 접주', '한학 수학'],
      career: [
        '1896년 동학농민운동 참여',
        '1919년 임시정부 내무총장',
        '1926년 한인애국단 조직',
        '1940년 광복군 창설',
        '1945년 환국'
      ],
      ideology: '완전한 독립국가 건설과 통일된 민족국가 수립을 지향했습니다.',
      criminalRecord: []
    }
  },
  {
    id: 2,
    name: '여운형',
    period: '1886-1947',
    position: '정치가',
    image: 'https://readdy.ai/api/search-image?query=Yeo%20Un-hyeong%20Korean%20politician%20in%20western%20suit%2C%20historical%20portrait%20from%201940s%2C%20moderate%20political%20leader%20with%20dignified%20expression&width=200&height=250&seq=yeo-unhyeong&orientation=portrait',
    party: '조선인민당',
    achievements: [
      '조선건국준비위원회 위원장',
      '조선인민공화국 부주석',
      '좌우합작운동 주도',
      '통일정부 수립 노력'
    ],
    violations: [],
    description: '해방 후 좌우합작을 통한 통일정부 수립을 추진한 중도파 정치가입니다.',
    fullProfile: {
      fullName: '여운형 (呂運亨)',
      birth: '1886년 5월 25일',
      death: '1947년 7월 19일 (암살)',
      education: ['배재학당', '중국 난징 진링대학'],
      career: [
        '1918년 신한청년당 조직',
        '1944년 건국동맹 결성',
        '1945년 조선건국준비위원회 위원장',
        '1946년 좌우합작위원회 활동'
      ],
      ideology: '좌우합작을 통한 통일민족국가 건설을 추구했습니다.',
      criminalRecord: []
    }
  },
  {
    id: 3,
    name: '김일성',
    period: '1912-1994',
    position: '북한 최고지도자',
    image: 'https://readdy.ai/api/search-image?query=Historical%20portrait%20of%20North%20Korean%20leader%20in%20military%20uniform%2C%201950s%20official%20government%20photography%20style%2C%20serious%20expression%20against%20neutral%20background&width=200&height=250&seq=nk-leader&orientation=portrait',
    party: '조선로동당',
    achievements: [
      '항일무장투쟁 참여',
      '조선민주주의인민공화국 수립',
      '북한 사회주의 체제 구축'
    ],
    violations: [
      '한국전쟁 도발 (1950)',
      '김일성 유일지배체제 구축',
      '정치범수용소 운영',
      '인권 탄압'
    ],
    description: '북한을 건국하고 분단을 고착화시킨 북한의 최고지도자입니다.',
    fullProfile: {
      fullName: '김일성 (金日成, 본명: 김성주)',
      birth: '1912년 4월 15일',
      death: '1994년 7월 8일',
      education: ['만주 길림 육문중학교'],
      career: [
        '1930년대 항일무장투쟁',
        '1945년 소련군과 함께 귀국',
        '1948년 조선민주주의인민공화국 수립',
        '1950년 한국전쟁 도발',
        '1994년 사망까지 최고지도자'
      ],
      ideology: '주체사상을 바탕으로 한 사회주의 체제와 유일지배체제를 구축했습니다.',
      criminalRecord: [
        '한국전쟁 도발로 인한 대량 살상',
        '정치적 숙청과 인권 탄압',
        '개인숭배 체제 구축',
        '국제법 위반 행위들'
      ]
    }
  },
  {
    id: 4,
    name: '박헌영',
    period: '1900-1955',
    position: '남조선노동당 위원장',
    image: 'https://readdy.ai/api/search-image?query=Park%20Heon-yeong%20Korean%20communist%20leader%20in%20dark%20suit%2C%20serious%20political%20portrait%20from%201940s%2C%20historical%20documentation%20style&width=200&height=250&seq=park-heonyeong&orientation=portrait',
    party: '남조선노동당',
    achievements: [
      '조선공산당 재건',
      '남조선노동당 조직',
      '항일독립운동 참여'
    ],
    violations: [
      '국가보안법 위반',
      '좌익 활동으로 수배',
      '북한으로 월북'
    ],
    description: '해방 후 남한에서 공산당을 조직했으나 북한으로 월북한 좌익 정치가입니다.',
    fullProfile: {
      fullName: '박헌영 (朴憲永)',
      birth: '1900년 5월 28일',
      death: '1955년 12월 18일 (처형)',
      education: ['경성고등보통학교'],
      career: [
        '1921년 조선공산당 창당',
        '1945년 조선공산당 재건',
        '1946년 남조선노동당 위원장',
        '1948년 북한으로 월북',
        '1955년 숙청으로 처형'
      ],
      ideology: '마르크스-레닌주의를 바탕으로 한 공산주의 혁명을 추구했습니다.',
      criminalRecord: [
        '국가보안법 위반 (좌익 활동)',
        '불법 정치조직 운영',
        '체제 전복 시도'
      ]
    }
  },
  {
    id: 5,
    name: '조봉암',
    period: '1898-1959',
    position: '진보당 위원장',
    image: 'https://readdy.ai/api/search-image?query=Cho%20Bong-am%20Korean%20progressive%20politician%20in%20formal%20suit%2C%20thoughtful%20expression%2C%20historical%20portrait%20from%201950s%20political%20leader&width=200&height=250&seq=cho-bongam&orientation=portrait',
    party: '진보당',
    achievements: [
      '농림부 장관 역임',
      '진보당 창당',
      '평화통일론 주창',
      '토지개혁 추진'
    ],
    violations: [
      '국가보안법 위반 (1958)',
      '간첩죄 및 내란죄 (억울한 누명)',
      '사형 선고 및 집행 (1959)'
    ],
    description: '평화통일을 주장했으나 간첩 혐의로 처형당한 진보 정치가입니다.',
    fullProfile: {
      fullName: '조봉암 (曺奉岩)',
      birth: '1898년 8월 25일',
      death: '1959년 7월 31일 (처형)',
      education: ['일본 메이지대학 법학부'],
      career: [
        '1920년대 사회주의 운동',
        '1948년 농림부 장관',
        '1952년 대통령 선거 출마',
        '1956년 제3대 대통령 선거 차점',
        '1958년 진보당 사건으로 체포'
      ],
      ideology: '평화통일과 민주사회주의를 지향했습니다.',
      criminalRecord: [
        '국가보안법 위반 (1958년, 정치적 탄압으로 평가)',
        '간첩죄 및 내란죄 (억울한 누명, 2011년 재심에서 무죄)',
        '사형 선고 및 집행 (1959년, 후에 억울한 죽음으로 판명)'
      ]
    }
  }
];

export default function KoreanHistory() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [selectedFigure, setSelectedFigure] = useState<any>(null);
  const [activeSection, setActiveSection] = useState('korean-history');
  const [activeTab, setActiveTab] = useState<'events' | 'figures'>('events');

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedEvent(null);
      setSelectedFigure(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <Navigation onSectionChange={setActiveSection} activeSection={activeSection} />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-20 border-b border-slate-800">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-blue-600 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-2xl">
                <span className="text-white font-bold text-2xl">📚</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                대한민국 역사
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              해방 이후부터 현재까지 대한민국의 주요 역사적 사건들과 
              그 시대를 살아간 인물들의 이야기를 살펴보세요
            </p>
          </div>
        </div>

        <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="flex justify-center mb-12">
              <div className="flex bg-slate-800 rounded-xl p-2 shadow-xl">
                <button
                  onClick={() => setActiveTab('events')}
                  className={`px-8 py-3 rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                    activeTab === 'events'
                      ? 'bg-slate-600 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <i className="ri-history-line mr-2"></i>
                  역사적 사건
                </button>
                <button
                  onClick={() => setActiveTab('figures')}
                  className={`px-8 py-3 rounded-lg transition-all duration-300 whitespace-nowrap font-medium ${
                    activeTab === 'figures'
                      ? 'bg-slate-600 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <i className="ri-user-star-line mr-2"></i>
                  역사 인물
                </button>
              </div>
            </div>

            {activeTab === 'events' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {historicalEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-700 cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {event.period}
                        </span>
                      </div>

                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <button className="w-full bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap">
                        <i className="ri-information-line mr-2"></i>
                        상세 정보 보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'figures' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {historicalFigures.map((figure) => (
                  <div 
                    key={figure.id} 
                    className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-700 cursor-pointer"
                    onClick={() => setSelectedFigure(figure)}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={figure.image}
                        alt={figure.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{figure.name}</h3>
                        <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-medium">
                            {figure.period}
                          </span>
                        </div>
                        <p className="text-sm text-blue-400 font-medium mb-2">{figure.position}</p>
                        <p className="text-xs text-slate-400">{figure.party}</p>
                      </div>

                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                        {figure.description}
                      </p>

                      {figure.violations.length > 0 && (
                        <div className="mb-4">
                          <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                            국가보안법 관련
                          </span>
                        </div>
                      )}

                      <button className="w-full bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap">
                        <i className="ri-user-line mr-2"></i>
                        프로필 보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* 역사적 사건 상세 모달 */}
      {selectedEvent && (
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
              <h2 className="text-2xl font-bold text-white">{selectedEvent.title}</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="mt-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {selectedEvent.period}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">사건 배경</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {selectedEvent.details.background}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">주요 경과</h3>
                  <div className="space-y-2">
                    {selectedEvent.details.keyEvents.map((event: string, index: number) => (
                      <div key={index} className="flex items-center text-slate-300">
                        <i className="ri-calendar-event-line text-blue-400 mr-3"></i>
                        {event}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">역사적 의의</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedEvent.details.significance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 역사 인물 상세 모달 */}
      {selectedFigure && (
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
              <h2 className="text-2xl font-bold text-white">{selectedFigure.name} 프로필</h2>
              <button
                onClick={() => setSelectedFigure(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <img
                    src={selectedFigure.image}
                    alt={selectedFigure.name}
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">기본 정보</h3>
                      <div className="space-y-1 text-slate-300">
                        <p><span className="text-white">본명:</span> {selectedFigure.fullProfile.fullName}</p>
                        <p><span className="text-white">생몰년:</span> {selectedFigure.fullProfile.birth} - {selectedFigure.fullProfile.death}</p>
                        <p><span className="text-white">주요 직책:</span> {selectedFigure.position}</p>
                        <p><span className="text-white">소속 정당:</span> {selectedFigure.party}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">학력</h3>
                      <ul className="space-y-1 text-slate-300">
                        {selectedFigure.fullProfile.education?.map((edu: string, index: number) => (
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
                        {selectedFigure.fullProfile.career?.map((career: string, index: number) => (
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
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">주요 업적</h3>
                  <ul className="space-y-2">
                    {selectedFigure.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start text-slate-300">
                        <i className="ri-check-line text-green-400 mr-2 mt-1"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">정치 철학</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedFigure.fullProfile.ideology}
                  </p>
                </div>

                {selectedFigure.fullProfile.criminalRecord && selectedFigure.fullProfile.criminalRecord.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-3">
                      <i className="ri-alert-line mr-2"></i>
                      국가보안법 및 범죄 이력
                    </h3>
                    <ul className="space-y-2">
                      {selectedFigure.fullProfile.criminalRecord.map((record: string, index: number) => (
                        <li key={index} className="flex items-start text-red-300">
                          <i className="ri-error-warning-line text-red-400 mr-2 mt-1"></i>
                          {record}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedFigure(null)}
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
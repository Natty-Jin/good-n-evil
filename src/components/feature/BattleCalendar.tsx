
import React, { useState } from 'react';

interface Battle {
  name: string;
  date: string;
  location: string;
  coordinates: { lat: number; lng: number };
  description: string;
  casualties: {
    un: number;
    communist: number;
  };
  significance: string;
  image: string;
  result: string;
  allies: string[];
  enemies: string[];
}

const battleData: { [key: string]: Battle[] } = {
  '1950-06': [
    {
      name: '개성·문산 전투',
      date: '1950-06-25',
      location: '개성, 문산',
      coordinates: { lat: 37.9756, lng: 126.5559 },
      description: '6.25 전쟁의 시작을 알린 첫 번째 주요 전투. 북한군의 기습 남침으로 시작되었다.',
      casualties: { un: 1200, communist: 800 },
      significance: '전쟁의 시발점이 된 역사적 전투',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20first%20battle%20at%20Kaesong%20and%20Munsan%2C%20historical%20black%20and%20white%20photograph%20from%20June%2025%201950%2C%20North%20Korean%20invasion%20scene%2C%20military%20conflict%20beginning&width=400&height=300&seq=kaesong-battle&orientation=landscape',
      result: '패배',
      allies: ['국군 제1사단', '국군 제7사단'],
      enemies: ['북한군 제1군단', '북한군 제6사단']
    },
    {
      name: '춘천 전투',
      date: '1950-06-25',
      location: '춘천',
      coordinates: { lat: 37.8813, lng: 127.7298 },
      description: '국군 제6사단이 북한군 제2군단과 벌인 치열한 방어전투.',
      casualties: { un: 2100, communist: 3200 },
      significance: '초기 방어선 구축의 핵심 전투',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Chuncheon%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20June%201950%2C%20South%20Korean%206th%20Division%20defense%20battle%2C%20mountain%20warfare%20scene&width=400&height=300&seq=chuncheon-battle&orientation=landscape',
      result: '승리',
      allies: ['국군 제6사단', '국군 제2연대'],
      enemies: ['북한군 제2군단', '북한군 제12사단']
    },
    {
      name: '의정부 전투',
      date: '1950-06-26',
      location: '의정부',
      coordinates: { lat: 37.7381, lng: 127.0473 },
      description: '서울 북방의 주요 방어거점에서 벌어진 격전.',
      casualties: { un: 1800, communist: 2400 },
      significance: '서울 방어의 마지막 보루',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Uijeongbu%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20June%201950%2C%20Seoul%20northern%20defense%20line%2C%20military%20fortification%20battle&width=400&height=300&seq=uijeongbu-battle&orientation=landscape',
      result: '패배',
      allies: ['국군 제7사단', '국군 제3연대'],
      enemies: ['북한군 제3사단', '북한군 제4사단']
    }
  ],
  '1950-07': [
    {
      name: '오산 전투',
      date: '1950-07-05',
      location: '오산',
      coordinates: { lat: 37.157, lng: 127.0776 },
      description: '미군이 처음으로 참전한 전투. 스미스 특수임무부대가 투입되었다.',
      casualties: { un: 180, communist: 42 },
      significance: '미군의 첫 참전 전투',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Osan%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20July%201950%2C%20first%20US%20military%20engagement%2C%20Task%20Force%20Smith%20battle%20scene&width=400&height=300&seq=osan-battle&orientation=landscape',
      result: '패배',
      allies: ['미군 스미스 특수임무부대', '미군 제24사단'],
      enemies: ['북한군 제4사단', '북한군 제105전차여단']
    },
    {
      name: '대전 전투',
      date: '1950-07-20',
      location: '대전',
      coordinates: { lat: 36.3504, lng: 127.3845 },
      description: '딘 소장이 실종된 비극적인 전투. 대전 방어선이 무너졌다.',
      casualties: { un: 3100, communist: 1800 },
      significance: '초기 방어선 붕괴의 상징',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Daejeon%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20July%201950%2C%20General%20Dean%20missing%20battle%2C%20defense%20line%20collapse%20scene&width=400&height=300&seq=daejeon-battle&orientation=landscape',
      result: '패배',
      allies: ['미군 제24사단', '국군 제1사단'],
      enemies: ['북한군 제3사단', '북한군 제4사단']
    }
  ],
  '1950-08': [
    {
      name: '낙동강 방어선 전투',
      date: '1950-08-01',
      location: '낙동강 일대',
      coordinates: { lat: 35.8714, lng: 128.6014 },
      description: '최후의 방어선에서 벌어진 생사를 건 결전.',
      casualties: { un: 8900, communist: 12400 },
      significance: '전세 역전의 발판이 된 방어전',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Nakdong%20River%20defense%20line%2C%20historical%20black%20and%20white%20photograph%20from%20August%201950%2C%20last%20defense%20line%20battle%2C%20river%20crossing%20warfare&width=400&height=300&seq=nakdong-battle&orientation=landscape',
      result: '승리',
      allies: ['미군 제8군', '국군 제1군단', '영국군 제27여단'],
      enemies: ['북한군 제1군단', '북한군 제2군단']
    },
    {
      name: '다부동 전투',
      date: '1950-08-03',
      location: '다부동',
      coordinates: { lat: 36.0322, lng: 128.4294 },
      description: '국군 제1사단의 영웅적인 방어전투.',
      casualties: { un: 2800, communist: 4200 },
      significance: '불굴의 의지를 보여준 방어전',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Dabudong%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20August%201950%2C%20ROK%201st%20Division%20heroic%20defense%2C%20mountain%20defense%20battle&width=400&height=300&seq=dabudong-battle&orientation=landscape',
      result: '승리',
      allies: ['국군 제1사단', '국군 제11연대'],
      enemies: ['북한군 제13사단', '북한군 제1사단']
    }
  ],
  '1950-09': [
    {
      name: '인천 상륙 작전',
      date: '1950-09-15',
      location: '인천',
      coordinates: { lat: 37.4563, lng: 126.7052 },
      description: '맥아더의 기습 상륙작전으로 전세를 역전시킨 결정적 작전.',
      casualties: { un: 536, communist: 1350 },
      significance: '전쟁 양상을 바꾼 역사적 작전',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Incheon%20Landing%20Operation%2C%20historical%20black%20and%20white%20photograph%20from%20September%201950%2C%20MacArthur%20amphibious%20assault%2C%20decisive%20military%20operation&width=400&height=300&seq=incheon-landing&orientation=landscape',
      result: '승리',
      allies: ['미군 제10군단', '미 해병 제1사단', '국군 해병대'],
      enemies: ['북한군 제18사단', '북한군 제226연대']
    },
    {
      name: '서울 수복 전투',
      date: '1950-09-28',
      location: '서울',
      coordinates: { lat: 37.5665, lng: 126.978 },
      description: '3개월 만에 서울을 되찾은 감격적인 전투.',
      casualties: { un: 3200, communist: 5800 },
      significance: '수도 탈환의 역사적 순간',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Seoul%20recapture%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20September%201950%2C%20capital%20liberation%20scene%2C%20victorious%20military%20parade&width=400&height=300&seq=seoul-recapture&orientation=landscape',
      result: '승리',
      allies: ['미군 제1기병사단', '국군 제1사단', '미 해병 제1사단'],
      enemies: ['북한군 제18사단', '북한군 제25여단']
    }
  ],
  '1950-10': [
    {
      name: '평양 전투',
      date: '1950-10-19',
      location: '평양',
      coordinates: { lat: 39.0392, lng: 125.7625 },
      description: '북한의 수도를 점령한 역사적 전투.',
      casualties: { un: 1200, communist: 2800 },
      significance: '북진 통일의 꿈에 가장 근접한 순간',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Pyongyang%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20October%201950%2C%20North%20Korean%20capital%20occupation%2C%20unification%20dream%20moment&width=400&height=300&seq=pyongyang-battle&orientation=landscape',
      result: '승리',
      allies: ['미군 제1기병사단', '국군 제1사단', '영국군 제27여단'],
      enemies: ['북한군 제19사단', '북한군 제27사단']
    },
    {
      name: '온정리 전투',
      date: '1950-10-25',
      location: '온정리',
      coordinates: { lat: 40.1, lng: 124.9 },
      description: '중국군이 처음 개입한 전투. 전쟁 양상이 완전히 바뀌었다.',
      casualties: { un: 2100, communist: 1800 },
      significance: '중국군 개입의 시작점',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Onjong-ri%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20October%201950%2C%20first%20Chinese%20intervention%2C%20war%20situation%20change&width=400&height=300&seq=onjongri-battle&orientation=landscape',
      result: '패배',
      allies: ['국군 제1사단', '국군 제15연대'],
      enemies: ['중국군 제124사단', '중국군 제125사단']
    }
  ],
  '1950-11': [
    {
      name: '청천강 전투',
      date: '1950-11-25',
      location: '청천강',
      coordinates: { lat: 39.9042, lng: 125.2381 },
      description: '중국군 대규모 공세로 UN군이 대후퇴를 시작한 전투.',
      casualties: { un: 11000, communist: 8500 },
      significance: '전세 역전의 분수령',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Chongchon%20River%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20November%201950%2C%20Chinese%20massive%20offensive%2C%20UN%20forces%20retreat&width=400&height=300&seq=chongchon-battle&orientation=landscape',
      result: '패배',
      allies: ['미군 제8군', '터키 여단', '영국군 제27여단'],
      enemies: ['중국군 제38군', '중국군 제39군', '중국군 제40군']
    },
    {
      name: '장진호 전투',
      date: '1950-11-27',
      location: '장진호',
      coordinates: { lat: 40.4167, lng: 127.2167 },
      description: '혹독한 추위 속에서 벌어진 처절한 후퇴전.',
      casualties: { un: 4500, communist: 12000 },
      significance: '극한 상황에서의 생존 투쟁',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Chosin%20Reservoir%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20November%201950%2C%20harsh%20winter%20warfare%2C%20frozen%20battlefield%20survival&width=400&height=300&seq=chosin-battle&orientation=landscape',
      result: '전술적 후퇴',
      allies: ['미 해병 제1사단', '미군 제7사단', '영국 해병대'],
      enemies: ['중국군 제9병단', '중국군 제20군', '중국군 제27군']
    }
  ],
  '1951-01': [
    {
      name: '1·4 후퇴',
      date: '1951-01-04',
      location: '서울',
      coordinates: { lat: 37.5665, lng: 126.978 },
      description: '중국군의 공세로 다시 서울을 내준 비극적 후퇴.',
      casualties: { un: 5200, communist: 3800 },
      significance: '재점령당한 수도의 아픔',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20January%204th%20retreat%2C%20historical%20black%20and%20white%20photograph%20from%20January%201951%2C%20Seoul%20evacuation%2C%20tragic%20withdrawal%20scene&width=400&height=300&seq=jan4-retreat&orientation=landscape',
      result: '패배',
      allies: ['미군 제8군', '국군 제1군단', '영국군 제29여단'],
      enemies: ['중국군 제38군', '중국군 제39군', '북한군 제1군단']
    }
  ],
  '1951-02': [
    {
      name: '지평리 전투',
      date: '1951-02-13',
      location: '지평리',
      coordinates: { lat: 37.3, lng: 127.25 },
      description: '프랑스군과 미군이 중국군을 막아낸 영웅적 방어전.',
      casualties: { un: 1200, communist: 5000 },
      significance: '소수 정예의 승리',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Chipyong-ri%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20February%201951%2C%20French%20and%20US%20forces%20heroic%20defense%2C%20elite%20victory&width=400&height=300&seq=chipyongri-battle&orientation=landscape',
      result: '승리',
      allies: ['미군 제23연대', '프랑스 대대', '국군 제1사단'],
      enemies: ['중국군 제125사단', '중국군 제126사단']
    }
  ],
  '1951-04': [
    {
      name: '임진강 전투',
      date: '1951-04-22',
      location: '임진강',
      coordinates: { lat: 37.8, lng: 126.75 },
      description: '영국군 글로스터 연대의 장렬한 최후.',
      casualties: { un: 1091, communist: 3500 },
      significance: '용기와 희생의 상징',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Imjin%20River%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20April%201951%2C%20British%20Gloucester%20Regiment%20last%20stand%2C%20courage%20and%20sacrifice&width=400&height=300&seq=imjin-battle&orientation=landscape',
      result: '패배',
      allies: ['영국 글로스터 연대', '영국 제29여단', '국군 제1사단'],
      enemies: ['중국군 제63군', '중국군 제187사단', '중국군 제188사단']
    }
  ],
  '1951-05': [
    {
      name: '현리 전투',
      date: '1951-05-16',
      location: '현리',
      coordinates: { lat: 38.2, lng: 127.1 },
      description: '중국군 춘계공세를 막아낸 결정적 방어전.',
      casualties: { un: 2800, communist: 8200 },
      significance: '춘계공세 저지의 핵심',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Hyeonri%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20May%201951%2C%20Chinese%20spring%20offensive%20defense%2C%20decisive%20defensive%20battle&width=400&height=300&seq=hyeonri-battle&orientation=landscape',
      result: '승리',
      allies: ['미군 제2사단', '국군 제6사단', '터키 여단'],
      enemies: ['중국군 제20군', '중국군 제27군']
    }
  ],
  '1951-08': [
    {
      name: '피의 능선 전투',
      date: '1951-08-18',
      location: '피의 능선',
      coordinates: { lat: 38.3, lng: 127.9 },
      description: '고지 쟁탈을 위한 처절한 반복 공방전.',
      casualties: { un: 2700, communist: 15000 },
      significance: '고지전의 참혹함을 보여준 전투',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Bloody%20Ridge%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20August%201951%2C%20hill%20warfare%20brutality%2C%20repeated%20assault%20and%20defense&width=400&height=300&seq=bloody-ridge&orientation=landscape',
      result: '승리',
      allies: ['미군 제2사단', '국군 제5사단', '프랑스 대대'],
      enemies: ['북한군 제6사단', '북한군 제12사단']
    }
  ],
  '1951-09': [
    {
      name: '단장의 능선 전투',
      date: '1951-09-13',
      location: '단장의 능선',
      coordinates: { lat: 38.32, lng: 127.92 },
      description: '피의 능선에 이은 또 다른 고지 쟁탈전.',
      casualties: { un: 3700, communist: 25000 },
      significance: '고지전의 절정',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Heartbreak%20Ridge%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20September%201951%2C%20hill%20warfare%20climax%2C%20intense%20mountain%20combat&width=400&height=300&seq=heartbreak-ridge&orientation=landscape',
      result: '승리',
      allies: ['미군 제2사단', '국군 제8사단', '프랑스 대대'],
      enemies: ['북한군 제6사단', '북한군 제13사단']
    }
  ],
  '1952-10': [
    {
      name: '백마고지 전투',
      date: '1952-10-06',
      location: '철원',
      coordinates: { lat: 38.1467, lng: 127.3133 },
      description: '국군 제9사단의 영웅적인 고지 사수전.',
      casualties: { un: 3500, communist: 14000 },
      significance: '국군의 용맹을 세계에 알린 전투',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20White%20Horse%20Hill%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20October%201952%2C%20ROK%209th%20Division%20heroic%20defense%2C%20world-renowned%20courage&width=400&height=300&seq=white-horse-hill&orientation=landscape',
      result: '승리',
      allies: ['국군 제9사단', '국군 제28연대', '프랑스 대대'],
      enemies: ['중국군 제38군', '중국군 第112사단', '중국군 第114사단']
    },
    {
      name: '삼각고지 전투',
      date: '1952-10-14',
      location: '삼각고지',
      coordinates: { lat: 38.15, lng: 127.3 },
      description: '미군과 중국군 간의 치열한 고지 쟁탈전.',
      casualties: { un: 2200, communist: 9500 },
      significance: '고지전의 치열함을 보여준 대표적 전투',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Triangle%20Hill%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20October%201952%2C%20US-Chinese%20fierce%20hill%20warfare%2C%20intense%20mountain%20combat&width=400&height=300&seq=triangle-hill&orientation=landscape',
      result: '무승부',
      allies: ['미군 제7사단', '국군 제2사단', '콜롬비아 대대'],
      enemies: ['중국군 제15군', '중국군 第29사단', '중국군 第45사단']
    }
  ],
  '1953-06': [
    {
      name: '화살머리고지 전투',
      date: '1953-06-10',
      location: '화살머리고지',
      coordinates: { lat: 38.28, lng: 127.12 },
      description: '정전협정 직전 벌어진 마지막 대규모 전투.',
      casualties: { un: 4200, communist: 18000 },
      significance: '전쟁 마지막 대규모 전투',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Arrowhead%20Hill%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20June%201953%2C%20last%20major%20battle%20before%20armistice%2C%20final%20large-scale%20combat&width=400&height=300&seq=arrowhead-hill&orientation=landscape',
      result: '승리',
      allies: ['국군 제8사단', '국군 제21연대', '미군 제7사단'],
      enemies: ['중국군 제24군', '중국군 第70사단', '중국군 第72사단']
    }
  ],
  '1953-07': [
    {
      name: '금성 전투',
      date: '1953-07-13',
      location: '금성',
      coordinates: { lat: 38.45, lng: 127.48 },
      description: '정전협정 2주 전 벌어진 최후의 격전.',
      casualties: { un: 3800, communist: 12000 },
      significance: '전쟁의 마지막 불꽃',
      image: 'https://readdy.ai/api/search-image?query=Korean%20War%20Kumsong%20battle%2C%20historical%20black%20and%20white%20photograph%20from%20July%201953%2C%20final%20battle%20before%20armistice%2C%20last%20flames%20of%20war&width=400&height=300&seq=kumsong-battle&orientation=landscape',
      result: '패배',
      allies: ['국군 제2군단', '국군 제5사단', '미군 제3사단'],
      enemies: ['중국군 제23군', '중국군 第67사단', '중국군 第68사단']
    }
  ]
};

// 모든 전투 데이터를 하나의 배열로 변환
const battles: Battle[] = Object.values(battleData).flat();

interface BattleCalendarProps {
  onBattleSelect?: (coordinates: { lat: number; lng: number }) => void;
}

export default function BattleCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(6); // 6월부터 시작
  const [selectedYear, setSelectedYear] = useState(1950);
  const [selectedBattle, setSelectedBattle] = useState<any>(null);

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedBattle(null);
    }
  };

  // 해당 월의 전투들 필터링
  const getMonthBattles = (year: number, month: number) => {
    return battles.filter(battle => {
      const battleDate = new Date(battle.date);
      return battleDate.getFullYear() === year && battleDate.getMonth() + 1 === month;
    });
  };

  // 달력 생성
  const generateCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const calendar = [];

    // 빈 칸 추가 (이전 달)
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.push(null);
    }

    // 날짜 추가
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }

    return calendar;
  };

  const monthBattles = getMonthBattles(selectedYear, selectedMonth);
  const calendar = generateCalendar(selectedYear, selectedMonth);

  // 특정 날짜에 전투가 있는지 확인
  const getBattleForDate = (day: number) => {
    if (!day) return null;
    return monthBattles.find(battle => {
      const battleDate = new Date(battle.date);
      return battleDate.getDate() === day;
    });
  };

  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white">6.25 전쟁 전투 달력</h3>
        <div className="flex items-center space-x-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none pr-8"
          >
            <option value={1950}>1950년</option>
            <option value={1951}>1951년</option>
            <option value={1952}>1952년</option>
            <option value={1953}>1953년</option>
          </select>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-400 focus:outline-none pr-8"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}월
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 달력 헤더 */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
          <div key={day} className={`text-center py-3 font-semibold ${
            index === 0 ? 'text-red-400' : index === 6 ? 'text-blue-400' : 'text-slate-300'
          }`}>
            {day}
          </div>
        ))}
      </div>

      {/* 달력 본체 */}
      <div className="grid grid-cols-7 gap-2">
        {calendar.map((day, index) => {
          const battle = getBattleForDate(day);
          const isWeekend = index % 7 === 0 || index % 7 === 6;

          return (
            <div
              key={index}
              className={`aspect-square flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                day
                  ? battle
                    ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl hover:scale-105 border-2 border-red-400'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:scale-105'
                  : 'bg-transparent'
              } ${isWeekend && day ? 'text-red-300' : ''}`}
              onClick={() => battle && setSelectedBattle(battle)}
            >
              {day && (
                <>
                  <span className="text-sm font-medium">{day}</span>
                  {battle && (
                    <div className="mt-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* 범례 */}
      <div className="mt-6 flex items-center justify-center space-x-6">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gradient-to-br from-red-600 to-red-700 rounded mr-2"></div>
          <span className="text-slate-300 text-sm">전투 발생일</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-slate-700 rounded mr-2"></div>
          <span className="text-slate-300 text-sm">평상일</span>
        </div>
      </div>

      {/* 이번 달 전투 목록 */}
      {monthBattles.length > 0 && (
        <div className="mt-8 p-6 bg-slate-700/50 rounded-xl">
          <h4 className="text-lg font-semibold text-white mb-4">
            {selectedYear}년 {selectedMonth}월 주요 전투
          </h4>
          <div className="space-y-3">
            {monthBattles.map((battle, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-600/50 transition-colors cursor-pointer"
                onClick={() => setSelectedBattle(battle)}
              >
                <div>
                  <h5 className="font-medium text-white">{battle.name}</h5>
                  <p className="text-sm text-slate-400">{battle.date}</p>
                </div>
                <i className="ri-arrow-right-line text-slate-400"></i>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 전투 상세 모달 */}
      {selectedBattle && (
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
              <h2 className="text-2xl font-bold text-white">{selectedBattle.name}</h2>
              <button
                onClick={() => setSelectedBattle(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img
                    src={selectedBattle.image}
                    alt={selectedBattle.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">전투 정보</h3>
                      <div className="space-y-2 text-slate-300">
                        <p><span className="text-white">날짜:</span> {selectedBattle.date}</p>
                        <p><span className="text-white">장소:</span> {selectedBattle.location}</p>
                        <p><span className="text-white">결과:</span> 
                          <span className={`ml-2 px-2 py-1 rounded text-sm ${
                            selectedBattle.result === '승리' ? 'bg-green-600 text-white' :
                            selectedBattle.result === '패배' ? 'bg-red-600 text-white' :
                            'bg-yellow-600 text-white'
                          }`}>
                            {selectedBattle.result}
                          </span>
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">참전 부대</h3>
                      <div className="space-y-1">
                        <p className="text-green-400">
                          <i className="ri-shield-line mr-2"></i>
                          아군: {selectedBattle.allies.join(', ')}
                        </p>
                        <p className="text-red-400">
                          <i className="ri-sword-line mr-2"></i>
                          적군: {selectedBattle.enemies.join(', ')}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">피해 규모</h3>
                      <div className="space-y-1 text-slate-300">
                        <p><span className="text-green-400">UN군:</span> {selectedBattle.casualties.un.toLocaleString()}명</p>
                        <p><span className="text-red-400">공산군:</span> {selectedBattle.casualties.communist.toLocaleString()}명</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">전투 경과</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedBattle.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">역사적 의의</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedBattle.significance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const presidents = [
  {
    id: 1,
    name: '이승만',
    period: '1948-1960',
    party: '자유당',
    image: 'https://static.readdy.ai/image/e0f405f12785634a5e2b568af6eba14d/3252e9c70c05893c392b290e27b03e9c.jfif',
    achievements: [
      '대한민국 정부 수립',
      '한미상호방위조약 체결',
      '토지개혁 실시',
      '의무교육제 도입'
    ],
    description: '대한민국 건국의 아버지로 불리며, 자유민주주의 체제를 확립했습니다.',
    fullName: '이승만 (李承晩)',
    birth: '1875년 3월 26일',
    death: '1965년 7월 19일',
    education: ['조지 워싱턴 대학교 학사', '하버드 대학교 석사', '프린스턴 대학교 박사'],
    career: [
      '1919년 대한민국 임시정부 초대 대통령',
      '1948년 대한민국 초대 대통령',
      '1952년 제2대 대통령',
      '1956년 제3대 대통령'
    ],
    philosophy: '자유민주주의와 반공주의를 바탕으로 한 국가 건설을 추구했으며, 강력한 한미동맹을 통한 안보 확립을 중시했습니다.',
    closeAssociates: {
      executive: [
        { 
          name: '장면', 
          position: '국무총리', 
          period: '1950-1951',
          image: 'https://readdy.ai/api/search-image?query=Chang%20Myon%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=chang-myon&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/장면',
          details: {
            fullName: '장면 (張勉)',
            birth: '1899년 8월 28일',
            death: '1966년 6월 4일',
            education: '맨하탄 대학교 졸업',
            career: [
              '1948년 주미대사',
              '1950년 국무총리',
              '1960년 제2공화국 국무총리'
            ],
            achievements: [
              '한미외교관계 수립 기여',
              '민주주의 발전에 헌신',
              '교육 발전에 기여'
            ],
            personality: '온건하고 신중한 성격으로 외교에 뛰어난 능력을 보였으며, 민주주의 가치를 중시했습니다.'
          }
        },
        { 
          name: '백두진', 
          position: '내무부 장관', 
          period: '1948-1950',
          image: 'https://readdy.ai/api/search-image?query=Baek%20Du-jin%20Korean%20Minister%20of%20Interior%20in%20formal%20government%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=baek-dujin&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/백두진',
          details: {
            fullName: '백두진 (白斗鎭)',
            birth: '1896년 2월 15일',
            death: '1985년 12월 3일',
            education: '일본 와세다대학교 정치경제학부',
            career: [
              '1948년 내무부 장관',
              '1950년 국회의장',
              '1952년 부통령'
            ],
            achievements: [
              '정부 초기 행정체계 구축',
              '지방자치제도 기반 마련',
              '치안 체계 확립'
            ],
            personality: '강직하고 원칙적인 성격으로 행정 개혁에 앞장섰으며, 국가 기강 확립에 힘썼습니다.'
          }
        },
        { 
          name: '김병연', 
          position: '국방부 장관', 
          period: '1948-1949',
          image: 'https://readdy.ai/api/search-image?query=Kim%20Byeong-yeon%20Korean%20Defense%20Minister%20in%20formal%20military%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-byeongyeon&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/김병연',
          details: {
            fullName: '김병연 (金炳淵)',
            birth: '1887년 3월 10일',
            death: '1950년 7월 15일',
            education: '일본 육군사관학교',
            career: [
              '1945년 광복군 참모장',
              '1948년 초대 국방부 장관',
              '1949년 육군참모총장'
            ],
            achievements: [
              '국군 창설 주도',
              '군사 교육 체계 확립',
              '국방 정책 수립'
            ],
            personality: '군인 정신이 투철하고 국가 수호 의지가 강했으며, 국군 발전의 기초를 다졌습니다.'
          }
        },
        { 
          name: '조병옥', 
          position: '외무부 장관', 
          period: '1948-1951',
          image: 'https://readdy.ai/api/search-image?query=Cho%20Byeong-ok%20Korean%20Foreign%20Minister%20in%20formal%20diplomatic%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=cho-byeongok&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/조병옥',
          details: {
            fullName: '조병옥 (趙炳玉)',
            birth: '1894년 4월 21일',
            death: '1960년 2월 15일',
            education: '컬럼비아 대학교 정치학 박사',
            career: [
              '1946년 경무부장',
              '1948년 외무부 장관',
              '1959년 민주당 대통령 후보'
            ],
            achievements: [
              'UN 가입 추진',
              '한미관계 강화',
              '외교 기반 구축'
            ],
            personality: '지적이고 합리적인 성격으로 외교 정책에 뛰어났으며, 민주주의 발전에 기여했습니다.'
          }
        }
      ],
      judicial: [
        { 
          name: '김병로', 
          position: '초대 대법원장', 
          period: '1948-1957',
          image: 'https://readdy.ai/api/search-image?query=Kim%20Byeong-ro%20first%20Chief%20Justice%20of%20Korea%20in%20formal%20judicial%20robes%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=kim-byeongro&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/김병로',
          details: {
            fullName: '김병로 (金炳魯)',
            birth: '1887년 8월 15일',
            death: '1964년 1월 2일',
            education: '일본 메이지대학교 법학부',
            career: [
              '1920년대 변호사 활동',
              '1948년 초대 대법원장',
              '1957년 대법원장 퇴임'
            ],
            achievements: [
              '사법부 독립 확립',
              '법원 조직 체계화',
              '사법 제도 기반 구축'
            ],
            personality: '공정하고 원칙적인 성격으로 사법부의 독립성을 확립하는 데 크게 기여했습니다.'
          }
        },
        { 
          name: '이인', 
          position: '대법관', 
          period: '1948-1954',
          image: 'https://readdy.ai/api/search-image?query=Lee%20In%20Korean%20Supreme%20Court%20Justice%20in%20formal%20judicial%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=lee-in&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/이인',
          details: {
            fullName: '이인 (李仁)',
            birth: '1896년 5월 3일',
            death: '1979년 11월 12일',
            education: '경성제국대학교 법학부',
            career: [
              '1945년 변호사 개업',
              '1948년 대법관 임명',
              '1954년 대법관 퇴임'
            ],
            achievements: [
              '헌법 해석 기준 확립',
              '민사법 체계 정비',
              '법조계 발전 기여'
            ],
            personality: '학구적이고 신중한 성격으로 법리 연구에 깊이가 있었으며, 공정한 판결로 신뢰받았습니다.'
          }
        }
      ],
      legislative: [
        { 
          name: '신익희', 
          position: '국회의장', 
          period: '1948-1950',
          image: 'https://readdy.ai/api/search-image?query=Shin%20Ik-hee%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=shin-ikhee&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/신익희',
          details: {
            fullName: '신익희 (申翼熙)',
            birth: '1894년 11월 11일',
            death: '1956년 5월 5일',
            education: '와세다대학교 정치경제학부',
            career: [
              '1919년 3.1운동 참여',
              '1948년 초대 국회의장',
              '1956년 대통령 후보'
            ],
            achievements: [
              '국회 운영 기반 확립',
              '의회 민주주의 정착',
              '헌법 제정 기여'
            ],
            personality: '민주적이고 포용적인 성격으로 국회 운영을 원활히 했으며, 정치적 중재 능력이 뛰어났습니다.'
          }
        },
        { 
          name: '김성수', 
          position: '부의장', 
          period: '1948-1950',
          image: 'https://readdy.ai/api/search-image?query=Kim%20Seong-su%20Korean%20National%20Assembly%20Vice%20Speaker%20in%20formal%20parliamentary%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-seongsu&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/김성수',
          details: {
            fullName: '김성수 (金性洙)',
            birth: '1891년 10월 11일',
            death: '1955년 2월 18일',
            education: '와세다대학교 정치경제학부',
            career: [
              '1920년 동아일보 창간',
              '1948년 국회 부의장',
              '1950년 부통령'
            ],
            achievements: [
              '언론 발전 기여',
              '교육 사업 추진',
              '민족 계몽 운동'
            ],
            personality: '개혁적이고 진취적인 성격으로 언론과 교육 발전에 크게 기여했으며, 민족 의식이 투철했습니다.'
          }
        }
      ]
    }
  },
  {
    id: 2,
    name: '박정희',
    period: '1963-1979',
    party: '민주공화당',
    image: 'https://readdy.ai/api/search-image?query=President%20Park%20Chung-hee%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201960s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=250&height=300&seq=park-president&orientation=portrait',
    achievements: [
      '한강의 기적 달성',
      '경부고속도로 건설',
      '포항제철소 건설',
      '새마을운동 전개'
    ],
    description: '경제개발 5개년 계획을 통해 대한민국을 공업국가로 변모시켰습니다.',
    fullName: '박정희 (朴正熙)',
    birth: '1917년 11월 14일',
    death: '1979년 10월 26일',
    education: ['대구사범학교', '만주군관학교', '육군사관학교 8기'],
    career: [
      '1961년 5.16 군사정변 주도',
      '1963년 제5대 대통령',
      '1967년 제6대 대통령',
      '1971년 제7대 대통령',
      '1972년 제8대 대통령'
    ],
    philosophy: '조국 근대화를 통한 경제발전과 안보 확립을 최우선으로 하는 개발독재 노선을 추구했습니다.',
    closeAssociates: {
      executive: [
        { 
          name: '김종필', 
          position: '국무총리', 
          period: '1971-1975',
          image: 'https://readdy.ai/api/search-image?query=Kim%20Jong-pil%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%201970s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-jongpil&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/김종필',
          details: {
            fullName: '김종필 (金鍾泌)',
            birth: '1926년 1월 7일',
            death: '2018년 6월 23일',
            education: '육군사관학교 8기',
            career: [
              '1961년 5.16 군사정변 주도',
              '1963년 민주공화당 창당',
              '1971년 국무총리'
            ],
            achievements: [
              'KCIA 창설',
              '한일국교정상화 추진',
              '경제개발 정책 수립'
            ],
            personality: '정치적 감각이 뛰어나고 추진력이 강했으며, 실용주의적 사고를 가졌습니다.'
          }
        },
        { 
          name: '이후락', 
          position: 'KCIA 부장', 
          period: '1970-1973',
          image: 'https://readdy.ai/api/search-image?query=Lee%20Hu-rak%20Korean%20intelligence%20chief%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%201970s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=lee-hurak&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/이후락',
          details: {
            fullName: '이후락 (李厚洛)',
            birth: '1924년 6월 26일',
            death: '2009년 11월 14일',
            education: '서울대학교 법학과',
            career: [
              '1961년 KCIA 창설 참여',
              '1970년 KCIA 부장',
              '1972년 7.4 남북공동성명 주도'
            ],
            achievements: [
              '남북대화 추진',
              '정보기관 체계화',
              '국가안보 정책 수립'
            ],
            personality: '신중하고 치밀한 성격으로 정보 업무에 뛰어났으며, 대북 정책에 전문성을 보였습니다.'
          }
        }
      ],
      judicial: [
        { 
          name: '양승태', 
          position: '대법원장', 
          period: '1973-1981',
          image: 'https://readdy.ai/api/search-image?query=Yang%20Seung-tae%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%201970s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=yang-seungtae&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/양승태',
          details: {
            fullName: '양승태 (梁承泰)',
            birth: '1920년 3월 15일',
            death: '1996년 8월 22일',
            education: '경성제국대학교 법학부',
            career: [
              '1945년 판사 임용',
              '1973년 대법원장 취임',
              '1981년 대법원장 퇴임'
            ],
            achievements: [
              '사법 행정 개혁',
              '법원 조직 현대화',
              '사법 제도 발전'
            ],
            personality: '엄정하고 공정한 성격으로 사법부의 권위를 확립했으며, 법치주의 정착에 기여했습니다.'
          }
        }
      ],
      legislative: [
        { 
          name: '백두진', 
          position: '국회의장', 
          period: '1967-1971',
          image: 'https://readdy.ai/api/search-image?query=Baek%20Du-jin%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%201970s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=baek-dujin-2&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/백두진',
          details: {
            fullName: '백두진 (白斗鎭)',
            birth: '1896년 2월 15일',
            death: '1985년 12월 3일',
            education: '일본 와세다대학교 정치경제학부',
            career: [
              '1948년 내무부 장관',
              '1952년 부통령',
              '1967년 국회의장'
            ],
            achievements: [
              '국회 운영 안정화',
              '의회 제도 발전',
              '정치 발전 기여'
            ],
            personality: '경험이 풍부하고 원로 정치인으로서 국회 운영에 안정감을 제공했습니다.'
          }
        }
      ]
    }
  },
  {
    id: 3,
    name: '전두환',
    period: '1980-1988',
    party: '민주정의당',
    image: 'https://readdy.ai/api/search-image?query=President%20Chun%20Doo-hwan%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%201980s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=250&height=300&seq=chun-president&orientation=portrait',
    achievements: [
      '88 서울올림픽 유치',
      '물가안정 정책',
      '3저 호황 달성',
      '아시안게임 개최'
    ],
    description: '1988년 서울올림픽을 성공적으로 유치하여 국제적 위상을 높였습니다.',
    fullName: '전두환 (全斗煥)',
    birth: '1931년 1월 18일',
    death: '2021년 11월 23일',
    education: ['육군사관학교 11기', '미국 특수전학교'],
    career: [
      '1979년 12.12 사태 주도',
      '1980년 제11대 대통령',
      '1981년 제12대 대통령'
    ],
    philosophy: '안정과 발전을 통한 국가 발전을 추구했으며, 스포츠 외교를 통한 국가 위상 제고에 힘썼습니다.',
    closeAssociates: {
      executive: [
        { 
          name: '노신영', 
          position: '국무총리', 
          period: '1982-1983',
          image: 'https://readdy.ai/api/search-image?query=Roh%20Shin-young%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=roh-shinyoung&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/노신영',
          details: {
            fullName: '노신영 (盧信永)',
            birth: '1930년 4월 10일',
            death: '2019년 1월 15일',
            education: '서울대학교 법학과',
            career: [
              '1970년대 법무부 차관',
              '1982년 국무총리',
              '1983년 국무총리 사임'
            ],
            achievements: [
              '행정 개혁 추진',
              '정부 조직 개편',
              '공무원 제도 개선'
            ],
            personality: '성실하고 원칙적인 성격으로 행정 업무에 충실했으며, 개혁 의지가 강했습니다.'
          }
        }
      ],
      judicial: [
        { 
          name: '김용철', 
          position: '대법원장', 
          period: '1981-1986',
          image: 'https://readdy.ai/api/search-image?query=Kim%20Yong-cheol%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=kim-yongcheol&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/김용철',
          details: {
            fullName: '김용철 (金龍哲)',
            birth: '1922년 9월 3일',
            death: '2001년 4월 18일',
            education: '서울대학교 법학과',
            career: [
              '1950년 판사 임용',
              '1981년 대법원장 취임',
              '1986년 대법원장 퇴임'
            ],
            achievements: [
              '사법 제도 안정화',
              '법원 행정 개선',
              '판례 체계 정비'
            ],
            personality: '신중하고 공정한 성격으로 사법부의 독립성 유지에 힘썼으며, 법리 연구에 깊이가 있었습니다.'
          }
        }
      ],
      legislative: [
        { 
          name: '채문식', 
          position: '국회의장', 
          period: '1981-1985',
          image: 'https://readdy.ai/api/search-image?query=Chae%20Moon-sik%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=chae-moonsik&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/채문식',
          details: {
            fullName: '채문식 (蔡文植)',
            birth: '1926년 11월 20일',
            death: '2010년 8월 14일',
            education: '서울대학교 법학과',
            career: [
              '1963년 국회의원 당선',
              '1981년 국회의장 취임',
              '1985년 국회의장 퇴임'
            ],
            achievements: [
              '국회 운영 정상화',
              '의회 제도 발전',
              '정치 안정 기여'
            ],
            personality: '온화하고 중재적인 성격으로 국회 운영을 원활히 했으며, 정치적 갈등 해결에 능했습니다.'
          }
        }
      ]
    }
  },
  {
    id: 4,
    name: '노태우',
    period: '1988-1993',
    party: '민주정의당',
    image: 'https://readdy.ai/api/search-image?query=President%20Roh%20Tae-woo%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201980s%2C%20official%20government%20photography%20style&width=250&height=300&seq=roh-president&orientation=portrait',
    achievements: [
      '88 서울올림픽 개최',
      '북방정책 추진',
      '소련·중국과 수교',
      'UN 동시가입'
    ],
    description: '북방정책을 통해 냉전체제를 극복하고 외교지평을 넓혔습니다.',
    fullName: '노태우 (盧泰愚)',
    birth: '1932년 12월 4일',
    death: '2021년 10월 26일',
    education: ['육군사관학교 11기', '미국 육군보병학교'],
    career: [
      '1979년 12.12 사태 참여',
      '1987년 6.29 선언 발표',
      '1988년 제13대 대통령'
    ],
    philosophy: '민주화와 통일을 지향하는 개혁 정치와 북방외교를 통한 국제적 위상 제고를 추구했습니다.',
    closeAssociates: {
      executive: [
        { 
          name: '강영훈', 
          position: '국무총리', 
          period: '1988-1990',
          image: 'https://readdy.ai/api/search-image?query=Kang%20Young-hoon%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kang-younghoon&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/강영훈',
          details: {
            fullName: '강영훈 (姜英勳)',
            birth: '1930년 5월 15일',
            death: '2020년 3월 2일',
            education: '서울대학교 법학과',
            career: [
              '1970년대 법무부 장관',
              '1988년 국무총리',
              '1990년 국무총리 사임'
            ],
            achievements: [
              '88올림픽 성공 개최',
              '민주화 정착 기여',
              '북방정책 추진'
            ],
            personality: '온건하고 합리적인 성격으로 정치적 안정에 기여했으며, 국정 운영에 경험이 풍부했습니다.'
          }
        }
      ],
      judicial: [
        { 
          name: '윤관', 
          position: '대법원장', 
          period: '1986-1994',
          image: 'https://readdy.ai/api/search-image?query=Yoon%20Gwan%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%20late%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=yoon-gwan&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/윤관',
          details: {
            fullName: '윤관 (尹寬)',
            birth: '1924년 4월 8일',
            death: '2010년 11월 25일',
            education: '서울대학교 법학과',
            career: [
              '1952년 판사 임용',
              '1986년 대법원장 취임',
              '1994년 대법원장 퇴임'
            ],
            achievements: [
              '민주화 시대 사법부 역할 정립',
              '헌법재판소 설치 기여',
              '사법 개혁 추진'
            ],
            personality: '개혁적이고 진보적인 사고를 가졌으며, 민주주의 발전에 기여하는 사법부 역할을 강조했습니다.'
          }
        }
      ],
      legislative: [
        { 
          name: '김재순', 
          position: '국회의장', 
          period: '1988-1992',
          image: 'https://readdy.ai/api/search-image?query=Kim%20Jae-soon%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-jaesoon&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/김재순',
          details: {
            fullName: '김재순 (金載淳)',
            birth: '1928년 6월 18일',
            death: '2009년 4월 12일',
            education: '서울대학교 법학과',
            career: [
              '1963년 국회의원 당선',
              '1988년 국회의장 취임',
              '1992년 국회의장 퇴임'
            ],
            achievements: [
              '민주화 국회 운영',
              '여야 협력 체제 구축',
              '의회 민주주의 발전'
            ],
            personality: '포용적이고 중재적인 성격으로 여야 간 대화와 협력을 이끌어냈으며, 의회 운영에 탁월했습니다.'
          }
        }
      ]
    }
  },
  {
    id: 5,
    name: '김영삼',
    period: '1993-1998',
    party: '민주자유당',
    image: 'https://readdy.ai/api/search-image?query=President%20Kim%20Young-sam%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%201990s%2C%20official%20government%20photography%20style&width=250&height=300&seq=kim-ys-president&orientation=portrait',
    achievements: [
      '문민정부 출범',
      '금융실명제 실시',
      '지방자치제 부활',
      '역사바로세우기'
    ],
    description: '32년간의 군사정권을 종식시키고 문민정부를 출범시켰습니다.',
    fullName: '김영삼 (金泳三)',
    birth: '1927년 12월 20일',
    death: '2015년 11월 22일',
    education: ['서울대학교 철학과'],
    career: [
      '1954년 국회의원 당선',
      '1990년 3당 합당 주도',
      '1993년 제14대 대통령'
    ],
    philosophy: '문민주의와 개혁을 통한 민주주의 정착과 부정부패 척결을 추구했습니다.',
    closeAssociates: {
      executive: [
        { 
          name: '황인성', 
          position: '국무총리', 
          period: '1993-1994',
          image: 'https://readdy.ai/api/search-image?query=Hwang%20In-sung%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=hwang-insung&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/황인성',
          details: {
            fullName: '황인성 (黃寅性)',
            birth: '1920년 10월 5일',
            death: '2009년 7월 20일',
            education: '서울대학교 법학과',
            career: [
              '1960년대 법무부 장관',
              '1993년 국무총리',
              '1994년 국무총리 사임'
            ],
            achievements: [
              '문민정부 출범 기여',
              '행정 개혁 추진',
              '정치 개혁 실행'
            ],
            personality: '청렴하고 원칙적인 성격으로 개혁 정신이 투철했으며, 문민정부의 가치를 실현하는 데 힘썼습니다.'
          }
        }
      ],
      judicial: [
        { 
          name: '윤관', 
          position: '대법원장', 
          period: '1986-1994',
          image: 'https://readdy.ai/api/search-image?query=Yoon%20Gwan%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=yoon-gwan-2&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/윤관',
          details: {
            fullName: '윤관 (尹寬)',
            birth: '1924년 4월 8일',
            death: '2010년 11월 25일',
            education: '서울대학교 법학과',
            career: [
              '1952년 판사 임용',
              '1986년 대법원장 취임',
              '1994년 대법원장 퇴임'
            ],
            achievements: [
              '문민정부 사법부 역할 정립',
              '사법 개혁 완성',
              '법치주의 확립'
            ],
            personality: '개혁적이고 민주적인 사고로 문민정부 시대 사법부의 역할을 새롭게 정립했습니다.'
          }
        }
      ],
      legislative: [
        { 
          name: '황낙주', 
          position: '국회의장', 
          period: '1992-1996',
          image: 'https://readdy.ai/api/search-image?query=Hwang%20Nak-joo%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=hwang-nakjoo&orientation=portrait',
          profileUrl: 'https://ko.wikipedia.org/wiki/황낙주',
          details: {
            fullName: '황낙주 (黃洛周)',
            birth: '1928년 3월 22일',
            death: '2015년 9월 8일',
            education: '서울대학교 법학과',
            career: [
              '1963년 국회의원 당선',
              '1992년 국회의장 취임',
              '1996년 국회의장 퇴임'
            ],
            achievements: [
              '문민정부 국회 운영',
              '정치 개혁 법안 처리',
              '의회 민주주의 완성'
            ],
            personality: '온건하고 합리적인 성격으로 문민정부 시대 국회 운영을 안정적으로 이끌었으며, 정치 개혁에 기여했습니다.'
          }
        }
      ]
    }
  }
];

export default function PresidentsSection() {
  const [selectedPresident, setSelectedPresident] = useState<typeof presidents[0] | null>(null);
  const [selectedAssociate, setSelectedAssociate] = useState<any>(null);
  const navigate = useNavigate();

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedPresident(null);
      setSelectedAssociate(null);
    }
  };

  const handleAssociateClick = (associate: any, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedAssociate(associate);
  };

  return (
    <section id="presidents" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            역대 대통령
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            대한민국을 이끌어온 지도자들의 발자취와 
            그들이 남긴 역사적 유산을 살펴보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {presidents.map((president) => (
            <div key={president.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-700">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={president.image}
                  alt={president.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{president.name}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                    <span className="bg-slate-600 text-white px-3 py-1 rounded-full font-medium">
                      {president.period}
                    </span>
                    <span className="text-slate-400">{president.party}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4">
                  {president.description}
                </p>

                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-white text-sm">주요 업적</h4>
                  <ul className="space-y-1">
                    {president.achievements.slice(0, 2).map((achievement, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-300">
                        <i className="ri-check-line text-green-400 mr-2 text-xs"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedPresident(president)}
                  className="w-full bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-700 
                  transition-colors 
                  duration-150 
                  whitespace-nowrap
                  "
                >
                  <i className="ri-user-fill mr-2"></i>
                  상세 정보 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/all-presidents')}
            className="bg-slate-600 text-white py-3 px-8 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap"
          >
            <i className="ri-arrow-right-line mr-2"></i>
            모든 대통령 보기
          </button>
        </div>
      </div>

      {/* Modal for selected president */}
      {selectedPresident && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={handleModalClose}>
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">{selectedPresident.name}</h3>
                <button 
                  onClick={() => setSelectedPresident(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedPresident.image} 
                    alt={selectedPresident.name} 
                    className="w-full rounded-xl mb-6"
                  />
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">기본 정보</h4>
                      <div className="space-y-1 text-slate-300">
                        <p><span className="text-white">본명:</span> {selectedPresident.fullName}</p>
                        <p><span className="text-white">생몰년:</span> {selectedPresident.birth} - {selectedPresident.death}</p>
                        <p><span className="text-white">정당:</span> {selectedPresident.party}</p>
                        <p><span className="text-white">임기:</span> {selectedPresident.period}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">학력</h4>
                      <ul className="space-y-1 text-slate-300">
                        {selectedPresident.education.map((edu, index) => (
                          <li key={index} className="flex items-center">
                            <i className="ri-graduation-cap-line text-blue-400 mr-2"></i>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">소개</h4>
                    <p className="text-slate-300 leading-relaxed">{selectedPresident.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">주요 경력</h4>
                    <ul className="space-y-2">
                      {selectedPresident.career.map((career, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <i className="ri-briefcase-line text-green-400 mr-3"></i>
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-3">주요 업적</h4>
                    <ul className="space-y-2">
                      {selectedPresident.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <i className="ri-check-line text-green-400 mr-3"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-3">정치 철학</h4>
                    <p className="text-slate-300 leading-relaxed">{selectedPresident.philosophy}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(selectedPresident.closeAssociates).map(([category, associates]) => (
                      <div key={category} className="bg-slate-700/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-white mb-3 capitalize">
                          {category === 'executive' ? '행정부' : category === 'judicial' ? '사법부' : '입법부'}
                        </h5>
                        
                        <div className="space-y-4">
                          {associates.map((associate, index) => (
                            <div key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-slate-600/30 p-2 rounded transition-colors"
                                 onClick={(e) => handleAssociateClick(associate, e)}>
                              <img 
                                src={associate.image} 
                                alt={associate.name} 
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <p className="text-white font-medium">{associate.name}</p>
                                <p className="text-slate-400 text-sm">{associate.position}</p>
                                <p className="text-slate-500 text-xs">{associate.period}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 측근 인사 상세 모달 */}
      {selectedAssociate && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={handleModalClose}
        >
          <div 
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{selectedAssociate.name} 프로필</h2>
              <button
                onClick={() => setSelectedAssociate(null)}
                className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <img
                    src={selectedAssociate.image}
                    alt={selectedAssociate.name}
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-white mb-2">기본 정보</h3>
                      <div className="space-y-1 text-slate-300">
                        <p><span className="text-white">본명:</span> {selectedAssociate.details?.fullName}</p>
                        <p><span className="text-white">생몰년:</span> {selectedAssociate.details?.birth} - {selectedAssociate.details?.death}</p>
                        <p><span className="text-white">직책:</span> {selectedAssociate.position}</p>
                        <p><span className="text-white">재임 기간:</span> {selectedAssociate.period}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">학력</h3>
                      <div className="text-slate-300">
                        <p className="flex items-center">
                          <i className="ri-graduation-cap-line text-blue-400 mr-2"></i>
                          {selectedAssociate.details?.education}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">주요 경력</h3>
                      <ul className="space-y-1 text-slate-300">
                        {selectedAssociate.details?.career?.map((career: string, index: number) => (
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
                    {selectedAssociate.details?.achievements?.map((achievement: string, index: number) => (
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
                    {selectedAssociate.details?.personality}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href={selectedAssociate.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap mr-4"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  프로필 더보기
                </a>
                <button
                  onClick={() => setSelectedAssociate(null)}
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

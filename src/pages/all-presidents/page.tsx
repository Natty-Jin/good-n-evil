
import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';

const allPresidents = [
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
    description: '대한민국 건국의 아버지로 불리며, 자유민주주의 체제를 확립하고 한미동맹의 기초를 마련했습니다.',
    closeAssociates: {
      executive: [
        { name: '장면', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Chang%20Myon%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=chang-myon&orientation=portrait' },
        { name: '백두진', position: '내무부 장관', image: 'https://readdy.ai/api/search-image?query=Baek%20Du-jin%20Korean%20Minister%20of%20Interior%20in%20formal%20government%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=baek-dujin&orientation=portrait' }
      ],
      judicial: [
        { name: '김병로', position: '초대 대법원장', image: 'https://readdy.ai/api/search-image?query=Kim%20Byeong-ro%20first%20Chief%20Justice%20of%20Korea%20in%20formal%20judicial%20robes%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201940s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=kim-byeongro&orientation=portrait' }
      ],
      legislative: [
        { name: '신익희', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Shin%20Ik-hee%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201950s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=shin-ikhee&orientation=portrait' }
      ]
    }
  },
  {
    id: 2,
    name: '박정희',
    period: '1963-1979',
    party: '민주공화당',
    image: 'https://readdy.ai/api/search-image?query=President%20Park%20Chung-hee%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20black%20and%20white%20historical%20portrait%20photograph%20from%20the%201960s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=300&height=400&seq=park-president&orientation=portrait',
    achievements: [
      '한강의 기적 달성',
      '경부고속도로 건설',
      '포항제철소 건설',
      '새마을운동 전개'
    ],
    description: '경제개발 5개년 계획을 통해 대한민국을 농업국가에서 공업국가로 변모시킨 경제발전의 주역입니다.',
    closeAssociates: {
      executive: [
        { name: '김종필', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Kim%20Jong-pil%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%201970s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-jongpil&orientation=portrait' },
        { name: '이후락', position: 'KCIA 부장', image: 'https://readdy.ai/api/search-image?query=Lee%20Hu-rak%20Korean%20intelligence%20chief%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%201970s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=lee-hurak&orientation=portrait' }
      ],
      judicial: [
        { name: '양승태', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Yang%20Seung-tae%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%201970s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=yang-seungtae&orientation=portrait' }
      ],
      legislative: [
        { name: '백두진', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Baek%20Du-jin%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%201970s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=baek-dujin-2&orientation=portrait' }
      ]
    }
  },
  {
    id: 3,
    name: '전두환',
    period: '1980-1988',
    party: '민주정의당',
    image: 'https://readdy.ai/api/search-image?query=President%20Chun%20Doo-hwan%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%201980s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=chun-president&orientation=portrait',
    achievements: [
      '88 서울올림픽 유치',
      '물가안정 정책',
      '3저 호황 달성',
      '아시안게임 개최'
    ],
    description: '1988년 서울올림픽을 성공적으로 유치하여 대한민국의 국제적 위상을 높였습니다.',
    closeAssociates: {
      executive: [
        { name: '노신영', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Roh%20Shin-young%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=roh-shinyoung&orientation=portrait' }
      ],
      judicial: [
        { name: '김용철', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Kim%20Yong-cheol%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=kim-yongcheol&orientation=portrait' }
      ],
      legislative: [
        { name: '채문식', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Chae%20Moon-sik%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=chae-moonsik&orientation=portrait' }
      ]
    }
  },
  {
    id: 4,
    name: '노태우',
    period: '1988-1993',
    party: '민주정의당',
    image: 'https://readdy.ai/api/search-image?query=President%20Roh%20Tae-woo%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201980s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=roh-president&orientation=portrait',
    achievements: [
      '88 서울올림픽 개최',
      '북방정책 추진',
      '소련·중국과 수교',
      'UN 동시가입'
    ],
    description: '북방정책을 통해 냉전체제를 극복하고 대한민국의 외교지평을 넓혔습니다.',
    closeAssociates: {
      executive: [
        { name: '강영훈', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Kang%20Young-hoon%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kang-younghoon&orientation=portrait' }
      ],
      judicial: [
        { name: '윤관', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Yoon%20Gwan%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%20late%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=yoon-gwan&orientation=portrait' }
      ],
      legislative: [
        { name: '김재순', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Kim%20Jae-soon%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201980s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-jaesoon&orientation=portrait' }
      ]
    }
  },
  {
    id: 5,
    name: '김영삼',
    period: '1993-1998',
    party: '민주자유당',
    image: 'https://readdy.ai/api/search-image?query=President%20Kim%20Young-sam%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%201990s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=kim-ys-president&orientation=portrait',
    achievements: [
      '문민정부 출범',
      '금융실명제 실시',
      '지방자치제 부활',
      '역사바로세우기'
    ],
    description: '32년간의 군사정권을 종식시키고 문민정부를 출범시켜 민주주의를 정착시켰습니다.',
    closeAssociates: {
      executive: [
        { name: '황인성', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Hwang%20In-sung%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=hwang-insung&orientation=portrait' }
      ],
      judicial: [
        { name: '윤관', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Yoon%20Gwan%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=yoon-gwan-2&orientation=portrait' }
      ],
      legislative: [
        { name: '황낙주', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Hwang%20Nak-joo%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=hwang-nakjoo&orientation=portrait' }
      ]
    }
  },
  {
    id: 6,
    name: '김대중',
    period: '1998-2003',
    party: '새정치국민회의',
    image: 'https://readdy.ai/api/search-image?query=President%20Kim%20Dae-jung%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201990s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=kim-dj-president&orientation=portrait',
    achievements: [
      'IMF 외환위기 극복',
      '햇볕정책 추진',
      '노벨평화상 수상',
      'IT 강국 기반 조성'
    ],
    description: 'IMF 외환위기를 극복하고 남북화해를 위한 햇볕정책으로 노벨평화상을 수상했습니다.',
    closeAssociates: {
      executive: [
        { name: '김종필', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Kim%20Jong-pil%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-jongpil-2&orientation=portrait' }
      ],
      judicial: [
        { name: '최종영', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Choi%20Jong-young%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%20late%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=choi-jongyoung&orientation=portrait' }
      ],
      legislative: [
        { name: '박준규', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Park%20Jun-gyu%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%201990s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=park-jungyu&orientation=portrait' }
      ]
    }
  },
  {
    id: 7,
    name: '노무현',
    period: '2003-2008',
    party: '열린우리당',
    image: 'https://readdy.ai/api/search-image?query=President%20Roh%20Moo-hyun%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%202000s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=roh-mh-president&orientation=portrait',
    achievements: [
      '참여정부 출범',
      '동북아 균형자론',
      '행정수도 이전 추진',
      '한미 FTA 협상'
    ],
    description: '참여민주주의를 표방하며 정치개혁과 지역균형발전을 추진했습니다.',
    closeAssociates: {
      executive: [
        { name: '고건', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Goh%20Kun%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%202000s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=goh-kun&orientation=portrait' }
      ],
      judicial: [
        { name: '이용훈', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Lee%20Yong-hoon%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%202000s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=lee-yonghoon&orientation=portrait' }
      ],
      legislative: [
        { name: '김원기', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Kim%20Won-gi%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%202000s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-wongi&orientation=portrait' }
      ]
    }
  },
  {
    id: 8,
    name: '이명박',
    period: '2008-2013',
    party: '한나라당',
    image: 'https://readdy.ai/api/search-image?query=President%20Lee%20Myung-bak%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%202000s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=lee-mb-president&orientation=portrait',
    achievements: [
      '4대강 정비사업',
      '녹색성장 정책',
      'G20 정상회의 개최',
      '자원외교 추진'
    ],
    description: '실용주의를 바탕으로 경제성장과 녹색성장 정책을 추진했습니다.',
    closeAssociates: {
      executive: [
        { name: '한승수', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Han%20Seung-soo%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%202000s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=han-seungsoo&orientation=portrait' }
      ],
      judicial: [
        { name: '이용훈', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Lee%20Yong-hoon%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%20late%202000s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=lee-yonghoon-2&orientation=portrait' }
      ],
      legislative: [
        { name: '김형오', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Kim%20Hyeong-o%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%202000s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-hyeongo&orientation=portrait' }
      ]
    }
  },
  {
    id: 9,
    name: '박근혜',
    period: '2013-2017',
    party: '새누리당',
    image: 'https://readdy.ai/api/search-image?query=President%20Park%20Geun-hye%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%202010s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=park-gh-president&orientation=portrait',
    achievements: [
      '창조경제 정책',
      '유라시아 이니셔티브',
      '한중 FTA 체결',
      '문화융성 정책'
    ],
    description: '창조경제와 문화융성을 통한 새로운 성장동력 창출을 추진했습니다.',
    closeAssociates: {
      executive: [
        { name: '정홍원', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Chung%20Hong-won%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%202010s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=chung-hongwon&orientation=portrait' }
      ],
      judicial: [
        { name: '양승태', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Yang%20Seung-tae%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%202010s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=yang-seungtae-2&orientation=portrait' }
      ],
      legislative: [
        { name: '정의화', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Chung%20Ui-hwa%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%202010s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=chung-uihwa&orientation=portrait' }
      ]
    }
  },
  {
    id: 10,
    name: '문재인',
    period: '2017-2022',
    party: '더불어민주당',
    image: 'https://readdy.ai/api/search-image?query=President%20Moon%20Jae-in%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%202010s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=moon-president&orientation=portrait',
    achievements: [
      '한반도 평화프로세스',
      '소득주도성장 정책',
      '코로나19 K-방역',
      '그린뉴딜 정책'
    ],
    description: '한반도 평화와 포용적 성장을 통한 국민통합을 추진했습니다.',
    closeAssociates: {
      executive: [
        { name: '이낙연', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Lee%20Nak-yon%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%202010s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=lee-nakyeon&orientation=portrait' }
      ],
      judicial: [
        { name: '김명수', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Kim%20Myeong-su%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20historical%20portrait%20photograph%20from%20the%20late%202010s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=kim-myeongsu&orientation=portrait' }
      ],
      legislative: [
        { name: '문희상', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Moon%20Hee-sang%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20historical%20portrait%20photograph%20from%20the%20late%202010s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=moon-heesang&orientation=portrait' }
      ]
    }
  },
  {
    id: 11,
    name: '윤석열',
    period: '2022-현재',
    party: '국민의힘',
    image: 'https://readdy.ai/api/search-image?query=President%20Yoon%20Suk-yeol%20of%20South%20Korea%20in%20formal%20presidential%20attire%2C%20contemporary%20portrait%20photograph%20from%20the%202020s%2C%20official%20government%20photography%20style%20against%20neutral%20background&width=300&height=400&seq=yoon-president&orientation=portrait',
    achievements: [
      '자유민주주의 가치 외교',
      '한미일 협력 강화',
      '디지털 플랫폼 정부',
      '탄소중립 정책'
    ],
    description: '자유민주주의 가치를 바탕으로 한 글로벌 중추국가 건설을 추진하고 있습니다.',
    closeAssociates: {
      executive: [
        { name: '한덕수', position: '국무총리', image: 'https://readdy.ai/api/search-image?query=Han%20Duck-soo%20Korean%20Prime%20Minister%20in%20formal%20government%20attire%2C%20contemporary%20portrait%20photograph%20from%20the%202020s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=han-ducksoo&orientation=portrait' }
      ],
      judicial: [
        { name: '김명수', position: '대법원장', image: 'https://readdy.ai/api/search-image?query=Kim%20Myeong-su%20Korean%20Chief%20Justice%20in%20formal%20judicial%20robes%2C%20contemporary%20portrait%20photograph%20from%20the%202020s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20court%20photography%20style&width=200&height=250&seq=kim-myeongsu-2&orientation=portrait' }
      ],
      legislative: [
        { name: '김진표', position: '국회의장', image: 'https://readdy.ai/api/search-image?query=Kim%20Jin-pyo%20Korean%20National%20Assembly%20Speaker%20in%20formal%20parliamentary%20attire%2C%20contemporary%20portrait%20photograph%20from%20the%202020s%2C%20dignified%20pose%20against%20neutral%20background%2C%20official%20government%20photography%20style&width=200&height=250&seq=kim-jinpyo&orientation=portrait' }
      ]
    }
  }
];

export default function AllPresidents() {
  const [selectedPresident, setSelectedPresident] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'executive' | 'judicial' | 'legislative'>('executive');
  const [activeSection, setActiveSection] = useState('presidents');

  const handlePresidentClick = (presidentId: number) => {
    setSelectedPresident(selectedPresident === presidentId ? null : presidentId);
    setActiveTab('executive');
    
    // 스크롤 이동
    setTimeout(() => {
      const element = document.getElementById('president-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const selectedPresidentData = allPresidents.find(p => p.id === selectedPresident);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <Navigation onSectionChange={setActiveSection} activeSection={activeSection} />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-20 border-b border-slate-800">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-blue-600 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-2xl">
                <span className="text-white font-bold text-2xl">🇰🇷</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                역대 대통령
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              대한민국을 이끌어온 모든 지도자들의 발자취와 
              그들이 남긴 역사적 유산을 살펴보세요
            </p>
          </div>
        </div>

        <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {allPresidents.map((president) => (
                <div key={president.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700">
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
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-medium">
                          {president.period}
                        </span>
                        <span className="text-slate-400">{president.party}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
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
                      onClick={() => handlePresidentClick(president.id)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap"
                    >
                      <i className="ri-team-line mr-2"></i>
                      최측근 인사 보기
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedPresidentData && selectedPresidentData.closeAssociates && (
              <div id="president-details" className="bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedPresidentData.name} 대통령 시대의 주요 인사
                  </h3>
                  <p className="text-slate-300">
                    {selectedPresidentData.period} 재임 기간 중 주요 정부 인사들
                  </p>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="flex bg-slate-700 rounded-lg p-1">
                    <button
                      onClick={() => setActiveTab('executive')}
                      className={`px-6 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                        activeTab === 'executive'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-300 hover:text-blue-400'
                      }`}
                    >
                      <i className="ri-government-line mr-2"></i>
                      행정부
                    </button>
                    <button
                      onClick={() => setActiveTab('judicial')}
                      className={`px-6 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                        activeTab === 'judicial'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-300 hover:text-blue-400'
                      }`}
                    >
                      <i className="ri-scales-line mr-2"></i>
                      사법부
                    </button>
                    <button
                      onClick={() => setActiveTab('legislative')}
                      className={`px-6 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                        activeTab === 'legislative'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-300 hover:text-blue-400'
                      }`}
                    >
                      <i className="ri-building-line mr-2"></i>
                      입법부
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedPresidentData.closeAssociates[activeTab] && selectedPresidentData.closeAssociates[activeTab].map((associate, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300">
                      <div className="w-24 h-30 mx-auto mb-4 rounded-lg overflow-hidden shadow-md">
                        <img
                          src={associate.image}
                          alt={associate.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <h4 className="font-bold text-white mb-1">{associate.name}</h4>
                      <p className="text-sm text-blue-400 font-medium">{associate.position}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={() => setSelectedPresident(null)}
                    className="bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    <i className="ri-close-line mr-2"></i>
                    닫기
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      
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

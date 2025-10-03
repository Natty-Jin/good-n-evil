
import { useState } from 'react';

const sponsorCategories = [
  {
    id: 'corporate',
    name: '기업 후원사',
    icon: 'ri-building-line',
    sponsors: [
      {
        id: 1,
        name: '삼성그룹',
        logo: 'https://readdy.ai/api/search-image?query=Samsung%20company%20logo%20on%20white%20background%2C%20clean%20corporate%20design%2C%20professional%20business%20logo%2C%20modern%20technology%20company%20branding&width=200&height=100&seq=samsung-logo&orientation=landscape',
        contribution: '참전용사 의료비 지원',
        amount: '50억원',
        period: '2020-2025',
        description: '참전용사들의 의료비 지원과 생활 안정을 위한 지속적인 후원'
      },
      {
        id: 2,
        name: 'LG그룹',
        logo: 'https://readdy.ai/api/search-image?query=LG%20company%20logo%20on%20white%20background%2C%20clean%20corporate%20design%2C%20professional%20business%20logo%2C%20modern%20electronics%20company%20branding&width=200&height=100&seq=lg-logo&orientation=landscape',
        contribution: '참전용사 주거환경 개선',
        amount: '30억원',
        period: '2019-2024',
        description: '노후 주택 개보수 및 생활편의시설 설치 지원'
      },
      {
        id: 3,
        name: '현대자동차그룹',
        logo: 'https://readdy.ai/api/search-image?query=Hyundai%20Motor%20company%20logo%20on%20white%20background%2C%20clean%20corporate%20design%2C%20professional%20automotive%20logo%2C%20modern%20car%20company%20branding&width=200&height=100&seq=hyundai-logo&orientation=landscape',
        contribution: '참전용사 이동편의 지원',
        amount: '25억원',
        period: '2021-2026',
        description: '참전용사 전용 차량 지원 및 교통비 보조'
      },
      {
        id: 4,
        name: 'SK그룹',
        logo: 'https://readdy.ai/api/search-image?query=SK%20Group%20company%20logo%20on%20white%20background%2C%20clean%20corporate%20design%2C%20professional%20business%20logo%2C%20modern%20conglomerate%20branding&width=200&height=100&seq=sk-logo&orientation=landscape',
        contribution: '참전용사 디지털 교육',
        amount: '15억원',
        period: '2022-2027',
        description: '디지털 기기 사용법 교육 및 스마트폰 지원'
      }
    ]
  },
  {
    id: 'foundation',
    name: '재단 및 단체',
    icon: 'ri-heart-line',
    sponsors: [
      {
        id: 5,
        name: '한국전쟁기념재단',
        logo: 'https://readdy.ai/api/search-image?query=Korean%20War%20Memorial%20Foundation%20logo%20with%20Korean%20flag%20elements%2C%20patriotic%20design%2C%20memorial%20foundation%20branding%2C%20respectful%20military%20commemoration&width=200&height=100&seq=memorial-foundation&orientation=landscape',
        contribution: '참전용사 기념사업',
        amount: '20억원',
        period: '2018-2028',
        description: '참전용사 기념관 운영 및 역사 교육 프로그램'
      },
      {
        id: 6,
        name: '보훈복지재단',
        logo: 'https://readdy.ai/api/search-image?query=Veterans%20Welfare%20Foundation%20logo%20with%20patriotic%20elements%2C%20welfare%20organization%20branding%2C%20caring%20foundation%20design%2C%20veteran%20support%20symbol&width=200&height=100&seq=veterans-welfare&orientation=landscape',
        contribution: '참전용사 복지지원',
        amount: '35억원',
        period: '2020-2030',
        description: '생활비 지원, 의료비 보조, 장례비 지원'
      },
      {
        id: 7,
        name: '평화통일재단',
        logo: 'https://readdy.ai/api/search-image?query=Peace%20Unification%20Foundation%20logo%20with%20dove%20and%20Korean%20peninsula%2C%20peaceful%20design%2C%20unification%20symbol%2C%20harmony%20and%20peace%20branding&width=200&height=100&seq=peace-foundation&orientation=landscape',
        contribution: '평화교육 프로그램',
        amount: '12억원',
        period: '2021-2026',
        description: '청소년 평화교육 및 참전용사 증언 기록'
      }
    ]
  },
  {
    id: 'international',
    name: '국제 후원',
    icon: 'ri-global-line',
    sponsors: [
      {
        id: 8,
        name: '미국 재향군인회',
        logo: 'https://readdy.ai/api/search-image?query=American%20Veterans%20Association%20logo%20with%20US%20flag%20elements%2C%20military%20veteran%20organization%20branding%2C%20patriotic%20American%20design%2C%20veteran%20support%20symbol&width=200&height=100&seq=us-veterans&orientation=landscape',
        contribution: '한미 참전용사 교류',
        amount: '$5M',
        period: '2019-2024',
        description: '한미 참전용사 상호 방문 및 의료 지원'
      },
      {
        id: 9,
        name: 'UN 평화기금',
        logo: 'https://readdy.ai/api/search-image?query=UN%20Peace%20Fund%20logo%20with%20United%20Nations%20emblem%2C%20international%20organization%20branding%2C%20peaceful%20blue%20design%2C%20global%20peace%20symbol&width=200&height=100&seq=un-peace&orientation=landscape',
        contribution: 'UN군 참전 기념',
        amount: '$3M',
        period: '2020-2025',
        description: 'UN 참전국 기념사업 및 평화교육 지원'
      },
      {
        id: 10,
        name: '터키 문화원',
        logo: 'https://readdy.ai/api/search-image?query=Turkish%20Cultural%20Center%20logo%20with%20Turkish%20flag%20elements%2C%20cultural%20organization%20branding%2C%20Turkey-Korea%20friendship%20symbol%2C%20international%20cooperation%20design&width=200&height=100&seq=turkish-cultural&orientation=landscape',
        contribution: '한터 우정 증진',
        amount: '$1M',
        period: '2021-2026',
        description: '터키 참전용사 기념 및 문화교류 프로그램'
      }
    ]
  }
];

export default function SponsorsSection() {
  const [activeCategory, setActiveCategory] = useState('corporate');
  const [selectedSponsor, setSelectedSponsor] = useState<number | null>(null);

  const currentSponsors = sponsorCategories.find(cat => cat.id === activeCategory)?.sponsors || [];
  const selectedSponsorData = currentSponsors.find(s => s.id === selectedSponsor);

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            국군용사 후원 회사
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            6.25 참전용사들을 위한 후원과 지원에 참여하는 
            기업, 재단, 국제기구들의 따뜻한 마음
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-800 rounded-xl p-2">
            {sponsorCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-blue-400'
                }`}
              >
                <i className={`${category.icon} text-lg`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              onClick={() => setSelectedSponsor(sponsor.id)}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-slate-700 hover:border-blue-500"
            >
              <div className="p-6">
                <div className="bg-white rounded-xl p-4 mb-4 h-24 flex items-center justify-center">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{sponsor.contribution}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">후원 금액</span>
                    <span className="text-green-400 font-bold">{sponsor.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">후원 기간</span>
                    <span className="text-slate-300 text-sm">{sponsor.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedSponsorData && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl max-w-2xl w-full border border-slate-700">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white rounded-xl p-3 w-20 h-20 flex items-center justify-center">
                      <img
                        src={selectedSponsorData.logo}
                        alt={selectedSponsorData.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{selectedSponsorData.name}</h3>
                      <p className="text-blue-400">{selectedSponsorData.contribution}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSponsor(null)}
                    className="w-10 h-10 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-white font-semibold mb-2">후원 금액</h4>
                    <p className="text-green-400 text-2xl font-bold">{selectedSponsorData.amount}</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <h4 className="text-white font-semibold mb-2">후원 기간</h4>
                    <p className="text-blue-400 text-xl font-semibold">{selectedSponsorData.period}</p>
                  </div>
                </div>

                <div className="bg-slate-800/30 p-6 rounded-xl">
                  <h4 className="text-white font-semibold mb-3">후원 내용</h4>
                  <p className="text-slate-300 leading-relaxed">{selectedSponsorData.description}</p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setSelectedSponsor(null)}
                    className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl p-8 text-white border border-green-700">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">감사의 마음</h3>
            <p className="text-xl text-green-100 mb-8">
              참전용사들을 위한 따뜻한 후원에 참여해주신 
              모든 기업과 단체에 깊은 감사를 드립니다.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">10개</div>
                <p className="text-green-100">후원 기관</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">187억원</div>
                <p className="text-green-100">총 후원 금액</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">5,000명</div>
                <p className="text-green-100">수혜 참전용사</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">지속</div>
                <p className="text-green-100">후원 의지</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

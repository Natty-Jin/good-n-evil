
const timelineEvents = [
  {
    id: 1,
    year: '1900-1945',
    title: '일제강점기',
    description: '35년간의 일제강점기를 거치며 독립에 대한 의지를 키워나간 시기',
    icon: 'ri-time-line',
    color: 'bg-gray-600',
    image: 'https://readdy.ai/api/search-image?query=Korean%20independence%20movement%20during%20Japanese%20colonial%20period%2C%20historical%20black%20and%20white%20photograph%20showing%20Korean%20patriots%20and%20resistance%20fighters%2C%20dignified%20composition%20with%20traditional%20Korean%20elements%20and%20symbols%20of%20hope&width=400&height=300&seq=independence-movement&orientation=landscape'
  },
  {
    id: 2,
    year: '1945',
    title: '광복',
    description: '8월 15일 일제강점기에서 해방되어 광복을 맞이한 역사적 순간',
    icon: 'ri-sun-line',
    color: 'bg-yellow-500',
    image: 'https://readdy.ai/api/search-image?query=Korean%20Liberation%20Day%20August%2015%201945%2C%20historical%20celebration%20scene%20with%20Korean%20people%20celebrating%20freedom%2C%20joyful%20atmosphere%20with%20Korean%20flags%20and%20traditional%20clothing%2C%20bright%20hopeful%20composition&width=400&height=300&seq=liberation-day&orientation=landscape'
  },
  {
    id: 3,
    year: '1948',
    title: '대한민국 정부 수립',
    description: '8월 15일 이승만을 초대 대통령으로 하는 대한민국 정부가 수립',
    icon: 'ri-flag-line',
    color: 'bg-blue-600',
    image: 'https://readdy.ai/api/search-image?query=Republic%20of%20Korea%20government%20establishment%20ceremony%201948%2C%20historical%20photograph%20showing%20President%20Syngman%20Rhee%20and%20government%20officials%2C%20formal%20ceremony%20with%20Korean%20flag%2C%20dignified%20official%20atmosphere&width=400&height=300&seq=government-establishment&orientation=landscape'
  },
  {
    id: 4,
    year: '1950-1953',
    title: '한국전쟁',
    description: '북한의 남침으로 시작된 전쟁에서 UN군과 함께 자유민주주의를 수호',
    icon: 'ri-shield-line',
    color: 'bg-red-600',
    image: 'https://readdy.ai/api/search-image?query=Korean%20War%201950-1953%2C%20historical%20black%20and%20white%20photograph%20showing%20South%20Korean%20and%20UN%20forces%20together%2C%20military%20cooperation%20scene%20with%20soldiers%20in%20combat%20gear%2C%20heroic%20composition%20showing%20determination%20and%20courage&width=400&height=300&seq=korean-war&orientation=landscape'
  },
  {
    id: 5,
    year: '1960-1980',
    title: '경제 발전',
    description: '한강의 기적으로 불리는 급속한 경제성장과 산업화 달성',
    icon: 'ri-line-chart-line',
    color: 'bg-green-600',
    image: 'https://readdy.ai/api/search-image?query=Korean%20economic%20miracle%20Han%20River%20development%201960s-1980s%2C%20historical%20photograph%20showing%20industrial%20construction%20and%20modern%20buildings%2C%20economic%20growth%20scene%20with%20workers%20and%20machinery%2C%20progressive%20composition&width=400&height=300&seq=economic-miracle&orientation=landscape'
  },
  {
    id: 6,
    year: '1988',
    title: '서울올림픽',
    description: '성공적인 서울올림픽 개최로 대한민국의 위상을 세계에 알림',
    icon: 'ri-medal-line',
    color: 'bg-orange-500',
    image: 'https://readdy.ai/api/search-image?query=Seoul%20Olympics%201988%20opening%20ceremony%2C%20historical%20photograph%20showing%20Olympic%20stadium%20with%20Korean%20traditional%20performance%2C%20colorful%20celebration%20scene%20with%20athletes%20and%20spectators%2C%20grand%20international%20event%20atmosphere&width=400&height=300&seq=seoul-olympics&orientation=landscape'
  },
  {
    id: 7,
    year: '1990-2000',
    title: '민주화 완성',
    description: '문민정부 출범과 지방자치제 실시로 민주주의 완전 정착',
    icon: 'ri-vote-line',
    color: 'bg-purple-600',
    image: 'https://readdy.ai/api/search-image?query=Korean%20democratization%201990s%2C%20historical%20photograph%20showing%20peaceful%20election%20scene%20with%20citizens%20voting%2C%20democratic%20participation%20with%20ballot%20boxes%20and%20Korean%20flags%2C%20hopeful%20composition%20showing%20democratic%20progress&width=400&height=300&seq=democratization&orientation=landscape'
  },
  {
    id: 8,
    year: '2000-2025',
    title: '글로벌 강국',
    description: 'IT 강국, K-문화 확산, 선진국 진입으로 세계적 영향력 확대',
    icon: 'ri-global-line',
    color: 'bg-indigo-600',
    image: 'https://readdy.ai/api/search-image?query=Modern%20South%20Korea%20global%20influence%20K-culture%20technology%2C%20contemporary%20photograph%20showing%20Seoul%20skyline%20with%20modern%20buildings%20and%20digital%20displays%2C%20futuristic%20composition%20with%20Korean%20cultural%20elements%20and%20technology&width=400&height=300&seq=global-korea&orientation=landscape'
  }
];

export default function TimelineSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            대한민국 발전사
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            1900년부터 2025년까지, 
            대한민국이 걸어온 위대한 여정을 시간순으로 살펴보세요
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 h-full"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                        <div className={`w-8 h-8 ${event.color} rounded-full flex items-center justify-center`}>
                          <i className={`${event.icon} text-white text-sm`}></i>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <i className={`${event.icon} text-white text-2xl`}></i>
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">125년의 여정</h3>
            <p className="text-xl text-blue-100 mb-8">
              어려운 시련을 극복하고 세계적 강국으로 성장한 
              대한민국의 놀라운 발전사
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">77년</div>
                <p className="text-blue-100">정부 수립</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">35년</div>
                <p className="text-blue-100">민주화 완성</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">세계 10위</div>
                <p className="text-blue-100">경제 규모</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">글로벌</div>
                <p className="text-blue-100">문화 강국</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

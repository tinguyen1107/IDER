export default function News() {
  const news = [
    {
      title: "Ten significant DTU Achievements in 2021",
      date: "09/03/2022",
      excerpt: "2021 was a year of turmoil, with the global Covid-19 breakout severely impacting...",
    },
    {
      title: "DTU Develops X-Ray and CT App for Covid-19 Detection",
      date: "26/02/2022",
      excerpt: "With the emergence of several complex Covid-19 variants, diagnostic applications...",
    },
    {
      title: "Danang: Dredging and Dumping in the Ocean Impacts the Marine Ecosystem",
      date: "26/02/2022",
      excerpt: "Experts in environmental science and maritime ecology are all concerned about the...",
    },
  ];

  const dtuNews = [
    {
      title: "An MoU with the Busan University of Foreign Studies in South Korea",
      date: "10/03/2022",
    },
    {
      title: "The 2022 Virtual Technology & Engineering Job Fair",
      date: "10/03/2022",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tin tức Viện */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Tin tức Viện</h2>
            <div className="space-y-6">
              {news.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-l-4 border-blue-600">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 leading-relaxed">{item.title}</h3>
                  <div className="text-sm text-gray-500 mb-3 font-medium">{item.date}</div>
                  <p className="text-gray-600 mb-5 leading-relaxed">{item.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                    Chi Tiết
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tin tức DTU */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Tin tức DTU</h2>
            <div className="space-y-6">
              {dtuNews.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-l-4 border-green-600">
                  <div className="text-sm text-gray-500 mb-3 font-medium">{item.date}</div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


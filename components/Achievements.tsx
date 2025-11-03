export default function Achievements() {
  const achievements = [
    {
      title: "The Five Best Vietnamese Universities in 2022 Ranked by U.S. News & World Reports",
    },
    {
      title: "DTU Comes First and Third in the 2021 \"Sustainable Energy Initiative\" Contest",
    },
    {
      title: "DTU Comes Third in the 2021 Danang Scientific Research Student Contest",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Thành tựu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-blue-600"
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-800 leading-relaxed">
                {achievement.title}
              </h3>
              <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                Chi Tiết
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


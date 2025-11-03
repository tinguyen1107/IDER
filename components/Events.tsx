export default function Events() {
  const events = [
    {
      title: "Chương trình Công Nghệ Phần Mềm đạt kiểm định ABET EAC",
      date: "26/02/2022",
      type: "Event Highlights",
    },
    {
      title: "DTU Comes First and Third in the 2021 \"Sustainable Energy Initiative\" Contest",
      date: "26/02/2022",
      type: "Event Highlights",
    },
    {
      title: "DTU Comes Third in the 2021 Danang Scientific Research Student Contest",
      date: "26/02/2022",
      type: "Event Highlights",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Sự kiện
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="text-sm text-blue-600 font-semibold mb-3 uppercase tracking-wide">
                {event.type}
              </div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 leading-relaxed">
                {event.title}
              </h3>
              <div className="text-sm text-gray-500 mb-6 font-medium">{event.date}</div>
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


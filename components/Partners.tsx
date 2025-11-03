export default function Partners() {
  const partners = [
    "Sungkyunkwan University, Korea",
    "University Of Namur, Belgium",
    "Petrovietnam University, Vietnam",
    "University of Science, Vietnam National University, Hanoi, Viet Nam",
    "University of Technology Sydney (UTS), Australia",
    "Chang Gung University, Taiwan",
    "Queen's University Belfast, UK",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Đối tác
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center hover:bg-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-200"
            >
              <p className="text-gray-700 font-medium leading-relaxed">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


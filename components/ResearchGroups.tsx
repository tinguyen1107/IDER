export default function ResearchGroups() {
  const groups = [
    { name: "ICT", description: "ICT" },
    { name: "Vật lý", description: "Vật lý" },
    { name: "Vật liệu và Linh kiện Tương lai", description: "Vật liệu và Linh kiện Tương lai" },
    { name: "Vật Liệu Môi Trường & Năng Lượng", description: "Vật Liệu Môi Trường & Năng Lượng" },
    { name: "Nhóm Tính toán và Mô phỏng", description: "Nhóm Tính toán và Mô phỏng" },
    { name: "Nhóm Pin", description: "Nhóm Pin" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Nhóm Nghiên cứu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-800">{group.name}</h3>
              <p className="text-gray-600 mb-6">{group.description}</p>
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


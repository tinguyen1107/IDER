export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Giới thiệu về IFAS
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Viện Khoa học cơ bản & Ứng dụng thuộc Trường Đại học Duy Tân là đơn vị nghiên cứu và đào tạo trong nhiều lĩnh vực toán học, vật lý.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Chi tiết
          </button>
        </div>
      </div>
    </section>
  );
}


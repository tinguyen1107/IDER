export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Viện Nghiên cứu Khoa học cơ bản & Ứng dụng
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
            Viện Khoa học cơ bản & Ứng dụng thuộc Trường Đại học Duy Tân là đơn vị nghiên cứu và đào tạo trong nhiều lĩnh vực toán học, vật lý.
          </p>
          <button className="bg-white text-blue-800 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Chi Tiết
          </button>
        </div>
      </div>
    </section>
  );
}


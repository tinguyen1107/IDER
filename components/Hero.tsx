export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Chi nhánh Viện Nghiên cứu Thiên tai và Môi trường tại Thành phố Hồ Chí Minh
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed opacity-95">
            RIDES-HCM là đơn vị trực thuộc Viện Nghiên cứu Thiên tai và Môi trường – một tổ chức khoa học và công nghệ hoạt động trong lĩnh vực môi trường, năng lượng xanh, biến đổi khí hậu và phát triển bền vững.
          </p>
          <p className="text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed opacity-90 italic">
            &ldquo;Thành lập ngày 13 tháng 10 năm 2025&rdquo;
          </p>
          <button className="bg-white text-blue-800 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Chi Tiết
          </button>
        </div>
      </div>
    </section>
  );
}


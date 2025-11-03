import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
            Giới thiệu về RIDES-HCM
          </h2>
          <div className="space-y-4 text-gray-700 mb-8">
            <p className="text-lg leading-relaxed">
              <strong>Chi nhánh Viện Nghiên cứu Thiên tai và Môi trường tại Thành phố Hồ Chí Minh</strong> (tên giao dịch: <strong>RIDES-HCM</strong>) là đơn vị trực thuộc Viện Nghiên cứu Thiên tai và Môi trường (RIDES) – một tổ chức khoa học và công nghệ hoạt động trong lĩnh vực môi trường, năng lượng xanh, biến đổi khí hậu và phát triển bền vững.
            </p>
            <p className="leading-relaxed">
              Chi nhánh được thành lập nhằm mở rộng hoạt động nghiên cứu, hợp tác quốc tế và triển khai các dự án khoa học – công nghệ khu vực phía Nam Việt Nam.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Trụ sở:</h3>
              <p className="leading-relaxed">
                Số 38, đường D15A, Khu nhà ở liên kế Hưng Phú (mở rộng), Phường Phước Long, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/org" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Chi tiết
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


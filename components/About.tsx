import Link from "next/link";

export default function About() {
  return (
    <section className="container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-left">Giới thiệu về RIDES</h2>

      <div className="space-y-4 text-gray-700 mb-8">
        <p className="text-lg leading-relaxed">
          <strong>Viện Nghiên cứu Thiên tai và Môi trường (RIDES)</strong> là tổ chức khoa học và công nghệ
          hoạt động theo định hướng ứng dụng, với sứ mệnh nghiên cứu, chuyển giao công nghệ và đề xuất giải
          pháp nhằm ứng phó, giảm thiểu rủi ro thiên tai, thích ứng với biến đổi khí hậu và bảo vệ môi trường.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mt-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Trụ sở:</h3>
          <p className="leading-relaxed">
            Số 38, đường D15A, Khu nhà ở liên kế Hưng Phú (mở rộng), Phường Phước Long, Thành phố Thủ Đức,
            Thành phố Hồ Chí Minh, Việt Nam
          </p>
        </div>
      </div>
      <div>
        <Link
          href="/org"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {"Chi tiết".toUpperCase()}
        </Link>
      </div>
    </section>
  );
}

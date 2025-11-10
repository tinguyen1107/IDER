import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Giới thiệu</h3>
            <p className="text-gray-300 mb-4">
              <strong>Viện Nghiên cứu Thiên tai và Môi trường (RIDES)</strong> là tổ chức khoa học và công
              nghệ hoạt động theo định hướng ứng dụng, với sứ mệnh nghiên cứu, chuyển giao công nghệ và đề
              xuất giải pháp nhằm ứng phó, giảm thiểu rủi ro thiên tai, thích ứng với biến đổi khí hậu và bảo
              vệ môi trường.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="/contact" className="hover:text-white">
                Liên hệ
              </Link>
              <span className="mx-2">|</span>
              <Link href="/org" className="hover:text-white">
                Tổ chức
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white">
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="text-gray-300 hover:text-white">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold">Viện Nghiên cứu Thiên tai và Môi trường</p>
              <p>
                Số 38, đường D15A, Khu nhà ở liên kế Hưng Phú (mở rộng), Phường Phước Long, Thành phố Thủ Đức,
                TP Hồ Chí Minh, Việt Nam
              </p>
              <p className="font-semibold">Giám đốc Chi nhánh:</p>
              <p>Giáo sư, Tiến sĩ Dương Văn Sinh</p>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold mb-4">Follow us</h3>
          <div className="flex space-x-4">{/* Add social media icons here */}</div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 RIDES-HCM All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

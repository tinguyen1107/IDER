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
              Viện Khoa học cơ bản & Ứng dụng thuộc Trường Đại học Duy Tân là đơn vị nghiên cứu và đào tạo trong nhiều lĩnh vực toán học, vật lý.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">Liên hệ</Link>
              <span className="mx-2">|</span>
              <Link href="#" className="hover:text-white">Chúng tôi</Link>
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
                <Link href="#" className="text-gray-300 hover:text-white">
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold">Viện nghiên cứu Khoa học cơ bản & Ứng dụng</p>
              <p>
                Đại học Duy Tân, 6 Trần Nhật Duật, Phường Tân Định, Quận 1, TP Hồ Chí Minh, Việt Nam
              </p>
              <p>+84-028-38.437.043</p>
              <p>
                <a href="mailto:ifas.hcm@duytan.edu.vn" className="hover:text-white">
                  ifas.hcm@duytan.edu.vn
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold mb-4">Follow us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>2022 © Đại học Duy Tân All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


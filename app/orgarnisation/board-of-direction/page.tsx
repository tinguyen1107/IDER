import Breadcrumb from "@/components/Breadcrumb";
import { getCurPathname } from "@/lib/pathname";

export default async function BoardOfDirectionPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tổ chức", href: "/orgarnisation" },
    { label: "Ban lãnh đạo", href: "/board-of-direction" },
  ];

  const leadership = {
    director: {
      name: "Nguyễn Quang Hưng",
      degree: "PGS.TS",
      position: "Viện Trưởng",
      description: "Phó Giáo Sư, Tiến sĩ Nguyễn Quang Hưng là Viện Trưởng của Viện Nghiên cứu Khoa học cơ bản & Ứng dụng, đồng thời là Trưởng nhóm Nghiên cứu Vật lý.",
    },
    deputyDirectors: [
      {
        name: "Nguyễn Đăng Nam",
        degree: "PGS. TS",
        position: "Viện phó",
        description: "Phó Giáo Sư, Tiến sĩ Nguyễn Đăng Nam là Phó Viện trưởng và Trưởng nhóm Phòng thí nghiệm Vật liệu và Linh kiện tương lai.",
      },
      {
        name: "Võ Nguyên Sơn",
        degree: "TS",
        position: "Viện phó",
        description: "Tiến sĩ Võ Nguyên Sơn là Phó Viện trưởng và Trưởng nhóm ICT (Công nghệ thông tin và Truyền thông).",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-5xl mx-auto mt-8">
          {/* Page Header */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Ban lãnh đạo
            </h1>
            <p className="text-lg text-gray-600">
              Giới thiệu về đội ngũ lãnh đạo của Viện Nghiên cứu Khoa học cơ bản & Ứng dụng
            </p>
          </div>

          {/* Director Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-6xl font-bold text-white">
                    {leadership.director.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    {leadership.director.position}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {leadership.director.name}
                  </h2>
                  <p className="text-xl text-blue-600 font-semibold mb-4">
                    {leadership.director.degree}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {leadership.director.description}
                </p>
              </div>
            </div>
          </div>

          {/* Deputy Directors Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Phó Viện trưởng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadership.deputyDirectors.map((deputy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-white">
                        {deputy.name.charAt(0)}
                      </span>
                    </div>
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {deputy.position}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {deputy.name}
                    </h3>
                    <p className="text-lg text-green-600 font-semibold mb-4">
                      {deputy.degree}
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {deputy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Thông tin liên hệ
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong className="text-gray-800">Viện Nghiên cứu Khoa học cơ bản & Ứng dụng</strong>
              </p>
              <p>
                Đại học Duy Tân, 6 Trần Nhật Duật, Phường Tân Định, Quận 1, TP Hồ Chí Minh, Việt Nam
              </p>
              <p>
                <strong>Điện thoại:</strong> +84-028-38.437.043
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:ifas.hcm@duytan.edu.vn"
                  className="text-blue-600 hover:text-blue-800"
                >
                  ifas.hcm@duytan.edu.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


import Breadcrumb from "@/components/Breadcrumb";
import { getCurPathname } from "@/lib/pathname";

export default async function RecruitmentPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tuyển dụng", href: "/recruitment" },
  ];

  const positions = [
    {
      title: "Đang cập nhật",
      description: "Thông tin tuyển dụng đang được cập nhật.",
      requirements: "Đang cập nhật",
      deadline: "Đang cập nhật",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Tuyển dụng
            </h1>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="border-l-4 border-orange-600 pl-6 py-4 bg-gray-50 rounded-r-lg"
                >
                  <h2 className="text-xl font-bold mb-2 text-gray-800">
                    {position.title}
                  </h2>
                  <p className="text-gray-700 mb-3">{position.description}</p>
                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Yêu cầu:</strong> {position.requirements}
                    </p>
                    <p>
                      <strong>Hạn nộp hồ sơ:</strong> {position.deadline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


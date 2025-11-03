import Breadcrumb from "@/components/Breadcrumb";
import { getCurPathname } from "@/lib/pathname";

export default async function DomesticProjectsPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Dự án", href: "/projects" },
    { label: "Dự án trong nước", href: "/projects/domestic" },
  ];

  const projects = [
    {
      title: "Đang cập nhật",
      description: "Thông tin về các dự án trong nước đang được cập nhật.",
      sponsor: "Đang cập nhật",
      duration: "Đang cập nhật",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Dự án trong nước
            </h1>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border-l-4 border-green-600 pl-6 py-4 bg-gray-50 rounded-r-lg"
                >
                  <h2 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Nhà tài trợ:</strong> {project.sponsor}
                    </p>
                    <p>
                      <strong>Thời gian:</strong> {project.duration}
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


import Breadcrumb from "@/components/Breadcrumb";
import { getCurPathname } from "@/lib/pathname";

export default async function ProjectsPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Dự án", href: "/projects" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Dự án</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="/projects/international"
                className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 text-white hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Dự án hợp tác quốc tế
                </h2>
                <p className="text-blue-100">
                  Xem các dự án hợp tác với các đối tác quốc tế
                </p>
              </a>

              <a
                href="/projects/domestic"
                className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-8 text-white hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold mb-4">Dự án trong nước</h2>
                <p className="text-green-100">
                  Xem các dự án được thực hiện trong nước
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


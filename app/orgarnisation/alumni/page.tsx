import Breadcrumb from "@/components/Breadcrumb";
import OrgSidebar from "@/components/OrgSidebar";
import { getCurPathname } from "@/lib/pathname";

export default async function AlumniPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tổ chức", href: "/orgarnisation" },
    { label: "Cựu thành viên", href: "/orgarnisation/alumni" },
  ];

  const alumni = [
    {
      name: "Đang cập nhật",
      position: "Cựu thành viên",
      period: "Đang cập nhật",
      currentRole: "Đang cập nhật",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <OrgSidebar currentPath={currentPath} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Cựu thành viên
            </h1>

            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-8">
                Thông tin về các cựu thành viên của Viện đang được cập nhật.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumni.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">?</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}


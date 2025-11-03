import Breadcrumb from "@/components/Breadcrumb";
import OrgSidebar from "@/components/OrgSidebar";
import { getCurPathname } from "@/lib/pathname";

export default async function ResearchGroupsPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tổ chức", href: "/org" },
    { label: "Nhóm Nghiên cứu", href: "/org/research-groups" },
  ];

  const researchGroups = [
    {
      id: "ict",
      name: "Nhóm ICT",
      fullName: "Công nghệ thông tin và Truyền thông (ICT)",
      description: "Nhóm nghiên cứu về công nghệ thông tin và truyền thông, tập trung vào các lĩnh vực kỹ thuật phần mềm, hệ thống thông tin.",
      members: 3,
      leader: "TS. Võ Nguyên Sơn",
    },
    {
      id: "physics",
      name: "Nhóm Vật lý",
      fullName: "Nghiên cứu Vật lý",
      description: "Nhóm nghiên cứu các vấn đề về vật lý học, ứng dụng vật lý trong thực tiễn.",
      members: 8,
      leader: "PGS.TS. Nguyễn Quang Hưng",
    },
    {
      id: "materials",
      name: "Vật liệu và Linh kiện Tương lai",
      fullName: "Phòng thí nghiệm Vật liệu và Linh kiện tương lai",
      description: "Nghiên cứu và phát triển các vật liệu mới và linh kiện công nghệ cao cho tương lai.",
      members: 16,
      leader: "PGS. TS. Nguyễn Đăng Nam",
    },
    {
      id: "environment",
      name: "Vật Liệu Môi Trường & Năng Lượng",
      fullName: "Vật Liệu Môi Trường & Năng Lượng",
      description: "Nghiên cứu vật liệu ứng dụng trong môi trường và phát triển nguồn năng lượng bền vững.",
      members: 4,
      leader: "TS. Trần Nguyễn Hải",
    },
    {
      id: "simulation",
      name: "Tính toán và Mô phỏng",
      fullName: "Nhóm Tính toán và Mô phỏng",
      description: "Nghiên cứu các phương pháp tính toán và mô phỏng khoa học, ứng dụng trong các lĩnh vực khác nhau.",
      members: 2,
      leader: "TS. Hoàng Hải",
    },
    {
      id: "mathematics",
      name: "Nhóm Toán",
      fullName: "Nghiên cứu Toán học",
      description: "Nghiên cứu các vấn đề toán học và ứng dụng toán học trong khoa học và công nghệ.",
      members: 2,
      leader: "Th.S Trần Quốc Việt",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Sidebar */}
          <aside className="lg:w-[300px] flex-shrink-0">
            <OrgSidebar currentPath={currentPath} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Nhóm Nghiên cứu
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchGroups.map((group) => (
                <div
                  key={group.id}
                  className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all transform hover:-translate-y-2"
                >
                  <div className="mb-4">
                    <span className="text-sm text-blue-600 font-semibold mb-2 block">
                      {group.fullName}
                    </span>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">
                      {group.name}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>
                        <strong>Trưởng nhóm:</strong> {group.leader}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {group.members} thành viên
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {group.description}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}


import Breadcrumb from "@/components/Breadcrumb";
import OrgSidebar from "@/components/OrgSidebar";
import { getCurPathname } from "@/lib/pathname";

export default async function LabsPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tổ chức", href: "/org" },
    { label: "Labs", href: "/org/labs" },
  ];

  const labs = [
    {
      name: "Phòng thí nghiệm Vật liệu và Linh kiện tương lai",
      description: "Phòng thí nghiệm chuyên nghiên cứu và phát triển các vật liệu mới và linh kiện công nghệ cao cho tương lai. Được trang bị các thiết bị hiện đại phục vụ nghiên cứu vật liệu nano, vật liệu bán dẫn, và các ứng dụng công nghệ.",
      director: "TS. Đào Vĩnh Ái - Trưởng PTN",
      equipment: "Thiết bị phân tích cấu trúc, thiết bị đo đạc tính chất vật liệu, kính hiển vi điện tử",
      research: "Vật liệu nano, vật liệu bán dẫn, linh kiện điện tử, vật liệu quang học",
    },
    {
      name: "Phòng thí nghiệm ICT",
      description: "Phòng thí nghiệm công nghệ thông tin và truyền thông, tập trung nghiên cứu về phần mềm, hệ thống thông tin, và ứng dụng công nghệ trong các lĩnh vực khác nhau.",
      director: "TS. Võ Nguyên Sơn",
      equipment: "Hệ thống máy tính hiệu năng cao, môi trường phát triển phần mềm, mạng lưới thử nghiệm",
      research: "Kỹ thuật phần mềm, hệ thống thông tin, trí tuệ nhân tạo, an ninh mạng",
    },
    {
      name: "Phòng thí nghiệm Vật lý",
      description: "Phòng thí nghiệm vật lý với các thiết bị nghiên cứu về quang học, điện tử, và các hiện tượng vật lý hiện đại.",
      director: "PGS.TS. Nguyễn Quang Hưng",
      equipment: "Thiết bị quang học, thiết bị đo đạc điện tử, kính hiển vi, hệ thống laser",
      research: "Quang học, điện tử lượng tử, vật lý vật liệu, quang tử học",
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
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Labs</h1>

            <div className="space-y-8">
              {labs.map((lab, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded-r-lg"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    {lab.name}
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {lab.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-800 block mb-1">
                        Trưởng PTN:
                      </strong>
                      <span className="text-gray-700">{lab.director}</span>
                    </div>
                    <div>
                      <strong className="text-gray-800 block mb-1">
                        Thiết bị chính:
                      </strong>
                      <span className="text-gray-700">{lab.equipment}</span>
                    </div>
                    <div className="md:col-span-2">
                      <strong className="text-gray-800 block mb-1">
                        Hướng nghiên cứu:
                      </strong>
                      <span className="text-gray-700">{lab.research}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}


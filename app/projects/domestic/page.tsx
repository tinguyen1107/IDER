import Breadcrumb from "@/components/Breadcrumb";
import ProjectsSidebar from "@/components/ProjectsSidebar";
import { getCurPathname } from "@/lib/pathname";

export default async function DomesticProjectsPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Dự án", href: "/projects" },
    { label: "Dự án trong nước", href: "/projects/domestic" }
  ];

  const projects = [
    {
      title: "Một Triệu Bình Ắc Quy Xanh",
      description: "Dự án phát triển bình ắc quy thân thiện môi trường.",
      sponsor: "Đang cập nhật",
      duration: "Đang cập nhật",
      image: "/images/mot_trieu_binh_ac_quy_xanh.jpg"
    },
    {
      title: "RÁC THẢI NÔNG NGHIỆP TUẦN HOÀN SINH THÁI TẠI VIỆT NAM",
      description: "Dự án xử lý và tái chế rác thải nông nghiệp theo mô hình tuần hoàn sinh thái.",
      sponsor: "Đang cập nhật",
      duration: "Đang cập nhật",
      image: "/images/rac_thai_nong_nghiep_tuan_hoan.jpg"
    },
    {
      title: "Điện Bánh Đà",
      description: "Dự án ứng dụng công nghệ bánh đà trong sản xuất điện.",
      sponsor: "Đang cập nhật",
      duration: "Đang cập nhật",
      image: "/images/dien_banh_da.jpg"
    },
    {
      title: "Biến Rác Thải thành tài nguyên",
      description: "Dự án chuyển đổi rác thải thành các sản phẩm có giá trị và tài nguyên hữu ích.",
      sponsor: "Đang cập nhật",
      duration: "Đang cập nhật",
      image: "/images/bien_rac_thai_thanh_tai_nguyen.jpg"
    },
    {
      title: "Sản xuất muối nhanh bằng công nghệ mới",
      description: "Dự án ứng dụng công nghệ mới trong quy trình sản xuất muối.",
      sponsor: "Đang cập nhật",
      duration: "Đang cập nhật",
      image: "/images/san_xuat_moi_nhanh.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Sidebar */}
          <aside className="lg:w-[300px] flex-shrink-0">
            <ProjectsSidebar currentPath={currentPath} />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-8 text-gray-800">Dự án trong nước</h1>

              {projects.length > 0 ? (
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="border-l-4 border-green-600 pl-4">
                            <h2 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h2>
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📋</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Chưa có dự án nào</h2>
                  <p className="text-gray-600">Thông tin về các dự án trong nước đang được cập nhật.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

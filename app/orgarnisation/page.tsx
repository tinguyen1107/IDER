import Breadcrumb from "@/components/Breadcrumb";
import OrgSidebar from "@/components/OrgSidebar";
import { getCurPathname } from "@/lib/pathname";

export default async function BoardOfDirectionPage() {
  const currentPath = await getCurPathname();
  
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tổ chức", href: "/orgarnisation" },
    { label: "Giới thiệu chung", href: "/orgarnisation" },
  ];

  const staffData = [
    // Group I: ICT
    { group: "I.", groupName: "Nhóm ICT (03)", name: "Võ Nguyên Sơn", degree: "TS", position: "Viện phó/Trưởng nhóm", isLeader: true },
    { group: "I.", groupName: "", name: "Nguyễn Quang", degree: "TS", position: "CBNC-GV", isLeader: false },
    { group: "I.", groupName: "", name: "Nguyễn Trọng Bắc", degree: "TS", position: "CBNC-GV", isLeader: false },
    // Group II: Vật lý
    { group: "II.", groupName: "Nhóm Vật lý (08)", name: "Nguyễn Quang Hưng", degree: "PGS.TS", position: "Viện Trưởng/Trưởng nhóm", isLeader: true },
    { group: "II.", groupName: "", name: "Lê Tấn Phúc", degree: "TS", position: "CBNC-GV", isLeader: false },
    { group: "II.", groupName: "", name: "Trần Đông Xuân", degree: "TS", position: "CBNC-GV", isLeader: false },
    { group: "II.", groupName: "", name: "Phan Hồng Khiêm", degree: "TS", position: "CBNC-GV", isLeader: false },
    { group: "II.", groupName: "", name: "Nguyễn Dũng Chinh", degree: "NCS", position: "CBNC-GV", isLeader: false },
    { group: "II.", groupName: "", name: "Phan Thị Thùy Giang", degree: "TS", position: "CBNC-GV", isLeader: false },
    { group: "II.", groupName: "", name: "Phan Nhựt Huân", degree: "Th.S", position: "CBNC-GV", isLeader: false },
    { group: "II.", groupName: "", name: "Nguyễn Huỳnh Kim Ngân", degree: "NCS", position: "CBNC-GV", isLeader: false },
    // Group III: Vật liệu và Linh kiện tương lai
    { group: "III.", groupName: "Phòng thí nghiệm Vật liệu và Linh kiện tương lai (16)", name: "Nguyễn Đăng Nam", degree: "PGS. TS", position: "Viện phó/Trưởng nhóm", isLeader: true },
    { group: "III.", groupName: "", name: "Đào Vĩnh Ái", degree: "TS", position: "Trưởng PTN", isLeader: false },
    { group: "III.", groupName: "", name: "Nguyễn Sĩ Hoài Vũ", degree: "TS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Đinh Văn Phúc", degree: "TS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Nguyễn Văn Kiều", degree: "TS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Nguyễn Thị Kiều Phương", degree: "TS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Nguyễn Văn Toàn", degree: "NCS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Phạm Quốc Hậu", degree: "TS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Nguyễn Đình Tiến Dũng", degree: "NCS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Trần Bạch Như Ý", degree: "Th.S", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Nguyễn Duy Khôi", degree: "NCS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Lưu Thị Thủy", degree: "Th.S", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Tôn Thất Lộc", degree: "Th.S", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Lại Xuân Bách", degree: "NCS", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Đào Thị Bích Ngọc", degree: "Th.S", position: "NCV-GV", isLeader: false },
    { group: "III.", groupName: "", name: "Phan Hoàng Vĩnh Trường", degree: "HVCH", position: "NCV-GV", isLeader: false },
    // Group IV: Vật Liệu Môi Trường & Năng Lượng
    { group: "IV.", groupName: "Vật Liệu Môi Trường & Năng Lượng (04)", name: "Trần Nguyễn Hải", degree: "TS", position: "Trưởng nhóm", isLeader: true },
    { group: "IV.", groupName: "", name: "Nguyễn Tuấn Lợi", degree: "TS", position: "NCV-GV", isLeader: false },
    { group: "IV.", groupName: "", name: "Phùng Viết Đức", degree: "Th.S", position: "NCV-GV", isLeader: false },
    { group: "IV.", groupName: "", name: "Nguyễn Thúy An", degree: "TS", position: "NCV-GV", isLeader: false },
    // Group V: Tính toán và Mô phỏng
    { group: "V.", groupName: "Nhóm Tính toán và Mô phỏng (2)", name: "Hoàng Hải", degree: "TS", position: "Trưởng nhóm", isLeader: true },
    { group: "V.", groupName: "", name: "Trần Thị Thùy Linh", degree: "TS", position: "NCV-GV", isLeader: false },
    // Group VI: Toán
    { group: "VI.", groupName: "Nhóm Toán (2)", name: "Trần Quốc Việt", degree: "Th.S", position: "Trưởng nhóm", isLeader: true },
    { group: "VI.", groupName: "", name: "Phan Thành Việt", degree: "TS", position: "NCV-GV", isLeader: false },
  ];

  // Group staff by group number
  const groupedStaff = staffData.reduce((acc, staff) => {
    if (!acc[staff.group]) {
      acc[staff.group] = [];
    }
    acc[staff.group].push(staff);
    return acc;
  }, {} as Record<string, typeof staffData>);

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
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Tổ chức</h1>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Giới thiệu chung</h2>
              
              <div className="space-y-8">
                {/* Cơ sở pháp lý */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    <strong>Lịch sử hình thành</strong>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Chi nhánh RIDES-HCM được thành lập theo <em>Giấy chứng nhận đăng ký hoạt động số 76/ĐK-KHCN-CN</em> do Sở Khoa học và Công nghệ Thành phố Hồ Chí Minh cấp ngày 13 tháng 10 năm 2025, căn cứ theo Luật Khoa học và Công nghệ 2013 và Nghị định 08/2014/NĐ-CP về tổ chức khoa học và công nghệ.
                  </p>
                </div>

                {/* Chức năng, nhiệm vụ */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    <strong>Chức năng và nhiệm vụ</strong>
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Chi nhánh RIDES-HCM có nhiệm vụ:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Tổ chức nghiên cứu, triển khai, chuyển giao công nghệ trong các lĩnh vực môi trường, năng lượng tái tạo, nông nghiệp tuần hoàn, ứng phó biến đổi khí hậu;</li>
                      <li>Phối hợp với các địa phương, doanh nghiệp và trường đại học trong khu vực phía Nam để phát triển các mô hình kinh tế sinh thái và nông nghiệp xanh;</li>
                      <li>Thực hiện đào tạo, hội thảo, hợp tác quốc tế và tư vấn kỹ thuật trong lĩnh vực khoa học môi trường;</li>
                      <li>Là đầu mối đại diện của RIDES trong các chương trình hợp tác KH&CN quốc tế, bao gồm các dự án về xử lý rác thải nông nghiệp, tái tạo năng lượng, và phát triển bền vững.</li>
                    </ul>
                  </div>
                </div>

                {/* Các hoạt động tiêu biểu */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    <strong>Các hoạt động tiêu biểu</strong>
                  </h3>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      Chi nhánh RIDES-HCM tham gia triển khai một số chương trình và đề án quốc gia do Viện RIDES chủ trì, bao gồm:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><em>Đề án &ldquo;Rác thải nông nghiệp tuần hoàn sinh thái tại Việt Nam&rdquo;</em> (Quyết định số 28/2025/QĐ-RIDES ngày 9/10/2025);</li>
                      <li><em>Dự án &ldquo;Rác thải nông nghiệp tuần hoàn sinh thái tỉnh Lào Cai&rdquo;</em> (Quyết định số 29/2025/QĐ-RIDES ngày 10/10/2025);</li>
                      <li>Các chương trình hợp tác về ứng dụng công nghệ vi sinh trong xử lý phụ phẩm nông nghiệp, mô hình nông nghiệp – năng lượng tuần hoàn, và phát triển cụm nghiên cứu năng lượng xanh khu vực phía Nam.</li>
                    </ul>
                  </div>
                </div>

                {/* Tổ chức và nhân sự */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    <strong>Tổ chức và nhân sự</strong>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Chi nhánh RIDES-HCM được điều hành bởi <strong>Giám đốc Chi nhánh: Giáo sư, Tiến sĩ Dương Văn Sinh</strong> (đồng thời là Chủ tịch Hội đồng Khoa học Viện Nghiên cứu Thiên tai và Môi trường).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Các bộ phận chuyên môn trực thuộc chi nhánh gồm:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed ml-4 mb-6">
                    <li>Phòng Nghiên cứu Môi trường và Năng lượng sạch</li>
                    <li>Phòng Khoa học Ứng dụng và Dự án</li>
                    <li>Phòng Hợp tác quốc tế và Truyền thông KH&CN</li>
                    <li>Bộ phận Hành chính – Tổng hợp</li>
                  </ol>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    NCKHCB&ƯD trực thuộc Trường Đại học Duy Tân trong năm học 2021-2022 có 35 thành viên, trong đó có 03 PGS.TS, 19 TS và 14 ThS/NCS/HVCH. Bộ phận nghiên cứu được chia thành 06 nhóm chính: Công nghệ thông tin và Truyền thông (ICT); Vật lý; Vật liệu và Linh kiện tương lai; Vật liệu môi trường và Năng lượng; Mô phỏng; và Toán học. Danh sách cán bộ thuộc các nhóm nghiên cứu và phân bố học vị/học hàm được mô tả như trong Bảng.
                  </p>

                  {/* Staff Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold">TT</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Họ và Tên</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Học hàm/Học vị</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Chức vụ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(groupedStaff).map(([groupNum, staff]) => {
                          const groupNameRow = staff.find(m => m.groupName !== "");
                          return staff.map((member, idx) => {
                            const isGroupHeader = member.groupName !== "";
                            const showGroupName = isGroupHeader && idx === 0;
                            return (
                              <tr
                                key={`${groupNum}-${idx}`}
                                className={member.isLeader ? "bg-blue-50" : ""}
                              >
                                {idx === 0 && (
                                  <td
                                    rowSpan={staff.length}
                                    className="border border-gray-300 px-4 py-3 align-top font-semibold text-center"
                                  >
                                    {groupNum}
                                  </td>
                                )}
                                <td className={`border border-gray-300 px-4 py-3 ${member.isLeader ? "font-bold" : ""}`}>
                                  {showGroupName && groupNameRow && (
                                    <div className="font-semibold mb-1 text-blue-800">{groupNameRow.groupName}</div>
                                  )}
                                  {member.isLeader ? <strong>{member.name}</strong> : member.name}
                                </td>
                                <td className={`border border-gray-300 px-4 py-3 ${member.isLeader ? "font-bold" : ""}`}>
                                  {member.isLeader ? <strong>{member.degree}</strong> : member.degree}
                                </td>
                                <td className={`border border-gray-300 px-4 py-3 ${member.isLeader ? "font-bold" : ""}`}>
                                  {member.isLeader ? <strong>{member.position}</strong> : member.position}
                                </td>
                              </tr>
                            );
                          });
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cơ quan chủ quản */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    <strong>Cơ quan chủ quản</strong>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>Viện Nghiên cứu Thiên tai và Môi trường</strong> (RIDES) – trực thuộc Liên hiệp các Hội Khoa học và Kỹ thuật Việt Nam (VUSTA).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Viện có trụ sở chính tại Hà Nội, được Bộ Khoa học và Công nghệ Việt Nam cấp Giấy chứng nhận hoạt động KH&CN số A-1684 (lần cấp đổi ngày 28/04/2025).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Viện hoạt động trong các lĩnh vực:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed ml-4">
                    <li>Nghiên cứu khoa học, ứng phó thiên tai, bảo vệ môi trường;</li>
                    <li>Công nghệ năng lượng tái tạo và xử lý rác thải;</li>
                    <li>Đào tạo, tư vấn và hợp tác quốc tế về phát triển bền vững.</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}


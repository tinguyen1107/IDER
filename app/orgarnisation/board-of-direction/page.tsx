import Breadcrumb from "@/components/Breadcrumb";
import OrgSidebar from "@/components/OrgSidebar";

export default function BoardOfDirectionPage({ params }: { params: { slug: string } }) {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tổ chức", href: "/orgarnisation/board-of-direction" },
    { label: "Giới thiệu chung", href: "/orgarnisation/board-of-direction" },
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
            <OrgSidebar currentPath="/orgarnisation/board-of-direction" />
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
                    <strong>Cơ sở pháp lý</strong>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Thành lập theo Nghị Quyết số 02/NQ-ĐHDT-HĐQT ngày 12/5/2018 của Chủ tịch Hội đồng quản trị Trường Đại học Duy Tân và Giấy chứng nhận hoạt động KH&CN số 382/ĐK-KHCN ngày 08/10/2018 cấp bởi Sở KH&CN TP. Hồ Chí Minh.
                  </p>
                </div>

                {/* Chức năng, nhiệm vụ */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    <strong>Chức năng, nhiệm vụ</strong>
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Viện NCKHCB&ƯD có nhiệm vụ thực hiện các nghiên cứu khoa học và phát triển công nghệ trong các lĩnh vực: Kỹ thuật phần mềm, hệ thống thông tin, công nghệ kỹ thuật điện-điện tử, hoá học, vật lý, công nghệ kỹ thuật môi trường, sinh học, y khoa, vv... cũng như sản xuất thử nghiệm và chuyển giao công nghệ các sản phẩm hình thành từ kết quả nghiên cứu nêu trên.
                    </p>
                    <p>
                      Viện NCKHCB&ƯD đẩy mạnh hợp tác, liên kết với các cơ quan, chuyên gia trong và ngoài nước về các lĩnh vực nghiên cứu có liên quan nhằm phát triển lực lượng và chất lượng nghiên cứu.
                    </p>
                    <p>
                      Ngoài ra, Viện NCKHCB&ƯD có nhiệm vụ hỗ trợ Trường Đại học Duy Tân tư vấn và thực hiện đào tạo đại học, sau đại học, thực hiện các dịch vụ KH&CN.
                    </p>
                  </div>
                </div>

                {/* Cơ cấu tổ chức Viện */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    <strong>Cơ cấu tổ chức Viện</strong>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    NCKHCB&ƯD trực thuộc Trường Đại học Duy Tân trong năm học 2021-2022 có 35 thành viên, trong đó có 03 PGS.TS, 19 TS và 14 ThS/NCS/HVCH. Viện được điều hành bởi PGS.TS. Nguyễn Quang Hưng (Viện Trưởng) và 02 Phó Viện trưởng gồm PGS. TS. Nguyễn Đăng Nam, và TS. Võ Nguyễn Sơn. Bộ phận nghiên cứu được chia thành 06 nhóm chính: Công nghệ thông tin và Truyền thông (ICT); Vật lý; Vật liệu và Linh kiện tương lai; Vật liệu môi trường và Năng lượng; Mô phỏng; và Toán học. Danh sách cán bộ thuộc các nhóm nghiên cứu và phân bố học vị/học hàm được mô tả như trong Bảng.
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
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}


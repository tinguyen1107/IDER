import Breadcrumb from "@/components/Breadcrumb";
import { getCurPathname } from "@/lib/pathname";

export default async function NewsPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tin tức", href: "/news" },
  ];

  const newsCategories = [
    {
      name: "Dự án",
      href: "/news/projects",
      description: "Tin tức về các dự án nghiên cứu",
      icon: "📋",
    },
    {
      name: "Tạp chí & Hội nghị",
      href: "/news/conferences",
      description: "Thông tin về các tạp chí và hội nghị khoa học",
      icon: "📚",
    },
    {
      name: "Học bổng & Khóa học",
      href: "/news/scholarships",
      description: "Thông tin về học bổng và khóa học",
      icon: "🎓",
    },
    {
      name: "Tin tức DTU",
      href: "/news/dtu",
      description: "Tin tức từ Đại học Duy Tân",
      icon: "🏛️",
    },
    {
      name: "Tin tức Viện",
      href: "/news/institute",
      description: "Tin tức nội bộ của Viện",
      icon: "📰",
    },
    {
      name: "Thành tựu",
      href: "/news/achievements",
      description: "Các thành tựu và giải thưởng",
      icon: "🏆",
    },
    {
      name: "Sự kiện",
      href: "/news/events",
      description: "Các sự kiện sắp diễn ra",
      icon: "📅",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-6xl mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Tin tức</h1>
            <p className="text-gray-600">
              Các tin tức và thông báo từ Viện Nghiên cứu Khoa học cơ bản &
              Ứng dụng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsCategories.map((category, index) => (
              <a
                key={index}
                href={category.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-blue-500"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {category.name}
                </h2>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


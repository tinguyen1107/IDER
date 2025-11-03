import Breadcrumb from "@/components/Breadcrumb";
import { getCurPathname } from "@/lib/pathname";

export default async function NewsEventsPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tin tức", href: "/news" },
    { label: "Sự kiện", href: "/news/events" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Sự kiện</h1>
          <p className="text-gray-600">Đang cập nhật...</p>
        </div>
      </div>
    </div>
  );
}


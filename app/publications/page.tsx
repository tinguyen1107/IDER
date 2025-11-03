import Breadcrumb from "@/components/Breadcrumb";
import { getCurPathname } from "@/lib/pathname";

export default async function PublicationsPage() {
  const currentPath = await getCurPathname();

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Công bố Khoa học", href: "/publications" },
  ];

  const publications = [
    {
      title: "Đang cập nhật",
      description: "Danh sách các công bố khoa học đang được cập nhật.",
      category: "Đang cập nhật",
      year: "Đang cập nhật",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Công bố Khoa học
            </h1>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="border-l-4 border-purple-600 pl-6 py-4 bg-gray-50 rounded-r-lg"
                >
                  <h2 className="text-xl font-bold mb-2 text-gray-800">
                    {pub.title}
                  </h2>
                  <p className="text-gray-700 mb-3">{pub.description}</p>
                  <div className="text-sm text-gray-600">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded mr-2">
                      {pub.category}
                    </span>
                    <span>{pub.year}</span>
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


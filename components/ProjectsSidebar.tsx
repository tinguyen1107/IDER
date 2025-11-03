"use client";

import Link from "next/link";

interface ProjectsSidebarProps {
  currentPath: string;
}

export default function ProjectsSidebar({ currentPath }: ProjectsSidebarProps) {
  const menuItems = [
    { name: "DỰ ÁN HỢP TÁC QUỐC TẾ", href: "/projects/international" },
    { name: "DỰ ÁN TRONG NƯỚC", href: "/projects/domestic" },
  ];

  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Dự Án</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-800"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}


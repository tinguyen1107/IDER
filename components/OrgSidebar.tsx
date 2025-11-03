"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface OrgSidebarProps {
  currentPath?: string;
}

export default function OrgSidebar({ currentPath }: OrgSidebarProps) {
  const pathname = usePathname();
  const activePath = currentPath || pathname;

  const menuItems = [
    { name: "Giới thiệu", href: "/orgarnisation/board-of-direction" },
    { name: "Ban lãnh đạo", href: "/orgarnisation/board-of-direction" },
    { name: "Nhóm Nghiên cứu", href: "#" },
    { name: "Labs", href: "#" },
    { name: "Cựu thành viên", href: "#" },
  ];

  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Tổ chức</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = activePath === item.href;
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


"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Trang chủ", href: "/" },
    {
      name: "Tổ chức",
      href: "/orgarnisation",
      submenu: [
        { name: "Giới thiệu", href: "/orgarnisation" },
        { name: "Ban lãnh đạo", href: "/orgarnisation/board-of-direction" },
        { name: "Nhóm Nghiên cứu", href: "/orgarnisation/research-groups" },
        { name: "Labs", href: "/orgarnisation/labs" },
        { name: "Cựu thành viên", href: "/orgarnisation/alumni" },
      ],
    },
    {
      name: "Dự án",
      href: "#",
      submenu: [
        { name: "Dự án hợp tác quốc tế", href: "#" },
        { name: "Dự án trong nước", href: "#" },
      ],
    },
    { name: "Công bố Khoa học", href: "#" },
    {
      name: "Tin tức",
      href: "#",
      submenu: [
        { name: "Dự án", href: "#" },
        { name: "Tạp chí & Hội nghị", href: "#" },
        { name: "Học bổng & Khóa học", href: "#" },
        { name: "Tin tức DTU", href: "#" },
        { name: "Tin tức Viện", href: "#" },
        { name: "Thành tựu", href: "#" },
        { name: "Sự kiện", href: "#" },
      ],
    },
    { name: "Tuyển dụng", href: "#" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-blue-800">
              logo
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-bold text-blue-800">
                IFAS
              </div>
              <div className="text-xs text-gray-600 hidden md:block">
                Viện nghiên cứu Khoa học cơ bản & Ứng dụng
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 border border-gray-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex flex-col text-sm text-gray-600">
            <div>08.3650.403</div>
            <div>ifas.hcm@duytan.edu.vn</div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-800 font-medium"
                  onClick={() => {
                    if (!item.submenu) setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-1 text-sm text-gray-600 hover:text-blue-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 text-sm text-gray-600">
              <div>08.3650.403</div>
              <div>ifas.hcm@duytan.edu.vn</div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


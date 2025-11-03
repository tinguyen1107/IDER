"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/images/mot_trieu_binh_ac_quy_xanh.jpg",
    "/images/rac_thai_nong_nghiep_tuan_hoan.jpg",
    "/images/dien_banh_da.jpg",
    "/images/bien_rac_thai_thanh_tai_nguyen.jpg",
    "/images/san_xuat_moi_nhanh.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%), url(${image})`
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-900/50 hover:bg-gray-900/70 text-white p-3 rounded transition-all"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-900/50 hover:bg-gray-900/70 text-white p-3 rounded transition-all"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-left max-w-4xl">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Chi nhánh Viện Nghiên cứu Thiên tai và Môi trường tại Thành phố Hồ Chí Minh
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl leading-relaxed opacity-95">
            RIDES-HCM là đơn vị trực thuộc Viện Nghiên cứu Thiên tai và Môi trường – một tổ chức khoa học và
            công nghệ hoạt động trong lĩnh vực môi trường, năng lượng xanh, biến đổi khí hậu và phát triển bền
            vững.
          </p>
          <p className="text-sm md:text-base mb-10 max-w-2xl leading-relaxed opacity-90 italic">
            &ldquo;Thành lập ngày 13 tháng 10 năm 2025&rdquo;
          </p>
          <Link
            href="/org"
            className="bg-white text-blue-800 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Chi Tiết
          </Link>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

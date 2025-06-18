"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { href: "/", label: "หน้าแรก" },
    { href: "/about", label: "เกี่ยวกับ" },
    { href: "/service", label: "บริการ" },
    { href: "/contact", label: "ติดต่อ" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex items-center justify-center gap-8 py-6">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <Link
                href={item.href}
                className="relative block px-4 py-2 text-gray-700 font-light tracking-wide transition-all duration-300 hover:text-gray-900"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}

                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-gray-900 transition-all duration-300 ease-out ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                />

                {/* Glow effect */}
                <span
                  className={`absolute inset-0 rounded-md bg-gray-50 transition-opacity duration-300 -z-10 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating indicator */}
      <div
        className={`absolute bottom-0 left-1/2 w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent transition-all duration-500 ${
          hoveredIndex !== null ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{
          transform: `translateX(-50%) translateX(${
            hoveredIndex !== null ? (hoveredIndex - 1.5) * 120 : 0
          }px)`,
        }}
      />
    </nav>
  );
}

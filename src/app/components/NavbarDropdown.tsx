"use client";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavbarDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
  label,
  items,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn("relative group", className && className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="text-white text-base font-medium px-2 py-1 
      flex items-center gap-1 hover:text-red-500 transition-all duration-500"
      >
        {label}
        <BsChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Panel */}
      <div
        className={`absolute top-full left-0 bg-zinc-800 mt-3 rounded-md shadow-lg py-2 w-50 z-50
          transition-all duration-200 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }
        `}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-3 py-2 text-sm text-white hover:text-red-500 hover:bg-zinc-700 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropdown;

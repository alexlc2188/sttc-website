"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

interface NavbarItemProps {
  label: string;
}

const routeMap: Record<string, string> = {
  Home: "/",
  About: "/about",
  Services: "/services",
  Events: "/events",
  "Weekly Timetable": "/timetable",
  "Contact Us": "/contact-us",
};

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  const pathname = usePathname();
  const href = routeMap[label] || "#";
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={`
        text-md font-medium px-2 py-1 transition-all duration-200
        ${isActive
          ? "text-red-500 underline underline-offset-8"
          : "text-white hover:text-red-500 hover:underline underline-offset-8"
        }
      `}
    >
      {label}
    </a>
  );
};

export default NavbarItem;

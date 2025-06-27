"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import SidebarMenu from "./SidebarMenu"; 
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    setShowSidebar((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="w-full fixed z-40 bg-zinc-900 bg-opacity-90 text-white">
        <div className="px-4 md:px-16 py-6 flex items-center justify-between relative">

          {/* LEFT NAV */}
          <div className="hidden lg:flex gap-9 items-center flex-1 justify-start">
            <NavbarItem label="Home" />
            <NavbarItem label="About" />
            <NavbarDropdown
              label="Services"
              items={[
                { label: "Table Hire", href: "/table-hire" },
                { label: "Group Coaching", href: "/group-coaching" },
                { label: "Private Coaching", href: "/private-coaching" },
              ]}
            />
          </div>

          {/* LOGO (clickable) */}
          <div className="flex justify-start lg:justify-center w-full lg:w-[160px]">
            <Link href="/home" className="flex justify-center">
              <img
                src="/images/sttc logo latest.png"
                alt="STTC logo"
                className="h-20 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* RIGHT NAV */}
          <div className="hidden lg:flex gap-9 items-center flex-1 justify-end whitespace-nowrap">
            <NavbarDropdown
              label="Events"
              items={[
                { label: "STTC Legends", href: "/sttc-legends" },
              ]}
            />
            <NavbarItem label="Weekly Timetable" />
            <NavbarItem label="Contact Us" />
          </div>

          {/* MOBILE HAMBURGER ICON */}
          <div className="ml-auto lg:hidden">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md bg-red-500 transition-all duration-300 text-white hover:scale-110 hover:bg-zinc-800 hover:text-red-500"
            >
              <RxHamburgerMenu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>

      {/* Sidebar overlay for mobile */}
      <SidebarMenu visible={showSidebar} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;

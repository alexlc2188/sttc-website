"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BsChevronDown } from "react-icons/bs";


interface SidebarMenuProps {
  visible: boolean;
  onClose: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ visible, onClose }) => {
const [showServices, setShowServices] = useState(false);
const [showEvents, setShowEvents] = useState(false);

const pathname = usePathname(); 

const getLinkClasses = (href: string) =>
  `px-3 py-2 rounded-md transition-all duration-200 ease-in-out
   ${pathname === href
     ? "bg-zinc-800 text-red-500 font-bold border-l-4 border-red-500"
     : "text-white hover:text-red-500 hover:bg-zinc-800"}`;

    return (
      <React.Fragment>
        {/* Backdrop Blur */}
        {visible && (
          <div
            onClick={onClose}
            className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}    

    {/* Sidebar Menu */}
    <div
      className={`
        fixed top-0 left-0 h-full w-64 bg-black border-r border-gray-800 z-50
        transform transition-transform duration-300 ease-in-out
        ${visible ? "translate-x-0" : "-translate-x-full"}
      `}
    >

      <div className="flex flex-col p-6 gap-4 text-white">
        <button onClick={onClose} className="self-end text-sm text-gray-400 hover:text-white">
          Close ✕
        </button>

        <a href="/home" className={getLinkClasses("/home")}>Home</a>
        <a href="/about" className={getLinkClasses("/about")}>About</a>
        

        {/* Services dropdown menu */}
        <div className="flex flex-col">
  <button
    onClick={() => setShowServices(!showServices)}
    className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-200 ease-in-out
      ${showServices || pathname?.startsWith("/table-hire") || pathname?.startsWith("/group-coaching") || pathname?.startsWith("/private-coaching")
        ? "bg-zinc-800 text-red-500 font-bold border-l-4 border-red-500"
        : "text-white hover:text-red-500 hover:bg-zinc-800"}
    `}
  >
 <span>Services</span>
    <BsChevronDown
      className={`ml-2 h-4 w-4 transition-transform duration-300 ${
        showServices ? "rotate-180" : "rotate-0"
      }`}
      />
  </button>

  <div
    className={`
      overflow-hidden transition-all duration-300 ease-in-out
      ${showServices ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
    `}
  >
    <div className="flex flex-col gap-2 text-sm ml-4 mt-1">
      <a href="/table-hire" className={getLinkClasses("/table-hire")}>Table Hire</a>
      <a href="/group-coaching" className={getLinkClasses("/group-coaching")}>Group Coaching</a>
      <a href="/private-coaching" className={getLinkClasses("/private-coaching")}>Private Coaching</a>
    </div>
  </div>
</div>





         {/* Events dropdown menu */}
         <div className="flex flex-col">
  <button
    onClick={() => setShowEvents(!showEvents)}
    className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-300 ease-in-out
      ${showEvents || pathname?.startsWith("/sttc-legends") || pathname?.startsWith("/social-nights")
        ? "bg-zinc-800 text-red-500 font-bold border-l-4 border-red-500"
        : "text-white hover:text-red-500 hover:bg-zinc-800"}
    `}
  >
    <span>Events</span>
    <BsChevronDown
      className={`ml-2 h-4 w-4 transition-transform duration-300 ${
        showEvents ? "rotate-180" : "rotate-0"
      }`}
      />
  </button>

  <div
    className={`
      overflow-hidden transition-all duration-300 ease-in-out
      ${showEvents ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
    `}
  >
    <div className="flex flex-col gap-2 text-sm ml-4 mt-1">
      <a href="/sttc-legends" className={getLinkClasses("/sttc-legends")}>STTC Legends</a>
    </div>
  </div>
</div>



        {/* Componenets outside the dropdown menu */}
<a href="/weekly-timetable" className={getLinkClasses("/weekly-timetable")}>Weekly Timetable</a>
<a href="/contact-us" className={getLinkClasses("/contact-us")}>Contact Us</a>
    </div>
    </div>
    </React.Fragment>
  );
};

export default SidebarMenu;
